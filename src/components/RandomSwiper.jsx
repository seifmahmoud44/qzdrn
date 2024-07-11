/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import arrow from "../assets/next.png";
export default function RandomSwiper({ data }) {
  return (
    <>
      <div className="container max-md:px-5 flex justify-center items-center gap-5">
        <div className="nex  p-2 rounded-full bg-[#534431] cursor-pointer flex justify-center items-center">
          <img src={arrow} alt="" className="w-7" />
        </div>
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
          navigation={{
            prevEl: ".prev",
            nextEl: ".nex",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper my-10"
        >
          {data.map((word, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className={`my-5 flex justify-center items-center h-32 `}
                  key={index}
                >
                  <p className="text-center text-[#ef7900] text-2xl font-[tbold]">
                    {word}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>
            <div className="h-60 rounded-3xl overflow-hidden">
              
            </div>
          </SwiperSlide> */}
        </Swiper>
        <div className="prev  p-2 rounded-full bg-[#534431] cursor-pointer flex justify-center items-center ">
          <img src={arrow} alt="" className="w-7 rotate-180" />
        </div>
      </div>
    </>
  );
}
