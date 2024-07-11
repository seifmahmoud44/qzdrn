import { Swiper, SwiperSlide } from "swiper/react";
import pro1 from "../assets/pro1.jpeg";
import pro2 from "../assets/pro2.jpeg";
import pro3 from "../assets/pro3.jpeg";
import pro4 from "../assets/pro4.jpeg";
import pro5 from "../assets/nora.jpeg";
import pro6 from "../assets/pro6.jpeg";
import pro7 from "../assets/pro7.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

export default function ProjectsSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper pro-swipe"
      >
        <SwiperSlide>
          <div className="h-80 rounded-3xl overflow-hidden max-md:mx-5 mb-3">
            <img src={pro1} alt="" />
          </div>
          <p className="text-lg text-[#534431] text-center px-2 font-[tmedium]">
            يوم البيئه في المركز الوطني للرقابه على الالتزام البيئي
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-80 rounded-3xl overflow-hidden max-md:mx-5 mb-3">
            <img src={pro2} alt="" />
          </div>
          <p className="text-lg text-[#534431] text-center px-2 font-[tmedium]">
            اذعه يو اف ام
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-80 rounded-3xl overflow-hidden max-md:mx-5 mb-3">
            <img src={pro3} alt="" />
          </div>
          <p className="text-lg text-[#534431] text-center px-2 font-[tmedium]">
            يوم التأسيس
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-80 rounded-3xl overflow-hidden max-md:mx-5 mb-3">
            <img src={pro4} alt="" />
          </div>
          <p className="text-lg text-[#534431] text-center px-2 font-[tmedium]">
            يوم العلم التابع لوزارة الاعلام
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-80 rounded-3xl overflow-hidden max-md:mx-5 mb-3">
            <img src={pro5} alt="" />
          </div>
          <p className="text-lg text-[#534431] text-center px-2 font-[tmedium]">
            جامعة الاميرة نورة{" "}
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
