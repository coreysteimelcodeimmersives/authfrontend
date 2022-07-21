import React, { useState } from "react";
import { registerUser, loginUser } from "../Auth";
import { useNavigate } from "react-router-dom";

const RegistrationPage = ({ isAuthLoading, setIsAuthLoading }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <br />
      <button
        onClick={async () => {
          setIsAuthLoading(true);
          console.log("username: ", username, " password: ", password);
          const isUserRegistered = await registerUser(username, password);
          console.log("after register user call");
          if (isUserRegistered) {
            console.log("after login user call");
            const isUserLoggedIn = await loginUser(username, password);
            console.log("after login user call");
            if (isUserLoggedIn) {
              console.log("logged in");
              setIsAuthLoading(false);
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
