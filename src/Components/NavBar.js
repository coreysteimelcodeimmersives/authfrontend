import React from "react";
import { Outlet, Link } from "react-router-dom";
import { getUserToken, logoutUser } from "../Auth";

const NavBar = (isAuthLoading, setIsAuthLoading) => {
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    const localUserToken = getUserToken();
    setUserToken(localUserToken);
  }, [isAuthLoading]);
  return (
    <div>
      <nav>
        <h3>NavBar</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!userToken && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
            </>
          )}
        </ul>
        {userToken && (
          <>
            <span>
              <strong>You Are Logged In</strong>
            </span>
            <button
              onClick={() => {
                logoutUser();
              }}
            >
              Logout
            </button>
          </>
        )}
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
