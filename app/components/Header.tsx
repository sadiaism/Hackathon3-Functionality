"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useCart } from "../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";




const Header = () => {
  const { cartItems } = useCart();
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* top header */}
      <div className="hidden md:flex justify-between h-[38px] bg-[#000000] ">
        <div className="ml-[544px] text-[#FFFFFF] md:ml-[544px]">
          Sign up and get 20% off to your first order.
          <Button variant={"apnaStyle"} className="underline">
            Sign Up Now
          </Button>
        </div>
        <div>
          <Image src={"/images/cross.svg"} alt="cross" width={20} height={20} />
        </div>
      </div>

      {/* navbar */}
      <div className="hidden md:flex h-[41px] mt-[20px] gap-[40px]">
        <div className="flex justify-between w-[577px] gap-[2px] mt-3">
          <h1 className="text-[24px] font-bold text-[#000000]">SHOP.CO</h1>

          <nav className="hidden md:flex">
            <ul className="flex gap-[48px] text-[16px] mt-1 ">
              <li className="w-[48px] h-[24px] underline">
                <Link href="#Shop" className="flex hover:text-blue-500 ">
                  Shop
                  <Image
                    src={"/images/downArrow.svg"}
                    alt="sign"
                    width={16}
                    height={16}
                  />
                </Link>
              </li>

              <li className="w-[66px] h-[24px]">
                <Link href="#On Sale" className="hover:text-blue-500">
                  On Sale
                </Link>
              </li>

              <li className="w-[100px] h-[24px]">
                <Link href="#New Arrivals" className="hover:text-blue-500">
                  New Arrivals
                </Link>
              </li>

              <li className="h-[24px]">
                <Link href="/about" className="hover:text-blue-500">
                  About
                </Link>
              </li>

              <li className="h-[24px]">
                <Link href="/contact" className="hover:text-blue-500">
                  Contact
                </Link>
              </li>




            </ul>
          </nav>
        </div>

        <div className="w-[577px] h-[48px]  bg-[#F0F0F0] rounded-full">
          <div className="flex pl-[16px] pt-[12px] pb-[12px] gap-[12px]">
            <Image
              src={"/images/search bar.svg"}
              alt="cross"
              width={24}
              height={24}
            />
            <input type="text" placeholder="Search for products"></input>
          </div>
        </div>

        <div className="flex  h-[24px] gap-[14px] mt-2">
          
          <Link href="/cart" className="relative">
          <FiShoppingCart size={24}/>
          {cartItems.length >= 0 && (
            <span className="absolute top-0 right-0 bg-red-400 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
             {cartItems.reduce((total, item) => total + (item.quantity || 1), 0)}
            </span>
          )}
          </Link>
          <Link href="/wishlist" className="relative">
          <FaRegHeart size={24}/>
          {cartItems.length >= 0 && (
            <span className="absolute top-0 right-0 bg-red-400 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}</Link>

          {/*<Link href="./sign-up">
            <Image
              src={"/images/email icon.svg"}
              alt="icon"
              width={24}
              height={24}
            />
          </Link>*/}

        </div>
      </div>
      {/* nav end */}

      {/* mobile navbar */}

      <div className="flex justify-evenly  md:hidden">
        <div className="flex mt-3" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
        {isMenuOpen && (
          <ul className="flex flex-col gap-4 md:hidden">
            <li>
              <Link href="#Shop" className="block" onClick={toggleMenu}>
                Shop
              </Link>
              
              <Link
                href="/categorypage"
                className="block"
                onClick={toggleMenu}
              >
                Categorypage
              </Link>
              <Link href="/cart" className="block" onClick={toggleMenu}>
                Cart
              </Link>
            </li>
            <li>
              <Link href="#On Sale" onClick={toggleMenu}>
                On sale
              </Link>
            </li>
            <li>
              <Link href="#New Arrivals" onClick={toggleMenu}>
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href="#Brands" onClick={toggleMenu}>
                Brands
              </Link>
            </li>
          </ul>
        )}

        <h1 className="text-[24px] font-bold text-[#000000] mt-[10px]">
          SHOP.CO
        </h1>
        <h3 className="flex gap-[12px]">
          <Image
            src={"/images/search bar.svg"}
            alt="cross"
            width={24}
            height={24}
          />

<Link href="/cart" className="relative">
          <FiShoppingCart size={24}  className="mt-3"/>
          {cartItems.length >= 0 && (
            <span className="absolute top-0 right-0 bg-red-400 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center mt-3">
             {cartItems.reduce((total, item) => total + (item.quantity || 1), 0)}
            </span>
          )}
          </Link>
          
          <Image
            src={"/images/email icon.svg"}
            alt="icon"
            width={24}
            height={24}
          />
        </h3>
      </div>
    </div>
  );
};

export default Header;
