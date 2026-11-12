import React, { useState } from "react";

const Login = () => {
	const [islogin, setIsLogin] = useState(true);
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupNumber, setSignupNumber] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [error, setError] = useState("");
  const handleSignup = () => {
    setIsLogin(false)
  };

  const handleLogin = async() => {
		if (!loginUsername) {
      setError("Username is required");
      return;
    }
    if (!loginPassword) {
      setError("Password is required");
      return;
    }
    const response = await fetch("http://localhost:5001/api/users/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        userName: loginUsername,
        password: loginPassword
      })
    });
    console.log("response", response);
  };

  const handleSignupSubmit = async () => {
    if (!signupName) {
      setError("Name is required");
      return;
    }
    if (!signupNumber) {
      setError("Number is required");
      return;
    }
    if (!signupEmail) {
      setError("Email is required");
      return;
    }
    if (!signupPassword) {
      setError("Password is required");
      return;
    }
    const response = await fetch("http://localhost:5001/api/users/signup", {
       method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: signupName,
        email: signupEmail,
        phoneNumber: signupNumber,
        password: signupPassword
      }),
    })
    console.log("response==========", response);
  }


  return (
    // Page: full screen, card centered both ways
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "16px",
      }}
    >
    
      <form
        onSubmit={islogin ? handleLogin : handleSignupSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
          maxWidth: "400px",
          padding: "32px",
          backgroundColor: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* Title */}
        <h2 style={{ margin: "0 0 4px", fontSize: "24px", color: "#111827" }}>
          Welcome back
        </h2>
        <p style={{ margin: "0 0 12px", fontSize: "14px", color: "#6b7280" }}>
          {islogin ? "Log in" : "Signup"} to your TaskFlow account
        </p>

        {/* Inputs */}
				{
					islogin ? <>
					<input
          onChange={(e) => {
            setError("")
            setLoginUsername(e.target.value)
          }}
          placeholder="Email"
          type="email"
          style={{
            height: "50px",
            padding: "0 12px",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
            fontSize: "15px",
          }}
        />
        <input
          onChange={(e) => {
             setError("")
            setLoginPassword(e.target.value)
          }}
          placeholder="Password"
          type="password"
          style={{
            height: "50px",
            padding: "0 12px",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
            fontSize: "15px",
          }}
        />

        {/* Primary button: filled, strong colour */}
        <button
         type="button"
          onClick={handleLogin}
          style={{
            height: "50px",
            marginTop: "8px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#4f46e5",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Login
        </button>
				<button
         type="button"
          onClick={handleSignup}
          style={{
            height: "50px",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
            backgroundColor: "white",
            color: "#374151",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Signup
        </button>
					</>
					: <>
					<input
          placeholder="Name"
          type="text"
          onChange={(e) => {
            setError("");
            setSignupName(e.target.value)
          }}
          style={{
            height: "50px",
            padding: "0 12px",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
            fontSize: "15px",
          }}
        />
				<input
          placeholder="PhoneNumber"
          onChange={(e) => {
            setError("");
            setSignupNumber(e.target.value)
          }}
          type="tel"
          style={{
            height: "50px",
            padding: "0 12px",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
            fontSize: "15px",
          }}
        />
				<input
         onChange={(e) => {
          setError("");
          setSignupEmail(e.target.value)
        }}
          placeholder="Email"
          type="email"
          style={{
            height: "50px",
            padding: "0 12px",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
            fontSize: "15px",
          }}
        />
        <input
         onChange={(e) => {
          setError("");
          setSignupPassword(e.target.value)
        }}
          placeholder="Password"
          type="password"
          style={{
            height: "50px",
            padding: "0 12px",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
            fontSize: "15px",
          }}
        />
				<button
        type="button"
          onClick={handleSignupSubmit}
          style={{
            height: "50px",
            marginTop: "8px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#4f46e5",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >Signup</button>
					<button
          type="button"
          onClick={() => setIsLogin(true)}
          style={{
            height: "50px",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
            backgroundColor: "white",
            color: "#374151",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Back To Login
        </button>
					</>
				}
        <h4 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'red' }}>{error}</h4>
      </form>
    </div>
  );
};

export default Login;