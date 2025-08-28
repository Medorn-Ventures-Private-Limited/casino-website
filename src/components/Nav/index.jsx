// import React from "react";

// const Nav = () => {
//   return (
//     <div className="bg-red-400">
//       <h1>Lottery Drops</h1>
//       <div>
//         <h1>Home</h1>
//         <h1>Responsible Gambling</h1>
//         <button>Contact</button>
//         <button>Login</button>
//         <button>Register</button>
//       </div>
//     </div>
//   );
// };

// export default Nav;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../Contact";
import Login from "../Login";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Register from "../Register";
// import { HiOutlineMenu, HiX } from "react-icons/hi"; // menu icons

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const closePopup = () => {
    setIsContactOpen(false);
  };
  const closeLoginPopup = () => {
    setIsLoginOpen(false);
  };
  const closeRegisterPopup = () => {
    setIsRegisterOpen(false);
  };

  return (
    <>
    
    <nav className="bg-[#0B4D91] p-4 lg:px-32 flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">Lottery Drops</h1>
      <div className="hidden md:flex gap-4 items-center">
        <Link to="/" className="text-white cursor-pointer">
          Home
        </Link>
        <Link to="/responsible-gambling" className="text-white cursor-pointer">
          Responsible Gambling
        </Link>
        <button 
          onClick={() => setIsContactOpen(!isContactOpen)}  
          className="bg-white text-blue-400 px-3 py-1 rounded"
        >
         Contact
        </button>
        <button onClick={() => setIsLoginOpen(true)} className="bg-white text-blue-400 px-3 py-1 rounded">
          Login
        </button>
        <button onClick={() => setIsRegisterOpen(true)} to="/register" className=" px-3 py-1 rounded bg-[#15D66E] hover:bg-[#FADA21]">
          Register
        </button>
      </div>


      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <RxCross2  size={25} className="text-white"/>

          ) : (
            <IoMdMenu size={25} className="text-white"/>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#0B4D91]  flex flex-col justify-center items-center gap-4 p-4 md:hidden">
          <Link onClick={() => setIsOpen(false)} to="/" className="text-white cursor-pointer">
            Home
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/responsible-gambling" className="text-white cursor-pointer">
            Responsible Gambling
          </Link>
          <button 
            onClick={() => setIsContactOpen(true)}  
            className="bg-white text-blue-400 px-3 py-1 rounded"
          >
            Contact
          </button>
          <button onClick={() => setIsLoginOpen(true)} className="bg-white text-blue-400 px-3 py-1 w-fit rounded">Login</button>
          <button onClick={() => setIsRegisterOpen(true)} className=" bg-[#15D66E] hover:bg-[#FADA21 px-3 py-1 w-fit rounded">Register</button>
        </div>
      )}
    </nav>
    {
      isContactOpen && (
        <Contact closePopup={closePopup}/>
      )
    }
    {
      isLoginOpen && (
        <Login  closePopup={closeLoginPopup}/>
      )
    }
     {
      isRegisterOpen && (
        <Register  closePopup={closeRegisterPopup}/>
      )
    }
    </>
  );
};

export default Nav;
