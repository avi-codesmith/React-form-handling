import { useState } from "react";

export default function Login() {
  const [enteredData, setEnteredData] = useState({
    email: "",
    password: "",
  });

  const [isTyping, setIsTyping] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = isTyping.email && !enteredData.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(identifier, value) {
    setEnteredData((prev) => ({
      ...prev,
      [identifier]: value,
    }));
    setIsTyping((prev) => ({
      ...prev,
      [identifier]: false,
    }));
  }

  function handleBlur(identifier) {
    setIsTyping((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            onBlur={() => handleBlur("email")}
            onChange={(event) => handleChange("email", event.target.value)}
            value={enteredData.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter avalid e-mail</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleChange("password", event.target.value)}
            value={enteredData.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={() => handleBlur("email")}>
          Login
        </button>
      </p>
    </form>
  );
}
