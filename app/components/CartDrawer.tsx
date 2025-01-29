import { useCart } from "../context/CartContext";
import Image from "next/image";

const CartDrawer = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg p-4 z-50 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 mb-4">
              <Image
                src={item.image}
                alt={item.heading}
                width={80}
                height={80}
                className="object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.heading}</h3>
                <p>
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
                <p className="text-sm text-gray-500">Color: {item.selectedColor}</p>
                <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 border rounded hover:bg-gray-200"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 border rounded hover:bg-gray-200"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="font-bold text-right text-xl">
            Total: $
            {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default CartDrawer;
