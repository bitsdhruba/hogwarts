import React from "react";

const Options = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="p-2 flex">
        {["movies", "books", "spells"].map((item, i) => {
          return (
            <div
              key={i}
              className="w-[5rem] h-[3rem] p-2 mx-4 border border-[#9d0208] text-white cursor-pointer flex items-center justify-center capitalize"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
