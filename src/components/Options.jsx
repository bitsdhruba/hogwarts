import React from "react";
import { NavLink } from "react-router-dom";

const Options = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* <div className="p-2 flex">
        {["movies", "books", "spells"].map((item, i) => {
          return (
            <NavLink to={`/${item}`}>
              <div
                key={i}
                className="w-[6rem] h-[3rem] p-2 mx-4 border border-[#9d0208] text-xl text-white cursor-pointer flex items-center justify-center capitalize"
              >
                {item}
              </div>
            </NavLink>
          );
        })}
      </div> */}
      <div className="p-2">
        <NavLink to="/movies">
          <div className="w-full h-[7rem] p-2 border-b border-[#9d0208] text-white cursor-pointer flex items-center">
            <h1 className="text-5xl text-start">Movies</h1>
          </div>
        </NavLink>
        <NavLink to="/books">
          <div className="w-full h-[7rem] p-2 border-b border-[#9d0208] text-white cursor-pointer flex items-center justify-center">
            <h1 className="text-5xl text-center">Books</h1>
          </div>
        </NavLink>
        <NavLink to="/spells">
          <div className="w-full h-[7rem] p-2 border-b border-[#9d0208] text-white cursor-pointer flex items-center justify-end">
            <h1 className="text-5xl text-end">Spells</h1>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Options;
