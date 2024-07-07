import logo from "../assets/logo.png";
import call from "../assets/call.png";
// import map from "../assets/location.png";
import mail from "../assets/mail.png";
import whatsApp from "../assets/whatsappw.png";

const Footer = () => {
  return (
    <div className="bg-[#111111] ">
      <div className="">
        <div className="container flex  items-center max-md:flex-col gap-14 py-4">
          <div className="w-1/3 max-md:w-full space-y-4 max-md:px-4">
            <img src={logo} className="w-24" alt="" />
            <p className="text-white text-lg font-[regular] ">
              انطلقت شركة قاذرن من الرياض لنعانق السماء و نعيد صياغة مجال تنظيم
              الفعاليات ومجال اعاشة الطعام محليا و اقليميا
            </p>
          </div>
          <div className="flex flex-col gap-6 max-md:w-full max-md:px-4">
            <p className="text-lg font-[tbold] text-white">تواصل معنا</p>
            <a href="tel:0545719374" className="flex items-center gap-6">
              <img src={call} alt="" className="w-6" />
              <p className="text-white text-lg font-[regular]">0545719374</p>
            </a>
            <a
              href="https://wa.me/0545719374"
              target="_blank"
              className="flex items-center gap-6"
            >
              <img src={whatsApp} alt="" className="w-6" />
              <p className="text-white text-lg font-[regular]">0545719374</p>
            </a>
            <a
              href="mailto:contact@gathering.spot1"
              className="flex items-center gap-6"
            >
              <img src={mail} alt="" className="w-6" />
              <p className="text-white text-lg font-[regular]">
                contact@gathering.spot1
              </p>
            </a>
            {/* <div className="flex items-center gap-6">
              <img src={call} alt="" className="w-6" />
              <p className="text-white text-lg font-[regular]">0545719374</p>
            </div> */}
          </div>
        </div>
        <div className="bg-[#050505] py-3">
          <p className="text-white font-[tbold] text-center">
            جميع الحقوق محفوظة لـــ شركة قاذرن 2024{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
