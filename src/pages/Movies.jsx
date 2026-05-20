import { useState } from "react";

import Navbar from "../components/Navbar";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";

import requests from "../api/requests";
function Movies({ myList, setMyList }) {

  const [searchTerm, setSearchTerm] = useState("");

  return (

    <div>

      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <MovieRow
        title="Trending Now"
        fetchUrl={requests.trending}
        searchTerm={searchTerm}
        myList={myList}
        setMyList={setMyList}
      />
      <MovieRow
        title="Top Rated Movies"
        fetchUrl={requests.topRated}
        searchTerm={searchTerm}
        myList={myList}
        setMyList={setMyList}
      />

      <MovieRow
        title="Action Movies"
        fetchUrl={requests.actionMovies}
        searchTerm={searchTerm}
        myList={myList}
        setMyList={setMyList}
      />

      <MovieRow
        title="Comedy Movies"
        fetchUrl={requests.comedyMovies}
        searchTerm={searchTerm}
        myList={myList}
        setMyList={setMyList}
      />

      <MovieRow
        title="Thriller Movies"
        fetchUrl={requests.thrillerMovies}
        searchTerm={searchTerm}
        myList={myList}
        setMyList={setMyList}
      />

      <MovieRow
        title="Sci-Fi Movies"
        fetchUrl={requests.sciFiMovies}
        searchTerm={searchTerm}
        myList={myList}
        setMyList={setMyList}
      />

      <Footer />

    </div>

  );
}

export default Movies;