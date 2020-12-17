import "./App.css";
import "fontsource-roboto";

import { Component } from "react";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { Container, Typography } from "@material-ui/core";
import { validPassword, validCPF, validName } from "./models/cadastro";
import RegisterValidations from "./conetexts/RegisterValidations";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <RegisterValidations.Provider
          value={{
            name: validName,
            setName: validName.setName,
            cpf: validCPF,
            password: validPassword,
          }}
        >
          <RegistrationForm onSubmit={onSubmitForm} />
        </RegisterValidations.Provider>
      </Container>
    );
  }
}

function onSubmitForm(data) {
  console.log(data);
}

export default App;
