import { NavLink } from "react-router-dom";
import menu from "../assets/menu.png";
import logo from "../assets/logo.png";
import whatsApp from "../assets/whatsapp.png";

import { useState } from "react";
import SlideMenu from "./SlideMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border-b flex items-center">
      <div className="container flex justify-between items-center h-20 max-md:px-4">
        <img src={logo} className="w-16" alt="" />
        <SlideMenu setOpen={setOpen} open={open} />
        <div className="flex gap-7 max-md:hidden">
          <NavLink
            className=" text-base font-[tbold] hover:text-[#E6A131] transition-all cursor-pointer "
            to={"/"}
          >
            الرئيسية
          </NavLink>
          <NavLink
            className=" text-base font-[tbold] hover:text-[#E6A131] transition-all cursor-pointer "
            to={"/services"}
          >
            خدماتنا
          </NavLink>
          <NavLink
            className=" text-base font-[tbold] hover:text-[#E6A131] transition-all cursor-pointer "
            to={"/buffet"}
          >
            البوفيه والإعاشة
          </NavLink>
          <NavLink
            className=" text-base font-[tbold] hover:text-[#E6A131] transition-all cursor-pointer "
            to={"/events"}
          >
            تنظيم الفاعليات والمناسبات
          </NavLink>
        </div>
        <div>
          <a
            href="https://wa.me/0545719374"
            className="max-md:hidden"
            target="_blank"
          >
            <img src={whatsApp} className="w-8 cursor-pointer" alt="" />
          </a>
        </div>
        <img
          className="w-8 hidden max-md:block cursor-pointer "
          onClick={() => setOpen(true)}
          src={menu}
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
