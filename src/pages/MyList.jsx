import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyList({ myList = [], setMyList }) {

  const [searchTerm, setSearchTerm] = useState("");
  const removeFromList = (id) => {
    const updatedList = myList.filter(
        (movie) => movie.id !== id
    );
    setMyList(updatedList);
   };
  return (

    <div>

      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="movie-row">

        <h2>My List ❤️</h2>

        <div className="movie-cards">

          {myList.map((movie) => (

            <div
              className="movie-card"
              key={movie.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title || movie.name}
              />

              <h3>
                {movie.title || movie.name}
              </h3>
               
               <button
                 className="remove-btn"

                  onClick={() => removeFromList(movie.id)}
                >
                  Remove
                </button>
            </div>

          ))}

        </div>

      </div>

      <Footer />

    </div>

  );
}

export default MyList;