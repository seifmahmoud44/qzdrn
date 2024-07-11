const CardBuffet = ({ img, title, dis, w }) => {
  return (
    <div
      className={`${
        w || "w-1/3"
      } max-md:w-full rounded-3xl overflow-hidden shadow-2xl `}
    >
      <div className="h-60 overflow-hidden w-full">
        <img src={img} alt="" className=" object-cover  w-full" />
      </div>
      <div className="p-5 space-y-3">
        <h2 className="text-2xl font-[tmedium] text-center text-[#534431]">
          {title}
        </h2>
        {/* <p className="font-[regular] text-center">{dis}</p> */}
      </div>
      <a
        href="https://wa.me/0545719374"
        className="text-center block m-auto mb-5  px-7 py-2 font-[tmedium]  text-sm rounded-full text-white bg-[#E6A131] w-fit"
        target="_blank"
      >
        تواصل معنا
      </a>
    </div>
  );
};

export default CardBuffet;
