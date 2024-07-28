import React from 'react';
import { useState, useEffect } from 'react';
import image from './assets/image.png';

function Base({handlePurchase}) {
  const [activeCategorie, setActiveCategorie] = useState('Headphone');
  const categories = ['Headphone', 'Headband', 'Earpads', 'Speakers', 'Composer'];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        const productsWithQuantity = json.map((product) => ({
          ...product,
          quantity: 1,
        }));
        setProducts(productsWithQuantity);
      });
  }, []);



  return (
    <>
      <div className="h-full w-full px-8 flex flex-col">
        {/* Greeting and Search Section */}
        <div className="h-32 flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-200 text-2xl">Hi, Mohamed!</h1>
            <h1 className="text-white font-semibold text-3xl">
              What are you looking for today?
            </h1>
          </div>
          <input
            type="text"
            placeholder="Search Headphone"
            className="bg-inherit border-2 h-14 px-4 w-[25%] focus:border-[#37f5ac] hover:opacity-100 focus:opacity-100 duration-150 transform focus:scale-105 outline-none rounded-xl"
          />
        </div>
        {/* Categories And Footer */}
        <div className="h-full overflow-y-hidden rounded-xl flex flex-col gap-y-8 pt-6">
          {/* Categories */}
          <div className="flex justify-center px-80 items-center h-16">
            {categories.map((categorie) => (
              <h1
                key={categorie}
                className={`font-semibold text-md ${
                  categorie === activeCategorie
                    ? 'bg-[#37f5ac] shadow-md'
                    : 'bg-inherit hover:shadow-md text-white hover:bg-[#37f5ac] hover:text-black'
                } h-8 items-center flex justify-center w-[13%] rounded-xl cursor-pointer transform duration-150 hover:scale-105`}
                onClick={() => setActiveCategorie(categorie)}
              >
                {categorie}
              </h1>
            ))}
          </div>
          {/* Footer */}
          <div className="h-[40%] flex justify-center items-center ">
            <div className="bg-white rounded-2xl bg-opacity-80 duration-500 hover:bg-opacity-90 h-fit w-[50%] px-20 py-6 flex justify-between">
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl font-semibold cursor-default">TMA-2</h1>
                <h1 className="text-5xl font-semibold cursor-default">
                  Modular
                </h1>
                <h1 className="text-5xl font-semibold cursor-default">
                  Headphone
                </h1>
                <h1 className="text-[#29b37e] hover:font-bold flex gap-2 items-center text-4xl font-semibold cursor-pointer transform hover:scale-105 duration-200">
                  Shop Now <h1 className="text-6xl">→</h1>
                </h1>
              </div>
              <img src={image} className="h-64 w-72" />
            </div>
          </div>
          <div className="w-full pl-6 hover:transition hover:ease-in-out pt-6 grid grid-cols-4 gap-16">
            {products.map((product) => (
              <div
                key={product.id}
                className="h-[28rem] flex flex-col rounded-2xl w-96 bg-gray-950 border-2 border-gray-500 hover:border-gray-200 shadow-xl transform hover:scale-105 duration-150"
              >
                <div className="flex bg-white bg-opacity-80 rounded-2xl hover:bg-opacity-90 duration-500 justify-center items-center">
                  <img src={image} className="h-64 w-64" />
                </div>
                <div className="flex justify-between px-6 py-4">
                  <div className="flex flex-col pt-2 hover:cursor-pointer">
                    <h1 className="text-gray-300 text-2xl cursor-text w-fit h-12">
                      TMA-2 HD Wireless
                    </h1>
                    <h1 className="text-gray-300 text-2xl pt-16 cursor-text w-fit h-fit">
                      {product.price} EGP
                    </h1>
                  </div>
                  <div className="flex justify-center items-center h-fit mt-24">
                    <input
                      type="number"
                      placeholder="1"
                      min={1}
                      onChange={(e) =>
                        (product.quantity = parseInt(e.target.value) || 1)
                      }
                      className="w-12 h-20 bg-inherit text-center text-white text-xl font-semibold outline-none "
                    />
                    <button
                      className="text-white bg-green-500 bg-opacity-60 transform hover:scale-110 duration-150 hover:bg-opacity-95 w-20 h-12 rounded-xl"
                      onClick={() => handlePurchase(product)}
                    >
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Base;
 