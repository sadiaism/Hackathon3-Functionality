"use client";

import { createContext, useContext, useState, ReactNode } from "react";


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

// Define the shape of a cart item
interface CartItem {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

// Define the context data
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, selectedColor: string, selectedSize: string) => void;
  increaseQuantity:(id:string) => void;
  decreaseQuantity:(id:string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

// Create context with default values
const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

// CartProvider to wrap the app
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Function to add product to cart
  const addToCart = (product: Product, selectedColor: string, selectedSize: string) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);

      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          { ...product, quantity: 1, selectedColor, selectedSize },
        ];
      }
    });
    alert(`${product.name} has been added to your cart.`);
  };


  const increaseQuantity = (id:string) => {
    setCartItems((prevCart) => 
    prevCart.map((cartItem) =>
    cartItem._id === id
  ? {...cartItem, quantity: cartItem.quantity + 1 }
  :cartItem
))
  };

  const decreaseQuantity = (id:string) => {
    setCartItems((prevCart) => 
    prevCart.map((cartItem) =>
    cartItem._id === id && cartItem.quantity > 1 
  ? {...cartItem, quantity: cartItem.quantity - 1}
   : cartItem 
  ))
  }


  const removeFromCart = (id: string) => {
    setCartItems((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems,addToCart,increaseQuantity,decreaseQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
