function validCPF(cpf) {
  if (cpf.length < 11 || cpf.length > 14) {
    return { valid: false, text: "CPF deve ter entre 11 digitos só numeros ou até 14 digitos com os caracteres de separação!" };
  } else {
    return { valid: true, text: "" };
  }
}

function validPassword(password) {
  if (password.length < 4 || password.length > 72) {
    return { valid: false, text: "Senha tem que ter mais de 4 e 72 digitos" };
  } else {
    return { valid: true, text: "" };
  }
}

function validName(name) {
  let max = 10;
  let min = 3;
  if (name.length < min || name.length > max) {
    name.substr(0, max);
    return {
      valid: false,
      text: `Nome tem que ter mais de ${min} e ${max} digitos`,
    };
  } else {
    return { valid: true, text: ""};
  }
}

// const validName = (event, state, max) => {
//   let tempValue = event;
//   if (tempValue.length >= max) {
//     tempValue = tempValue.substr(0, max);
//   }
//   return state(tempValue);
// };

export { validCPF, validPassword, validName };
