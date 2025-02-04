"use client";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { FaFileZipper } from "react-icons/fa6";

// Define a type for formValues
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
}


const Checkout = () => {
  const { cartItems } = useCart();

  // Billing Details State
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });

  // Calculate Subtotal, Discount & Total Price
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const discount = cartItems.reduce((acc, item) => acc + (item.price * 0.1), 0); // Example: 10% discount on each item
  const total = subtotal - discount;

  // Handle Form Inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // Dummy Place Order Function
  const handlePlaceOrder = async() => {

    const orderData = {
      _type:'order',
      firstName:formValues.firstName,
      lastName:formValues.lastName,
      email:formValues.email,
      phone:formValues.phone,
      address:formValues.address,
      zipCode:formValues.zipCode,
      city:formValues.city,

      cartItems: cartItems.map(item => ({
    _type: 'reference',
    _ref: item._id, // Convert to string (if necessary)
  })),
      total:total,
      discount:discount,
      status: 'pending',
      orderDate: new Date().toISOString()
    };
    try {
      await client.create(orderData)
      console.log("Order successfully saved in Sanity!");
      localStorage.removeItem("appliedDiscount")
    }catch(error) {
      console.error("error creating order", error)
    }

    console.log("Cart Items in Checkout:", cartItems);

    alert("Order Placed Successfully!");
  };

  return (
    
    <div className="container mx-auto p-4"><div className="flex gap-4 mt-12">
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
    <Link href="/checkout" className="hover:text-blue-500">
      <h2>Checkout</h2>
    </Link>
  </div>

      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cart Summary */}
        <div className="border p-4 rounded shadow">
          <h3 className="font-semibold mb-2 text-[24px]">Your Cart</h3>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className="flex justify-between border-b py-2">
                <p>{item.name} ({item.quantity || 1}x)</p>
                {/* Ensure price is a valid number before calling toFixed */}
                <p>${(item.price && !isNaN(item.price) ? item.price : 0).toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-[32px]">No items in cart</p>
          )}
          <div className="mt-4 text-[24px]">
            <p className="font-bold">Subtotal: ${subtotal.toFixed(2)}</p>
            <p className="text-red-500">Discount: -${discount.toFixed(2)}</p>
            <p className="font-bold text-xl">Total: ${total.toFixed(2)}</p>
          </div>
        </div>

        {/* Billing Details Form */}
        <div className="border p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Billing Details</h3>
          <form className="space-y-3">
            {Object.keys(formValues).map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formValues[field as keyof FormValues]}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            ))}
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
