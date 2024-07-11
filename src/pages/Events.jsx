import GallarySwiper from "../components/GallarySwiper";
import RandomSwiper from "../components/RandomSwiper";
import RandomText from "../components/RandomText";

const Events = () => {
  return (
    <div className="mt-5">
      <h1 className="text-4xl w-fit m-auto font-[tbold] text-black mb-5 max-md:text-2xl max-md:text-center">
        نحن نعيد صياغة الفعاليات و المؤتمرات و المناسبات بأفكارنا الجديده
      </h1>
      <div className="my-10">
        <h4
          className={`font-[tmedium]
          text-xl
         text-[#E6A131] text-center text-nowrap `}
        >
          من التجهيز و التنفيذ حتى التسليم
        </h4>
        <p className="font-[regular] text-center">
          (تنظيم المؤتمرات، تنظيم الحفلات زواج ميلاد خطبه استقبال، تنظيم فعاليات
          اجتماعيه، تنظيم معارض ومهرجانات)
        </p>
      </div>
      <div className="container">
        <RandomSwiper
          data={[
            "خيم اوروبيه و شعبيه",
            "تصوير",
            "فعاليات غنائيه",
            "طباعه لوح و جداريات",
            "بوثات",
            "صوتيات",
            "شاشات",
            "سيارات فارهه",
            "جلسات شعبيه",
            "عربات طعام و قهوه و ايسكريم",
            "تحضيرات",
            "تزيين مكان الفعاليه",
            "توزيعات",
          ]}
        />
      </div>
      <GallarySwiper />
    </div>
  );
};

export default Events;
