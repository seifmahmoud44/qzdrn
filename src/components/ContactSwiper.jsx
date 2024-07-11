import { Swiper, SwiperSlide } from "swiper/react";
import pro1 from "../assets/s1.jpeg";
import pro2 from "../assets/s2.jpeg";
import pro3 from "../assets/s3.jpeg";
import pro4 from "../assets/s4.jpeg";
import pro5 from "../assets/s5.jpeg";
import pro6 from "../assets/s6.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

export default function ContactSwiper() {
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
        </Swiper>
      </div>
    </>
  );
}
