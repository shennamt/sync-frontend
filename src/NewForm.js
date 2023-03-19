import { useState } from "react";

const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPasswordAgain, setSignupPasswordAgain] = useState("");
  const [isLoginPage, setIsLoginPage] = useState(true); // initialize with true

  const handleLoginEmailChange = (event) => {
    setLoginEmail(event.target.value);
  };

  const handleLoginPasswordChange = (event) => {
    setLoginPassword(event.target.value);
  };

  const handleSignupEmailChange = (event) => {
    setSignupEmail(event.target.value);
  };

  const handleSignupPasswordChange = (event) => {
    setSignupPassword(event.target.value);
  };

  const handleSignupPasswordAgainChange = (event) => {
    setSignupPasswordAgain(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Handle login form submission here
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    if (signupPassword !== signupPasswordAgain) {
      alert("Passwords do not match. Please re-enter your password.");
      setSignupPassword("");
      setSignupPasswordAgain("");
    } else {
      fetch("http://localhost:4500/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: signupEmail, password: signupPassword })
      })
        .then((response) => {
          if (response.ok) {
            // Handle successful signup here
          } else {
            // Handle signup failure here
          }
        })
        .catch((error) => {
          // Handle network or other errors here
        });
    }
  };

  //Note that this assumes that your backend API has endpoints /api/login and /api/signup that accept JSON-encoded POST requests with email and password fields. You would need to modify the endpoint URLs and request data to match your specific backend API.

  const handleToggle = () => {
    setIsLoginPage(!isLoginPage); // toggle the isLoginPage state
  };

  return (
    <div>
      {isLoginPage ? (
        <>
          <h1>Login page</h1>
          <form onSubmit={handleLoginSubmit}>
            <label>
              Email:
              <input
                type="email"
                value={loginEmail}
                onChange={handleLoginEmailChange}
                required
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={loginPassword}
                onChange={handleLoginPasswordChange}
                required
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        </>
      ) : (
        <>
          <h1>Signup page</h1>
          <form onSubmit={handleSignupSubmit}>
            <label>
              Email:
              <input
                type="email"
                value={signupEmail}
                onChange={handleSignupEmailChange}
                required
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={signupPassword}
                onChange={handleSignupPasswordChange}
                required
              />
            </label>
            <br />
            <label>
              Retype Password:
              <input
                type="password"
                value={signupPasswordAgain}
                onChange={handleSignupPasswordAgainChange}
                required
              />
              <br />
            </label>
            <button type="submit">Signup</button>
          </form>
        </>
      )}
      <button onClick={handleToggle}>
        {isLoginPage
          ? "Don't have an account? Signup"
          : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default LoginPage;
