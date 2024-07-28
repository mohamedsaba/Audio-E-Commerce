import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Base from './Base';
import Account from './Account';
import Contact from './Contact';
import Services from './Services';
import Cart from './Cart';


function Home({setSigned , setLoggedOut}) {
  const [cart , setCart] = useState([])
  const [path, setPath] = useState(() => localStorage.getItem('currentPath') || '/base');

  useEffect(() => {
    localStorage.setItem('currentPath', path);
  }, [path]);

  const handlePurchase = (product) => {
    setCart((cart) => {
      const isProductInCart = cart.find((cartItem) => cartItem.title === product.title);
  
      if (isProductInCart) {
        return cart.map((cartItem) => 
          cartItem.title === product.title 
            ? { ...cartItem, quantity: cartItem.quantity + product.quantity }
            : cartItem
        );
      } else {
        return [...cart, product];
      }
    });
  };
  

  const routes = [
    { id: 1, path: '/base', element: <Base handlePurchase={handlePurchase} setCart={setCart}/> },
    { id: 2, path: '/account', element: <Account /> },
    { id: 3, path: '/contact', element: <Contact /> },
    { id: 4, path: '/services', element: <Services /> },
    { id: 5, path: '/cart', element: <Cart cart={cart}/> }
  ];

  return (
    <div className='bg-black flex flex-col w-screen h-full'>
      {/* Navbar Section */}
      <Navbar setPath={setPath} setSigned={setSigned} setLoggedOut={setLoggedOut} />
      {/* Home Body */}
      {routes.map((route) => {
        if (route.path === path) {
          return <div key={route.id}>{route.element}</div>;
        }
        return null;
      })}
    </div>
  );
}

export default Home;
