import "./App.css";
import { useState, useEffect } from "react";
import AuthScreen from "./AuthScreen";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import MyList from "./pages/MyList";
import { auth } from "./firebase";
 
import {
  onAuthStateChanged
} from "firebase/auth";

function App() {
 const [myList, setMyList] = useState([]);
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);
 const [showLogin, setShowLogin] = useState(false);
 const [showSignup, setShowSignup] = useState(false);
 useEffect(() => {

  const unsubscribe =
    onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);

      setLoading(false);

    });

  return () => unsubscribe();

  }, []);
  if (loading) {

  return <h1>Loading...</h1>;

  }
  if (!user) {

    return (

  <BrowserRouter>

    <AuthScreen
      setShowLogin={setShowLogin}
      setShowSignup={setShowSignup}
    />
    
      <Navbar
       searchTerm=""
       setSearchTerm={() => {}}
        hidden={true}
     />
     

    </BrowserRouter>

    );

  }
  return (

    <BrowserRouter>

      <Routes>

          <Route
            path="/"

            element={
             <Home
              myList={myList}
              setMyList={setMyList}
           />
          }
        />

         <Route
             path="/movies"

             element={
            <Movies
               myList={myList}
                setMyList={setMyList}
            />
           }
          />
          <Route
            path="/tvshows"

             element={
           <TVShows
             myList={myList}
             setMyList={setMyList}
           />
           }
          />
         <Route
           path="/mylist"

            element={
           <MyList
           myList={myList}
           setMyList={setMyList}
          />
         }
       />

      </Routes>

    </BrowserRouter>

  );
}

export default App;