import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-[17.5rem] h-[24rem] rounded-lg border border-[#9d0208] shadow-md overflow-hidden">
      <div className="relative bg-gradient-to-t from-[#10121d] from-20%">
        <img
          src={movie?.attributes.poster}
          alt={movie?.attributes.title}
          className="w-full inset-2 bg-cover bg-center"
        />
        <div className="h-[10rem] min-w-full absolute bottom-0 left-0 px-2 bg-gradient-to-t from-black from-30% flex items-end">
          <h1 className="text-2xl m-4">{movie?.attributes.title}</h1>
          <h1 className="text-2xl m-4">{movie?.attributes.title}</h1>
          <h1 className="text-2xl m-4">{movie?.attributes.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
