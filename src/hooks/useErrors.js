import { useState } from "react";

function useErrors(validations) {
  const initialState = createInitialState(validations);
  const [errors, setErrors] = useState(initialState);

  function validateFields(event) {
    const { name, value } = event.target;
    const isValid = validations[name](value);
    const newState = { ...errors, [name]: isValid };
    setErrors(newState);
  }

  function canSend() {
    for (let field in errors) {
      if (!errors[field].valid) {
        return false;
      }
    }
    return true;
  }

  return [errors, validateFields, canSend];
}

function createInitialState(validations) {
  const initialState = {}
  for (let attribute in validations) {
    initialState[attribute] = { valid: true, text: "" }
  }

  return initialState;
}

export default useErrors;
