import { useCart } from "../context/CartContext";
import Image from "next/image";

const CartDrawer = () => {
  const { cartItems, removeFromCart,increaseQuantity,decreaseQuantity } = useCart();

  return (
    <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg p-4 z-50 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center space-x-4 mb-4">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p>
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
                <p className="text-sm text-gray-500">Color: {item.selectedColor}</p>
                <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
              </div>
              <div className="flex items-center space-x-2">
              <button
    onClick={() => decreaseQuantity(item._id)}
    className="p-1 border rounded hover:bg-gray-200"
  >
    -
  </button>
  <span>{item.quantity}</span>
  <button
    onClick={() => increaseQuantity(item._id)}
    className="p-1 border rounded hover:bg-gray-200"
  >
    +
  </button>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="font-bold text-right text-xl">
            Total: $
            {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default CartDrawer;
