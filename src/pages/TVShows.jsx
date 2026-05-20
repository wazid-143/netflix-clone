import { useState } from "react";

import Navbar from "../components/Navbar";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";

import requests from "../api/requests";
function TVShows({ myList, setMyList }) {

  const [searchTerm, setSearchTerm] = useState("");

  return (

    <div>

      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <MovieRow
        title="Trending TV Shows"
        fetchUrl={requests.trendingTV}
        searchTerm={searchTerm}
        myList={myList}
       setMyList={setMyList}
      />

      <MovieRow
        title="Top Rated TV Shows"
        fetchUrl={requests.topRatedTV}
        searchTerm={searchTerm}
        myList={myList}
        setMyList={setMyList}
      />

      <MovieRow
        title="Comedy TV Shows"
        fetchUrl={requests.comedyTV}
        searchTerm={searchTerm}
        myList={myList}
        setMyList={setMyList}
      />

      <Footer />

    </div>

  );
}

export default TVShows;