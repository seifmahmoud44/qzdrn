import { Swiper, SwiperSlide } from "swiper/react";
import brand1 from "../assets/brand1.jpeg";
import brand2 from "../assets/brand2.jpeg";
import brand3 from "../assets/brand3.jpeg";
import brand4 from "../assets/brand4.jpeg";
import brand5 from "../assets/brand5.jpeg";
import brand6 from "../assets/brand6.jpeg";
import brand7 from "../assets/brand7.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

export default function ClientsSwiper() {
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src={brand1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={brand2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={brand3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={brand4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={brand5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={brand6} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={brand7} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
