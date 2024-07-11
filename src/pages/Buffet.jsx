import CardBuffet from "../components/CardBuffet";

import card2 from "../assets/home.jpeg";
import card3 from "../assets/card3.jpeg";
import silver from "../assets/silver.jpeg";
import gold from "../assets/gold.jpeg";
import vip from "../assets/vip.jpeg";
import west from "../assets/west.jpeg";
import east from "../assets/east.jpeg";
import pro2 from "../assets/pro2.jpeg";

const Buffet = () => {
  return (
    <div>
      <section className="my-10">
        <h1 className="text-4xl w-fit m-auto font-[tbold] text-[#534431] mb-5 max-md:text-2xl">
          بوفيهات الغداء والعشاء
        </h1>
        <div className="container flex justify-between items-center max-md:gap-5 gap-10 max-md:flex-col max-md:px-5">
          <CardBuffet
            img={silver}
            title={"قائمة فضيه"}
            dis={
              "إذا كان عندك مناسبة وتبحث عن بوفية مفتوح خارجية في الرياض لــ 40 شخص، فهذه هي الباقة المناسبة لك، وتحتوي على مجموعة متنوعة من الأطباق الشهية والتي تلبي رغبات جميع ضيوفك، وهي تُعتبر أرخص باقة بوفية مفتوح بالرياض"
            }
          />
          <CardBuffet
            img={gold}
            title={"قائمة ذهبيه "}
            dis={
              "إذا كان عندك مناسبة وتبحث عن بوفية مفتوح خارجية في الرياض لــ 40 شخص، فهذه هي الباقة المناسبة لك، وتحتوي على مجموعة متنوعة من الأطباق الشهية والتي تلبي رغبات جميع ضيوفك، وهي تُعتبر أرخص باقة بوفية مفتوح بالرياض"
            }
          />
          <CardBuffet
            img={vip}
            title={"قائمة vip"}
            dis={
              "إذا كان عندك مناسبة وتبحث عن بوفية مفتوح خارجية في الرياض لــ 40 شخص، فهذه هي الباقة المناسبة لك، وتحتوي على مجموعة متنوعة من الأطباق الشهية والتي تلبي رغبات جميع ضيوفك، وهي تُعتبر أرخص باقة بوفية مفتوح بالرياض"
            }
          />
        </div>
      </section>
      <section className="my-10">
        <h1 className="text-4xl w-fit m-auto font-[tbold] text-[#534431] mb-5 max-md:text-2xl">
          بوفيهات كوفي بريك و سناكس
        </h1>
        <div className="container flex justify-between items-center max-md:gap-5 gap-10 max-md:flex-col max-md:px-5">
          <CardBuffet
            w={"w-1/4"}
            img={silver}
            title={"قائمة فضيه"}
            dis={
              "إذا كان عندك مناسبة وتبحث عن بوفية مفتوح خارجية في الرياض لــ 40 شخص، فهذه هي الباقة المناسبة لك، وتحتوي على مجموعة متنوعة من الأطباق الشهية والتي تلبي رغبات جميع ضيوفك، وهي تُعتبر أرخص باقة بوفية مفتوح بالرياض"
            }
          />
          <CardBuffet
            w={"w-1/4"}
            img={card2}
            title={"قائمة فنجر فود"}
            dis={
              "إذا كان عندك مناسبة وتبحث عن بوفية مفتوح خارجية في الرياض لــ 40 شخص، فهذه هي الباقة المناسبة لك، وتحتوي على مجموعة متنوعة من الأطباق الشهية والتي تلبي رغبات جميع ضيوفك، وهي تُعتبر أرخص باقة بوفية مفتوح بالرياض"
            }
          />
          <CardBuffet
            w={"w-1/4"}
            img={vip}
            title={"قائمة vip"}
            dis={
              "إذا كان عندك مناسبة وتبحث عن بوفية مفتوح خارجية في الرياض لــ 40 شخص، فهذه هي الباقة المناسبة لك، وتحتوي على مجموعة متنوعة من الأطباق الشهية والتي تلبي رغبات جميع ضيوفك، وهي تُعتبر أرخص باقة بوفية مفتوح بالرياض"
            }
          />
          <CardBuffet
            w={"w-1/4"}
            img={pro2}
            title={"قائمة الاجتماعات"}
            dis={
              "إذا كان عندك مناسبة وتبحث عن بوفية مفتوح خارجية في الرياض لــ 40 شخص، فهذه هي الباقة المناسبة لك، وتحتوي على مجموعة متنوعة من الأطباق الشهية والتي تلبي رغبات جميع ضيوفك، وهي تُعتبر أرخص باقة بوفية مفتوح بالرياض"
            }
          />
        </div>
      </section>
      <section className="my-10">
        <h1 className="text-4xl w-fit m-auto font-[tbold] text-[#534431] mb-5 max-md:text-2xl">
          بوفيهات الإفطار
        </h1>
        <div className="container flex justify-center items-center max-md:gap-5 gap-10 max-md:flex-col max-md:px-5">
          <CardBuffet
            w={"w-80"}
            img={east}
            title={"افطار شرقي"}
            dis={
              "إذا كان عندك مناسبة وتبحث عن بوفية مفتوح خارجية في الرياض لــ 40 شخص، فهذه هي الباقة المناسبة لك، وتحتوي على مجموعة متنوعة من الأطباق الشهية والتي تلبي رغبات جميع ضيوفك، وهي تُعتبر أرخص باقة بوفية مفتوح بالرياض"
            }
          />
          <CardBuffet
            w={"w-80"}
            img={west}
            title={"افطار غربي"}
            dis={
              "إذا كان عندك مناسبة وتبحث عن بوفية مفتوح خارجية في الرياض لــ 40 شخص، فهذه هي الباقة المناسبة لك، وتحتوي على مجموعة متنوعة من الأطباق الشهية والتي تلبي رغبات جميع ضيوفك، وهي تُعتبر أرخص باقة بوفية مفتوح بالرياض"
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Buffet;
