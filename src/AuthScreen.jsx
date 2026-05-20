function AuthScreen({
  setShowLogin,
  setShowSignup
}) {

  return (

    <div className="auth-screen">

      <div className="auth-overlay">

        <h1 className="auth-logo">
          NETFLIX
        </h1>

        <div className="auth-content">

          <h2>
            Unlimited Movies, TV Shows & More
          </h2>

          <p>
            Watch anywhere. Cancel anytime.
          </p>

          <p className="auth-login-text">

            Please Login.../ Signup Above...

         </p>

        </div>

      </div>

    </div>

  );
}

export default AuthScreen;