import ContactSwiper from "../components/ContactSwiper";

const ContactUs = () => {
  return (
    <div className="my-5">
      <h1 className="text-4xl w-fit m-auto font-[tbold] text-black mb-5 max-md:text-2xl max-md:text-center">
        قسم التوريد و التموين{" "}
      </h1>
      <h4
        className={`font-[tmedium]
          text-xl
         text-[#E6A131] text-center text-nowrap `}
      >
        نقوم بتوريد احتياجات منشأتك بعقود طويله او قصيره
      </h4>{" "}
      <h4
        className={`font-[tmedium]
          text-xl
         text-[#E6A131] text-center text-nowrap `}
      >
        نقوم بتموين اعاشه طعام للموظفين
      </h4>
      <ContactSwiper />
    </div>
  );
};

export default ContactUs;
