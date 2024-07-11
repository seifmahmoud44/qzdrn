import res from "../assets/res.jpg";
import home from "../assets/home.jpeg";
import sec1 from "../assets/sec1.jpeg";
import sec2 from "../assets/prepare.jpeg";
import sec3 from "../assets/s6.jpeg";
import SecCard from "../components/SecCard";
import ClientsSwiper from "../components/ClientsSwiper";
import ProjectsSwiper from "../components/ProjectsSwiper";
const Home = () => {
  return (
    <div>
      <div className="home-vid flex justify-center items-center max-md:flex-col">
        <div className="w-1/2 max-md:w-full   relative  my-10 px-5">
          <img src={home} className="w-full rounded-3xl" alt="" />
        </div>
        <div className="w-1/2 max-md:w-full">
          <h1 className=" text-[#534431] font-[tbold] text-3xl text-nowrap max-md:text-3xl max-md:text-wrap text-center w-full px-5">
            اجتمع و تألق مع خدماتنا في كل مكان
          </h1>
          <h1 className=" text-[#E6A131] font-[tbold] text-xl mt-3  max-md:text-xl max-md:text-wrap text-center w-full px-5">
            انطلقت شركة قاذرن من الرياض لنعانق السماء ونعيد صياغة مجال تنظيم
            الفعاليات ومجال اعاشة الطعام والبوفيهات محليا و اقليميا بالجوده و
            الابتكار.
          </h1>
        </div>

        {/* <video
          className="brightness-50"
          src={video}
          autoPlay
          muted
          loop
        ></video> */}
      </div>
      <section className="my-24">
        <div className="container flex justify-center items-center max-md:flex-col gap-6">
          <div className="w-full flex flex-col gap-20  max-md:gap-8 max-md:px-5">
            <h1 className=" max-md:text-center text-6xl m-auto font-[tbold] text-[#534431]">
              من نحن
            </h1>
            <p className="text-base text-center font-[regular] text-[#232323] ">
              انطلقت شركة قاذرن من الرياض لنعانق السماء و نعيد صياغة مجال تنظيم
              الفعاليات ومجال اعاشة الطعام محليا و اقليميا
            </p>
            <a
              href="https://wa.me/0545719374"
              className="block m-auto px-7 py-2 font-[tmedium] max-md:m-auto text-sm rounded-full text-white bg-[#E6A131] w-fit"
              target="_blank"
            >
              تواصل معنا
            </a>
          </div>
          {/* <div className="w-1/2 max-md:w-full max-md:px-5">
            <div className="rounded-3xl overflow-hidden">
              <img src={res} alt="" />
            </div>
          </div> */}
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-5xl w-fit m-auto font-[tbold] text-[#534431] mb-10 ">
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
          <h1 className="text-5xl w-fit m-auto font-[tbold] text-[#534431] mb-10 ">
            نفتخر بعملائنا
          </h1>
          <ClientsSwiper />
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-5xl w-fit m-auto font-[tbold] text-[#534431] mb-10 ">
            من اعمالنا
          </h1>
          <ProjectsSwiper />
        </div>
      </section>
    </div>
  );
};

export default Home;
