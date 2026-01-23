import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import useInput from "../hooks/useInput.jsx";

export default function Login() {
  const {
    value: emailValue,
    handleChange: handleChangeEmail,
    handleBlur: handleBlurEmail,
    hasError: emailIsInvalid,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleChange: handleChangePassword,
    handleBlur: handleBlurPassword,
    hasError: passwordIsInvalid,
  } = useInput("", (value) => isNotEmpty(value) && hasMinLength(value, 6));

  // const [enteredData, setEnteredData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [isTyping, setIsTyping] = useState({
  //   email: false,
  //   password: false,
  // });

  function handleSubmit(event) {
    event.preventDefault();
  }

  // function handleChange(identifier, value) {
  //   setEnteredData((prev) => ({
  //     ...prev,
  //     [identifier]: value,
  //   }));
  //   setIsTyping((prev) => ({
  //     ...prev,
  //     [identifier]: false,
  //   }));
  // }

  // function handleBlur(identifier) {
  //   setIsTyping((prev) => ({
  //     ...prev,
  //     [identifier]: true,
  //   }));
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          inputIdentifier="email"
          onBlur={handleBlurEmail}
          onChange={handleChangeEmail}
          value={emailValue}
          error={emailIsInvalid && "Please enter a valid email"}
        />
        <Input
          inputIdentifier="password"
          onBlur={handleBlurPassword}
          onChange={handleChangePassword}
          value={passwordValue}
          error={
            passwordIsInvalid && "Please enter password with in 6 characters"
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
