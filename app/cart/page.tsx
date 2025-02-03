"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCart } from "../context/CartContext"; // Import Cart Context
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { useRouter } from "next/navigation";



interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  size: string;
  discountPercent: number;
  colors: string[];
  isNew: boolean;
  category: string;
  slug: string;
  quantity?: number;
}

const Page = () => {
  const { cartItems,increaseQuantity,decreaseQuantity,removeFromCart } = useCart();
  const router = useRouter(); 
  const [products, setProducts] = useState<Product |null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Product = await client.fetch(`*[_type == "products"] {
            _id, name, description, price, image, size, discountPercent, colors, isNew, category, "slug": slug.current
          }`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
  console.log(products);
  console.log(cartItems)

 

 
  


  

 
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-4 mt-12">
        <Link href="/" className="hover:text-blue-500">
          <h1 className="flex gap-2">
            Home
            <Image
              src={"/images/rightArrow.svg"}
              alt="arrow"
              width={16}
              height={16}
            />
          </h1>
        </Link>
        <Link href="/cart" className="hover:text-blue-500">
          <h2>Cart</h2>
        </Link>
      </div>

      <div className="mt-12 font-extrabold text-2xl">Your Cart</div>

      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Left Side - Cart Items */}
        <div className="flex flex-col border p-4 rounded-2xl gap-4 ">
          {cartItems.length === 0 ? (
            <Link href="/categorypage"><p className="text-center">Shop Now</p></Link>
          ) : (
            <div>
              {cartItems.map((item) => (
                
                <div
                  key={item._id}
                  className="flex items-center gap-4 border p-4 rounded-lg"
                >
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                 <div className="flex flex-col w-[217px] md:w-[527px] h-[124px]">
        <h1 className="flex justify-between text-[20px] font-bold">
          {item.name}
         
          <button
          onClick={() => removeFromCart(item._id)}
          className="bg-red-500 text-white py-1 px-3 rounded"
        >
          <RiDeleteBinLine />
        </button>
                 
        </h1>
        <h2>Size:{item.selectedSize}</h2>
        <h3>Color:{item.selectedColor} </h3>
        <div className="flex justify-between items-center">
      <h4 className='flex justify-between text-[24px] font-extrabold'>
        ${Number(item.price)}</h4>
        <div className="flex items-center space-x-2">
          <Button
            variant="apnaStyle"
            className="w-[44px] h-[44px] border-[#e6e4e4] border-[1px] rounded-full"
            onClick={() => decreaseQuantity(item._id)} // Decrease quantity on click
          >
            -
          </Button>
          <span>{item.quantity}</span> {/* Display current quantity */}
          <Button
            variant="apnaStyle"
            className="w-[44px] h-[44px] border-[#e6e4e4] border-[1px] rounded-full"
            onClick={() => increaseQuantity(item._id)} // Increase quantity on click
          >
            +
          </Button>
        </div>
     
    </div>

      </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side - Order Summary */}
        <div className="flex flex-col w-80 p-4 ml-8 bg-gray-100 rounded-lg">
          <h1 className="text-xl font-extrabold">Order Summary</h1>
          <div className="flex justify-between">
            <h2>Subtotal</h2>
            <h3 className="font-bold">
              $
              {cartItems.reduce((acc, item) => acc + item.price * (item.quantity! || 1), 0)}
            </h3>
          </div>
          <div className="flex justify-between">
            <h2>Discount (-20%)</h2>
            <h3 className="text-red-500">
              -$
              {Math.floor(
                cartItems.reduce(
                  (acc, item) => acc + item.price * (item.quantity! || 1),
                  0
                ) * 0.2
              )}
            </h3>
          </div>
          <div className="flex justify-between">
            <h2>Delivery Fee</h2>
            <h3 className="font-bold">$15</h3>
          </div>
          <div className="flex justify-between">
            <h2 className="font-bold">Total</h2>
            <h3 className="text-xl font-bold">
              $
              {Math.floor(
                cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity!,
                  0
                ) *
                  0.8 +
                  15
              )}
            </h3>
          </div>
          <button
      className="w-full bg-black text-white mt-4 p-2 rounded"
      onClick={() => router.push("/checkout")}
    >
      Go to Checkout
    </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
