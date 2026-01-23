import { useState } from "react";

export default function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [isTyping, setIsTyping] = useState(false);

  const valid = validationFn(enteredValue);

  function handleChange(event) {
    setEnteredValue(event.target.value);
    setIsTyping(false);
  }

  function handleBlur() {
    setIsTyping(true);
  }

  return {
    value: enteredValue,
    handleChange,
    handleBlur,
    hasError: isTyping && !valid,
  };
}
