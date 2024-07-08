/* eslint-disable react/prop-types */

const RandomText = ({ data }) => {
  return (
    <div className="flex justify-between items-center max-md:flex-col">
      {data.map((word, index) => {
        return (
          <div
            className={`${data.length === 3 ? "w-1/3" : "w-1/2"} my-5`}
            key={index}
          >
            <p className="text-center text-[#ef7900] text-2xl font-[tbold]">
              {word}
            </p>
          </div>
        );
      })}

      {/* <p className="text-center text-[#ef7900] text-2xl font-[tbold]">تصوير</p>
      <p className="text-center text-[#ef7900] text-2xl font-[tbold]">
        فعاليات غنائيه
      </p> */}
    </div>
  );
};

export default RandomText;
