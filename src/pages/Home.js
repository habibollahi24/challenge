import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [access, setAccess] = useState("login");
  useEffect(() => {
    const isToken = localStorage.getItem("token");

    if (!isToken) {
      return setAccess("login");
    } else {
      return setAccess("");
    }
  }, []);

  const clickHandler = () => {
    localStorage.removeItem("token");
    setAccess("login");
  };

  return (
    <div className="app">
      <div className="header">
        {access === "login" ? (
          <Link className="btn btn-login" to="/login">
            login
          </Link>
        ) : (
          <button className="btn btn-logout" onClick={clickHandler}>
            logout
          </button>
        )}
      </div>
      <h2>It is Home page</h2>
    </div>
  );
};

export default Home;
