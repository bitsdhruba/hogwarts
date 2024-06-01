import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { url } from "../api/api";
import m_bg from "../assets/harry_movies_bg1.svg";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const location = useLocation();
  const path = location.pathname.split("/").at(-1);

  const [collection, setCollection] = useState();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url(path));
      setCollection(data.data);
    } catch (error) {
      console.log(error, "something went wrong !");
    }
  };

  useEffect(() => {
    fetchData();
  }, [path]);

  console.log(collection);

  return (
    <div>
      <div
        className="min-w-full h-[40vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${m_bg})` }}
      >
        <div className="absolute min-w-full bottom-0 left-0 h-[20vh] bg-gradient-to-t from-black flex items-center justify-center">
          <h1 className="text-4xl text-white capitalize">
            Here is the movies collection.
          </h1>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex-wrap flex gap-6 justify-between">
          {collection?.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Movies;
