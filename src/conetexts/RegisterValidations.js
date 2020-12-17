import React from "react";

const RegisterValidations = React.createContext({
  name: withoutValidation,
  setName: withoutValidation,
  cpf: withoutValidation,
  password: withoutValidation,
});

function withoutValidation(data) {
  console.log(data);
  return { valid: true, text: "" };
}

export default RegisterValidations;
