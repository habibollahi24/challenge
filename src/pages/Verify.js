import React, { useState, useEffect, useRef } from "react";
import { postVerifyCode } from "../service/postVerifyCode";

const Verify = ({ number, history }) => {
  const [verifyCode, setverifyCode] = useState("");
  const [error, setError] = useState("");
  const [display, setDisplay] = useState(null);
  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setDisplay("disable");
    try {
      const { data } = await postVerifyCode({ phonenumber: number, verifyCode });
      localStorage.setItem("token", data.token);
      history.push("/");
    } catch (error) {
      setError(error.message);
      setverifyCode("");
      setDisplay("");
    }
  };
  return (
    <div className="phonenumber">
      <form onSubmit={submitHandler}>
        <label> verify number:</label>
        <input ref={input} type="text" value={verifyCode} onChange={(e) => setverifyCode(e.target.value)} />
        <button disabled={display === "disable"} className="btn btn-login" type="submit">
          submit
        </button>
        {error && <p className="erromessage">verify code not correct</p>}
      </form>
    </div>
  );
};

export default Verify;
