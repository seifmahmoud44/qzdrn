import { NavLink } from "react-router-dom";
import close from "../assets/close.png";
import logo from "../assets/logo.png";
import whatsApp from "../assets/whatsappw.png";
const SlideMenu = ({ setOpen, open }) => {
  return (
    <div
      className={`fixed top-0 ${
        open ? "left-0 opacity-1" : "-left-full opacity-0"
      } w-screen h-screen bg-black transition-all duration-700 p-8 z-20`}
    >
      <img
        onClick={() => setOpen(false)}
        src={close}
        className="w-8 cursor-pointer mr-auto my-3 block"
        alt=""
      />
      <img src={logo} className="w-20" alt="" />
      <div className="my-10 divide-y divide-[#262626]">
        <NavLink
          onClick={() => setOpen(false)}
          className=" text-white slide-link block py-3  text-xl font-[tmedium] hover:text-[#808080] transition-all cursor-pointer "
          to={"/"}
        >
          الرئيسية
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          className=" text-white slide-link block py-3  text-xl font-[tmedium] hover:text-[#808080] transition-all cursor-pointer "
          to={"/services"}
        >
          خدماتنا
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          className=" text-white slide-link block py-3  text-xl font-[tmedium] hover:text-[#808080] transition-all cursor-pointer "
          to={"/buffet"}
        >
          البوفيه والإعاشة
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          className=" text-white slide-link block py-3  text-xl font-[tmedium] hover:text-[#808080] transition-all cursor-pointer "
          to={"/events"}
        >
          تنظيم الفاعليات والمناسبات
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          className=" text-white slide-link block py-3  text-xl font-[tmedium] hover:text-[#808080] transition-all cursor-pointer "
          to={"/contactus"}
        >
          تواصل معنا{" "}
        </NavLink>
      </div>
      <div className="h-auto w-fit m-auto">
        <a href="https://wa.me/0545719374" className="" target="_blank">
          <img src={whatsApp} className="w-8 cursor-pointer" alt="" />
        </a>
      </div>
    </div>
  );
};

export default SlideMenu;
