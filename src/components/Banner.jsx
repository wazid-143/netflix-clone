import { useEffect, useState } from "react";
import axios from "axios";

function Banner() {

  const [movie, setMovie] = useState({});

  useEffect(() => {

    async function fetchBanner() {

      const request = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=17c125511b59dd952eae9681b0bb1ceb"
      );

      const results = request.data.results || [];

     if (results.length > 0) {

      const randomMovie =
      results[
      Math.floor(
      Math.random() * results.length
      )
     ];

    setMovie(randomMovie);
    console.log(randomMovie);

   }

    }

    fetchBanner();

  }, []);

  return (

    <header
      className="banner"

       style={{

        backgroundImage: `
        linear-gradient(to top, black, rgba(0,0,0,0.3)),
       url(https://image.tmdb.org/t/p/original${
       movie?.backdrop_path || movie?.poster_path
      })
      `,

      backgroundSize: "cover",

      backgroundPosition: "center",
     }}
    >

      <div className="banner-content">

        <h1>
          {movie.title || movie.name}
        </h1>

        <p>
          {movie.overview}
        </p>

        <button>
          ▶ Watch Now
        </button>

      </div>

    </header>
  );
}

export default Banner;