import { Swiper, SwiperSlide } from "swiper/react";
import swip1 from "../assets/swip1.jpg";
import swip2 from "../assets/swip2.jpeg";
import pro1 from "../assets/pro1.jpeg";
import pro2 from "../assets/pro2.jpeg";
import pro3 from "../assets/pro3.jpeg";
import pro4 from "../assets/pro4.jpeg";
import pro5 from "../assets/pro5.jpeg";
import pro6 from "../assets/pro6.jpeg";
import pro7 from "../assets/pro7.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

export default function GallarySwiper() {
  return (
    <>
      <div className="container max-md:px-5">
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
          className="mySwiper my-10"
        >
          <SwiperSlide>
            <div className="h-60 rounded-3xl overflow-hidden">
              <img src={pro1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-60 rounded-3xl overflow-hidden">
              <img src={pro2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-60 rounded-3xl overflow-hidden">
              <img src={pro3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-60 rounded-3xl overflow-hidden">
              <img src={pro4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-60 rounded-3xl overflow-hidden">
              <img src={pro5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-60 rounded-3xl overflow-hidden">
              <img src={pro6} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-60 rounded-3xl overflow-hidden">
              <img src={pro7} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
