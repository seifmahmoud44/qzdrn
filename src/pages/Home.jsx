import res from "../assets/res.jpg";
import video from "../assets/video.mp4";
import sec1 from "../assets/sec1.jpeg";
import sec2 from "../assets/sec2.jpeg";
import sec3 from "../assets/sec3.jpeg";
import SecCard from "../components/SecCard";
import ClientsSwiper from "../components/ClientsSwiper";
const Home = () => {
  return (
    <div>
      <div className="home-vid relative">
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white font-[tbold] text-5xl text-nowrap max-md:text-3xl max-md:text-wrap text-center w-full px-5">
          اجتمع و تألق مع خدماتنا في كل مكان
        </h1>
        <video
          className="brightness-50"
          src={video}
          autoPlay
          muted
          loop
        ></video>
      </div>
      <section className="my-24">
        <div className="container flex justify-center items-center max-md:flex-col max-md:gap-6">
          <div className="w-1/2 flex flex-col gap-20 max-md:w-full max-md:gap-8 max-md:px-5">
            <h1 className="max-md:text-center text-6xl font-[tbold] text-[#E6A131]">
              من نحن
            </h1>
            <p className="text-base font-[regular] text-[#232323]">
              انطلقت شركة قاذرن من الرياض لنعانق السماء و نعيد صياغة مجال تنظيم
              الفعاليات ومجال اعاشة الطعام محليا و اقليميا
            </p>
            <a
              href="https://wa.me/0545719374"
              className="px-7 py-2 font-[tmedium] max-md:m-auto text-sm rounded-full text-white bg-[#E6A131] w-fit"
              target="_blank"
            >
              تواصل معنا
            </a>
          </div>
          <div className="w-1/2 max-md:w-full max-md:px-5">
            <img src={res} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-5xl w-fit m-auto font-[tbold] text-[#E6A131] mb-10 ">
            ما الذي نقدمه
          </h1>
          <div className="flex justify-between items-center max-md:flex-col max-md:gap-10 ">
            <SecCard
              img={sec1}
              title={"قسم الإعاشة والبوفيه"}
              goTo={"/buffet"}
            />
            <SecCard
              img={sec2}
              title={"قسم تجهيز وتنظيم الفعاليات"}
              goTo={"/events"}
            />
            <SecCard
              img={sec3}
              title={"قسم التموين و التوريد"}
              goTo={"/supply"}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-5xl w-fit m-auto font-[tbold] text-[#E6A131] mb-10 ">
            تفتخر بعملائنا
          </h1>
          <ClientsSwiper />
        </div>
      </section>
    </div>
  );
};

export default Home;
