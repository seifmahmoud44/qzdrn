import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SecCard = ({ img, title, goTo }) => {
  const navigate = useNavigate();
  return (
    <div className="w-56 space-y-5 max-md:w-full max-md:px-5">
      <img className="w-full" src={img} alt="" />
      <h4
        className={`font-[tmedium] ${
          title.length > 20 ? "text-lg" : "text-xl"
        }  text-[#E6A131] text-center text-nowrap `}
      >
        {title}
      </h4>
      <button
        onClick={() => navigate(goTo)}
        className="px-7 py-2 font-[tmedium] text-sm rounded-full text-white bg-[#E6A131] w-fit block m-auto"
      >
        اقرأ المزيد
      </button>
    </div>
  );
};

export default SecCard;
