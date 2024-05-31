import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { url } from "../api/api";

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
    <div className="max-w-[1200px]">
      <h1>Here is the movies collection.</h1>
      <div>here is the collection. voilah.</div>
    </div>
  );
};

export default Movies;
