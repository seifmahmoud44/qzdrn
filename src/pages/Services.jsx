import sec1 from "../assets/sec2.jpeg";
import sec2 from "../assets/s2.jpeg";
import sec3 from "../assets/s6.jpeg";
const Services = () => {
  return (
    <div>
      <section className="my-10">
        <h1 className="text-4xl w-fit m-auto font-[tbold] text-[#534431] mb-5 max-md:text-2xl">
          قسم الاعاشة و البوفيهات
        </h1>
        <div className="container flex justify-between items-center max-md:gap-5 max-md:flex-col ">
          <div className="w-1/2 max-md:w-full  px-5 overflow-hidden">
            <img
              src={sec1}
              className="rounded-3xl w-full object-cover"
              alt=""
            />
          </div>
          <div className="w-1/2  max-md:w-full">
            <p className=" text-base text-black px-5 font-[tmedium]">
              من خدماتنا هي جعل مناسبتك لاتنسى بألذ و اجود انواع الطعام و المُعد
              من امهر الشيفات في مطبخنا المركزي
            </p>
            <a
              href="https://wa.me/0545719374"
              className="block my-5 px-7 py-2 font-[tmedium] max-md:mx-auto text-sm rounded-full text-white bg-[#E6A131] w-fit mx-5"
              target="_blank"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </section>
      <section className="my-20">
        <h1 className="text-4xl w-fit m-auto font-[tbold] text-[#534431] mb-5 max-md:text-2xl">
          قسم تجهيز الفعاليات و المناسبات
        </h1>
        <div className=" container flex justify-between items-center max-md:gap-5 max-md:flex-col ">
          <div className="w-1/2 max-md:w-full max-md:-order-1 order-2  px-5 overflow-hidden">
            <img
              src={sec2}
              className="rounded-3xl w-full object-cover"
              alt=""
            />
          </div>
          <div className=" w-1/2  max-md:w-full">
            <p className=" text-base text-black px-5 font-[tmedium]">
              من خدماتنا تجهيز و تنظيم و اداره مكان الفعاليه بأفكار جديده و
              مبتكره بكل احترافيه
            </p>
            <a
              href="https://wa.me/0545719374"
              className="block my-5 px-7 py-2 font-[tmedium] max-md:mx-auto text-sm rounded-full text-white bg-[#E6A131] w-fit mx-5"
              target="_blank"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </section>
      <section className="my-20">
        <h1 className="text-4xl w-fit m-auto font-[tbold] text-[#534431] mb-5 max-md:text-2xl">
          قسم التوريد و التموين
        </h1>
        <div className=" container flex justify-between items-center max-md:gap-5 max-md:flex-col ">
          <div className="w-1/2 max-md:w-full   px-5 overflow-hidden">
            <img
              src={sec3}
              className="rounded-3xl w-full object-cover"
              alt=""
            />
          </div>
          <div className=" w-1/2  max-md:w-full">
            <p className=" text-base text-black px-5 font-[tmedium]">
              قسم خاص لتوريد و صناعة ما يحتاجه موظفينك او منشأتك او مكان
              الفعاليه
            </p>
            <a
              href="https://wa.me/0545719374"
              className="block my-5 px-7 py-2 font-[tmedium] max-md:mx-auto text-sm rounded-full text-white bg-[#E6A131] w-fit mx-5"
              target="_blank"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
