import axios from "axios";
import { useEffect, useState } from "react";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function MovieRow({ title, fetchUrl, searchTerm ,myList, setMyList}) {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {

    async function fetchData() {

      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      setLoading(false);

    }

    fetchData();

  }, [fetchUrl]);

  const handleClick = (movie) => {

    if (trailerUrl) {

      setTrailerUrl("");

    } else {

      movieTrailer(movie?.title || "")
        .then((url) => {

          const urlParams = new URLSearchParams(
            new URL(url).search
          );

          setTrailerUrl(urlParams.get("v"));

        })
        .catch((error) => console.log(error));
    }
  };

  const addToList = (movie) => {

      const alreadyAdded = myList.find(
        (item) => item.id === movie.id
      );

    if (!alreadyAdded) {

     setMyList([...myList, movie]);

    }
  };

  return (
    <div className="movie-row">

      <h2>{title}</h2>

      {loading && (

         <h2 className="loading">
            Loading Movies...
            </h2>

          )}

      <div className="movie-cards">

         {movies
          ?.filter((movie) => movie.poster_path)
         .filter((movie) => {

         const movieName =
         movie.title || movie.name || "";

         const search =
          searchTerm || "";
  
         return movieName
        .toLowerCase()
          .includes(search.toLowerCase());

         })
             .map((movie) => (
         

            <div  
             className="movie-card"
              key={movie.id}
            >

              <img
                onClick={() => setSelectedMovie(movie)}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title || movie.name}
              />

              <h3>{movie.title || movie.name}</h3>

              <div className="movie-buttons">
                 <button
                   onClick={() => addToList(movie)}
                 >
                   + My List
                 </button>

                   <button
                      onClick={() => handleClick(movie)}
                     >
                     ▶ Play
                   </button>
                 
              </div>

            </div>

          ))}

      </div>

      {trailerUrl && (
        <Youtube
          videoId={trailerUrl}
          opts={{
            height: "390",
            width: "100%",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      )}
      {selectedMovie && (

         <div className="modal">

           <div className="modal-content movie-detail">
    
           <span
            className="close-btn"

              onClick={() => setSelectedMovie(null)}
            >
             ×
           </span>

         <img
          src={`https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
          />

         <h2>
           {selectedMovie.title || selectedMovie.name}
         </h2>

          <p>
           {selectedMovie.overview}
          </p>

          <h3>
            ⭐ Rating: {selectedMovie.vote_average}
         </h3>

           <h3>
            📅 Release:
            {selectedMovie.release_date}
            </h3>

         </div>

        </div>

        )}
     </div>
  );
}

export default MovieRow;