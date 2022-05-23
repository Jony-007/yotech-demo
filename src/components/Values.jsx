import React, { useState } from "react";
import { Link } from "react-router-dom";

const Values = ({ type }) => {
  const [path, setPath] = useState([
    "honesty",
    "creative",
    "investlearning",
    "learn",
  ]);

  const [values, setValues] = useState([
    {
      title: "Be Honest",
      description:
        "Honesty and integrity are important at yotech. We're building more than a company. We are building a family where trust informs everything we do",
    },

    {
      title: "Be Creative",
      description: (
        <p>
          Imagination is more important than knowledge. Knowledge is limited.
          Imagination encircles the world.
          <span className="font-semibold block"> "Albert Einstein"</span>
        </p>
      ),
    },

    {
      title: "Invest In learning",
      description: `When people leave us, we want them to a be better designer, engineer or marketeer than when they arrived. The best investments we have ever made were in our people.`,
    },

    {
      title: "Learn From Mistakes",
      description: `Mistakes are how we learn. If we are going to change the lives of our customers with smart e-commerce tech, mistakes will be a permanent feature at yotech.`,
    },
  ]);

  return (
    <div
      className={
        type === "mission"
          ? "valuesContainer w-full bg-[#F7F7F7] pt-56 pb-10 flex flex-col justify-center items-center "
          : "valuesContainer w-full bg-[#F7F7F7] pt-10 pb-10 flex flex-col justify-center items-center "
      }
    >
      <div className="valuesHeader flex flex-col justify-center items-center ">
        <h1 className={type === "mission" ? "text-3xl mb-1" : "text-3xl mb-3"}>
          Our Values
        </h1>
        {type === "mission" && (
          <hr className="w-[50%] h-[4px] bg-[#7e3c87] mb-2" />
        )}
        <p className="text-xl font-light text-[#676767]">
          "The rules we live by"
        </p>
      </div>

      <div className="valuesBody w-full max-w-[1320px] sm:grid grid-cols-2 gap-8 mt-10 px-7 xl:flex mb-2">
        {values.map((items, i) => {
          console.log(i);
          console.log(path[i]);
          return (
            <div key={i} className="bg-white p-8 mb-10">
              {items.title === "Be Honest" && (
                <Link
                  to={`/mission/${path[0]}`}
                  className="cursor-pointer bg-[#ecf7fe] flex justify-center items-center mb-4 py-4 px-6"
                >
                  <span className="text-[#0f9af0] font-medium">
                    {items.title}
                  </span>
                </Link>
              )}

              {items.title === "Be Creative" && (
                <Link
                  to={`/mission/${path[1]}`}
                  className="cursor-pointer bg-[#E8FFFC] flex justify-center items-center mb-4 py-4 px-6"
                >
                  <span className="text-[#04DFC6] font-medium">
                    {items.title}
                  </span>
                </Link>
              )}

              {items.title === "Invest In learning" && (
                <Link
                  to={`/mission/${path[2]}`}
                  className="cursor-pointer bg-[#F0EDF8] flex justify-center items-center mb-4 py-4 px-6"
                >
                  <span className="text-[#7B5CC3] font-medium">
                    {items.title}
                  </span>
                </Link>
              )}

              {items.title === "Learn From Mistakes" && (
                <Link
                  to={`/mission/${path[3]}`}
                  className="cursor-pointer bg-[#E4F8E4] flex justify-center items-center mb-4 py-4 px-6"
                >
                  <span className="text-[#2CB12C] font-medium">
                    {items.title}
                  </span>
                </Link>
              )}

              <div className="text-[#676767] text-center">
                {items.description}
              </div>
            </div>
          );
        })}
      </div>

      <Link to="/mission">
        <button className="readBtn bg-[#652783] py-[15px] px-[80px] text-white font-medium hover:transition-all  hover:bg-[#5a1c79] duration-500 ease-linear focus:bg-none">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default Values;
