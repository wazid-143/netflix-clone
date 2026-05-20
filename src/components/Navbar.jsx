import { auth } from "../firebase";
import { FaUserCircle } from "react-icons/fa";
import {
  createUserWithEmailAndPassword
} from "firebase/auth";
import {
  signInWithEmailAndPassword
} from "firebase/auth";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import {
  updateProfile
} from "firebase/auth";

function Navbar({ searchTerm, setSearchTerm }) {
  const location = useLocation();

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(null);
  const handleSignup = async () => {

  try {

    const userCredential =
     await createUserWithEmailAndPassword(
      auth,
      signupEmail,
      signupPassword
    );

  await updateProfile(
    userCredential.user,
    {
     displayName: signupName,
   }
   );
   setUser({
     ...userCredential.user,
     displayName: signupName,
     });
   alert("Signup Successful 🔥");

    setShowSignup(false);

   } catch (error) {

    alert(error.message);

    }
  
  };

  const handleLogin = async () => {

   try {

    await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );

    alert("Login Successful 🔥");

    setShowLogin(false);

   } catch (error) {

    alert(error.message);

   }
  };

  useEffect(() => {

    const unsubscribe =
    onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);

    });

     return () => unsubscribe();

    }, []);
          
      const handleLogout = async () => {

      await signOut(auth);

     alert("Logout Successful 👋");

     };

  return (

    <div>

       <nav className="navbar">

        <h1 className="logo">NETFLIX</h1>
          <div
             className="menu-icon"

              onClick={() => setShowMenu(!showMenu)}
            >
              ☰
            </div>
        <input
          type="text"
          placeholder="Search movies..."
          className="search-bar"

          value={searchTerm}

          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

          <ul
            className={
                showMenu
                  ? "nav-links active"
                  : "nav-links"
               }
            >
           <li
             className={location.pathname ===  "/" ? "active" : ""}            
             >
             <Link to="/">Home</Link>
            </li>
            <li
              className={location.pathname ===  "/tvshows" ? "active" : ""}

                
              >
               <Link to="/tvshows">TV Shows</Link>
            </li>
               <li
                 className={ location.pathname === "/movies" ? "active" : ""}
             
                  >
                 <Link to="/movies">Movies</Link>
               </li>
                <li
                 className={ location.pathname === "/mylist" ? "active" : ""}
                    
                    >
                    <Link to="/mylist">My List</Link>

                </li>
          </ul>

       <div className="auth-buttons">

        {user ? (

        <>

   <div className="user-menu">

  <FaUserCircle
    className="user-icon"

    onClick={() =>
      setShowDropdown(!showDropdown)
    }
   />

   <span>
    {user?.displayName || user?.email}
   </span>

    {showDropdown && (

     <div className="dropdown-menu">

      <button
        className="signup-btn"

        onClick={handleLogout}
      >
        Logout
      </button>

     </div>

     )}

    </div>
      </>

      ) : (

      <>

      <button
        className="login-btn"

        onClick={() => setShowLogin(true)}
       >
        Login
       </button>

       <button
        className="signup-btn"

        onClick={() => setShowSignup(true)}
       >
        Sign Up
       </button>

       </>

        )}

        </div>

          </nav>

             {showLogin && (

           <div className="modal">

          <div className="modal-content">

            <span
              className="close-btn"

              onClick={() => setShowLogin(false)}
            >
              ×
            </span>

            <h2>Login</h2>

             <input
               type="email"
               placeholder="Enter Email"

               value={loginEmail}

               onChange={(e) =>
               setLoginEmail(e.target.value)
                 }
            />
            
            <div className="password-box">

              <input
               type={showPassword ? "text" : "password"}
               placeholder="Enter Password"

               value={loginPassword}

               onChange={(e) =>
               setLoginPassword(e.target.value)
               }
              />

              <span
               className="eye-inside"

                onClick={() =>
                setShowPassword(!showPassword)
                }
                 >
                {showPassword ? "🙈" : "👁"}
               </span>

            </div>
            
            <button
            className="modal-btn"

            onClick={handleLogin}
            >
           Login
           </button>

          </div>

        </div>

      )}
     {showSignup && (

          <div className="modal">

           <div className="modal-content">

         <span
          className="close-btn"

          onClick={() => setShowSignup(false)}
         >
          ×
          </span>

         <h2>Sign Up</h2>

           <input
             type="text"
              placeholder="Enter Name"

              value={signupName}

             onChange={(e) =>
              setSignupName(e.target.value)
              }
           />

         <input
            type="email"
           placeholder="Enter Email"

           value={signupEmail}

           onChange={(e) =>
           setSignupEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Create Password"

            value={signupPassword}

            onChange={(e) =>
            setSignupPassword(e.target.value)
           }
          />
            <button
            className="modal-btn"

            onClick={handleSignup}
           >
           Sign Up
          </button>
          
          </div>

       </div>

        )}
        </div>

  );
}

export default Navbar;