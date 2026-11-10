import React, { useState } from "react";

const Login = () => {
	const [islogin, setIsLogin] = useState(true)
  const handleSignup = () => {
    setIsLogin(false)
  };

  const handleLogin = () => {
		
  };

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
    
      <div
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
				<button
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
        >Signup</button>
					<button
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
      </div>
    </div>
  );
};

export default Login;