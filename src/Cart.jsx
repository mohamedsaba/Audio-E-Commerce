import React, { useEffect, useRef } from 'react';
import image from './assets/image.png';

function Cart({ cart }) {
  const quantityRef = useRef(null);

  useEffect(() => {
    if (quantityRef.current) {
      quantityRef.current.focus();
    }
  }, [quantityRef]);

  console.log(cart);

  return (
    <div className="flex flex-col h-full w-screen gap-y-6 py-8">
      <div className="flex justify-center items-center w-full h-fit">
        <div className="divide-x w-[40%] h-[0.1rem] bg-green-400"></div>
        <h1 className="text-white w-fit text-3xl font-semibold p-4">Shopping Cart</h1>
        <div className="divide-x w-[40%] h-[0.1rem] bg-green-400"></div>
      </div>
      <div className="flex justify-between gap-7 px-20 w-full h-full">
        <div className="h-full flex flex-col gap-y-4 w-[50%]">
          <div className="h-16 flex justify-between items-center px-7 border-b-2">
            <h1 className="text-green-400 text-xl font-semibold">Product</h1>
            <h1 className="text-green-400 text-xl font-semibold">Title</h1>
            <h1 className="text-green-400 text-xl font-semibold">Model</h1>
            <h1 className="text-green-400 text-xl font-semibold">Quantity</h1>
            <h1 className="text-green-400 text-xl font-semibold">Remove</h1>
          </div>
          {cart.map((item, index) => (
            <div key={index} className="h-28 grow py-2 flex justify-between rounded-xl items-center px-4">
              <img src={image} className="h-24 rounded-3xl w-24 bg-white bg-opacity-70" />
              <h1 className="text-white text-xl font-semibold w-12">TMA-2 headphone</h1>
              <h1 className="text-white text-xl font-semibold">HeadPhone</h1>
              <input
                type="number"
                defaultValue={item.quantity}
                min={1}
                ref={index === 0 ? quantityRef : null} // Only set ref on the first item
                className="w-12 h-20 bg-inherit text-center text-white text-xl font-semibold outline-none"
              />
              <button className="bg-red-600 bg-opacity-70 text-white font-semibold text-xl duration-150 transition hover:scale-105 w-28 h-10 rounded-2xl hover:bg-opacity-100">
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="border-2 h-full w-[50%]"></div>
      </div>
    </div>
  );
}

export default Cart;
