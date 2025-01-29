"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCart } from "../context/CartContext"; // Import Cart Context
import { client } from "@/sanity/lib/client";

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
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [products,setProducts] = useState<Product>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Product = await client.fetch(`*[_type == "products"] {
            _id, name, description, price, image, size, discountPercent, colors, isNew, category, "slug": slug.current
          }`
        );
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
  console.log(products)

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-4 mt-12">
        <Link href="/" className="hover:text-blue-500">
          <h1 className="flex gap-2">
            Home
            <Image src={"/images/rightArrow.svg"} alt="arrow" width={16} height={16} />
          </h1>
        </Link>
        <Link href="/cart" className="hover:text-blue-500">
          <h2>Cart</h2>
        </Link>
      </div>

      <div className="mt-12 font-extrabold text-2xl">Your Cart</div>

      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Left Side - Cart Items */}
        <div className="flex flex-col border p-4 rounded-lg gap-4">
          {cart.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border p-4 rounded-lg">
                <Image src={item.image} alt={item.image} width={100} height={100} />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">{item.price}</h1>
                  <h2>Size: {item.selectedSize}</h2>
                  <h3>Color: {item.selectedColor[0]}</h3>
                  <h4 className="text-lg font-extrabold">${item.price}</h4>
                  <div className="flex gap-2">
                    <Button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity! - 1))}>
                      -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button onClick={() => updateQuantity(item.id, item.quantity! + 1)}>+</Button>
                  </div>
                  <Button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white">
                    Remove
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Side - Order Summary */}
        <div className="flex flex-col w-80 p-4 ml-8 bg-gray-100 rounded-lg">
          <h1 className="text-xl font-extrabold">Order Summary</h1>
          <div className="flex justify-between">
            <h2>Subtotal</h2>
            <h3 className="font-bold">${cart.reduce((acc, item) => acc + item.price * item.quantity!, 0)}</h3>
          </div>
          <div className="flex justify-between">
            <h2>Discount (-20%)</h2>
            <h3 className="text-red-500">
              -$
              {Math.floor(cart.reduce((acc, item) => acc + item.price * item.quantity!, 0) * 0.2)}
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
              {Math.floor(cart.reduce((acc, item) => acc + item.price * item.quantity!, 0) * 0.8 + 15)}
            </h3>
          </div>
          <Button className="w-full bg-black text-white mt-4">Go to Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
