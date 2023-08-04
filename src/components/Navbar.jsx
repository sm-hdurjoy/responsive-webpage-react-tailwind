import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const style = {
  mainContainer: `flex justify-between items-center px-4 max-w-[1240px] h-20 mx-auto text-white`,
  header: `w-full text-3xl font-bold text-[#00df9a]`,
};

const styleMobile = {
  headerMobile: `w-full text-3xl font-bold text-[#00df9a] m-4`,
  menuBar: `fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300]`,
  menuBottom: `p-4 border-b border-b-gray-700`,
};

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={style.mainContainer}>
      <h1 className={style.header}>React</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? `${styleMobile.menuBar} ease-in-out duration-500`
            : "fixed left-[-100%]"
        }
      >
        <h1 className={styleMobile.headerMobile}>React</h1>

        <ul className="uppercase p-4">
          <li className={styleMobile.menuBottom}>Home</li>
          <li className={styleMobile.menuBottom}>Company</li>
          <li className={styleMobile.menuBottom}>Resources</li>
          <li className={styleMobile.menuBottom}>About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
