import React from 'react'
import { useState } from 'react'
import MenuIcon from "./MenuIcon"
import HeadSet from './Headset';
import CartIcon from './CartICon'; 
import { useNavigate } from 'react-router-dom';
function Navbar({ setPath, setSigned ,setLoggedOut}) {

    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);

    const menuList = [
        { id: 1, text: "Account", path: '/account' },
        { id: 2, text: "Products", path: '/home' },
        { id: 3, text: "Services", path: '/services' },
        { id: 4, text: "Contact", path: '/contact' },
        { id: 5, text: "Log Out", path: "/signin" }
    ];

    const handleMenu = () => {
        setMenu(!menu);
    };

    const handleMenuItemClick = (item) => {
        if (item.text === "Log Out") {
            setSigned(false);
            navigate(item.path);
            setLoggedOut(true)
        } else {
            setPath(item.path);
        }
    };

    return (
        <>
            <div className={`h-[60%] mt-20 py-16 rounded-2xl rounded-tr-none duration-200 transition ease-linear bg-inherit w-[15%] absolute border-r-2 border-b-2 border-gray-200 border-opacity-40 ${menu ? null : '-translate-x-72'}`}>
                <ul className='gap-y-12 flex flex-col justify-center items-center'>
                    {menuList.map((item) => (
                        <li 
                            key={item.id} 
                            onClick={() => handleMenuItemClick(item)} 
                            className={`${item.text === "Log Out" ? 'text-red-500 hover:animate-pulse' : 'text-gray-200 hover:scale-110 hover:text-green-500'} cursor-pointer duration-200 font-semibold text-xl`}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex px-8 border-b-2 border-gray-200 border-opacity-40 h-20 items-center justify-between'>
                <h1 onClick={handleMenu}>
                    <MenuIcon className={`cursor-pointer opacity-70 transform duration-200 hover:opacity-90 hover:scale-105 ${menu ? 'animate-pulse translate-x-24' : null}`} />
                </h1>
                <span className='flex'>
                    <h1 className='text-4xl cursor-pointer text-[#37f5ac] font-semibold' onClick={() => setPath('/base')}>Audio</h1>
                    <h1><HeadSet className="w-12 h-8 absolute rotate-45 duration-200 transform animate-pulse" /></h1>
                </span>
                <h1>
                    <CartIcon className='cursor-pointer opacity-70 transform duration-200 hover:opacity-90 hover:scale-105 h-10 w-12' onClick={() => setPath('/cart')} />
                </h1>
            </div>
        </>
    );
}

export default Navbar;
