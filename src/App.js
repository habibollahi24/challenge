import React, { useState } from "react";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import Verify from "./pages/Verify";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");

  const sendNumber = (num) => {
    setNumber(num);
  };

  return (
    <div className="app">
      <Switch>
        <Route path="/verify" render={(props) => <Verify number={number} {...props} />} />
        <Route path="/login" render={(props) => <LoginForm sendNumber={sendNumber} {...props} />} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
