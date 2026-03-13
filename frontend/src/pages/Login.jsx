import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSubmit = async (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      
      {currentState === "Sign Up" && (
        <>
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
        </>
      )}
      
      <input
        type="email"
        placeholder="Email Address"
        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        required
      />

      {/* Forgot Password Option */}
      {currentState === "Login" && (
        <div className="w-full flex justify-end">
          <button
            type="button"
            className="text-xs text-gray-800 hover:underline cursor-pointer"
            onClick={() => alert("Forgot password functionality not implemented yet.")}
          >
            Forgot password?
          </button>
        </div>
      )}
      
      {currentState === "Sign Up" && (
        <input
          type="password"
          placeholder="Confirm Password"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          required
        />
      )}
      
      <button className="bg-black text-white px-16 py-3 text-sm mt-4">
        SUBMIT
      </button>
      
      <p
        className="text-sm mt-4 cursor-pointer"
        onClick={() =>
          setCurrentState(currentState === "Sign Up" ? "Login" : "Sign Up")
        }
      >
        {currentState === "Sign Up"
          ? "Already have an account? Login"
          : "Don't have an account? Sign Up"}
      </p>
    </form>
  );
};

export default Login;
