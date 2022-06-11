import React, { useState, useEffect, useRef } from "react";
import { postPhoneNumber } from "../service/postPhoneNumber";
const LoginForm = ({ history, sendNumber }) => {
  const [number, setNumber] = useState("");
  const [display, setDisplay] = useState(null);

  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    sendNumber(number);
    setDisplay("disable");
    const fetchPhoneNumber = async () => {
      try {
        await postPhoneNumber({
          phonenumber: number,
        });

        await history.push("/verify");
      } catch (error) {
        setDisplay("");
      }
    };
    fetchPhoneNumber();
  };

  return (
    <div className="phonenumber">
      <form onSubmit={submitHandler}>
        <label>Enter phonenumber:</label>
        <input
          disabled={display === "disable"}
          ref={input}
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button disabled={display === "disable"} className="btn btn-login" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
