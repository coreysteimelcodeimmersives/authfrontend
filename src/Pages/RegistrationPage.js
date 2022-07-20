import React, { useState } from "react";
import { registerUser, loginUser } from "../Auth";
import { useNavigate } from "react-router-dom";

const RegistrationPage = (isAuthLoading, setIsAuthLoading) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>Registration Page</h2>
      <label>Username: </label>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <br />
      <label>Password: </label>
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <br />
      <button
        onClick={async () => {
          setIsAuthLoading(true);
          const isUserRegistered = await registerUser(username, password);
          if (isUserRegistered) {
            const isUserLoggedIn = await loginUser(username, password);
            if (isUserLoggedIn) {
              setIsAuthLoading(false);
              const navigate = useNavigate();
              navigate("/");
            }
          }
        }}
      >
        Signup
      </button>
    </div>
  );
};

export default RegistrationPage;
