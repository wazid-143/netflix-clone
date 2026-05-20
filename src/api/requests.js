const API_KEY = " 17c125511b59dd952eae9681b0bb1ceb";

const requests = {

  trending:
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,

  topRated:
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,

  actionMovies:
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,

  horrorMovies:
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,

  comedyMovies:
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,

  thrillerMovies:
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53`,

  romanceMovies:
   `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  sciFiMovies:
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
    

  trendingTV:
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`,

  topRatedTV:
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`,

  comedyTV:
    `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=35`,

  };

export default requests;