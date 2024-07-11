/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

export default function RandomSwiper({ data }) {
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
          {data.map((word, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className={`${
                    data.length === 3 ? "w-1/3" : "w-1/2"
                  } my-5 flex justify-center items-center h-32`}
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
      </div>
    </>
  );
}
