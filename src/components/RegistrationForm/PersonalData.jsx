import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import RegisterValidations from "../../conetexts/RegisterValidations";
import useErrors from "../../hooks/useErrors";

function PersonalData({ onSubmit }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cpf, setCPF] = useState("");
  const [promotion, setPromotion] = useState(true);
  const [news, setNews] = useState(true);
  const validations = useContext(RegisterValidations);

  const [errors, validateFields, canSend] = useErrors(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSend()) {
          onSubmit({ name, surname, cpf, news, promotion });
        }
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        onBlur={validateFields}
        error={!errors.name.valid}
        helperText={errors.name.text}
        id="name"
        name="name"
        label="Nome"
        variant="outlined"
        type="text"
        margin="normal"
        fullWidth
      />
      <TextField
        value={surname}
        onChange={(event) => {
          setSurname(event.target.value);
        }}
        id="surname"
        name="surname"
        label="Sobrenome"
        variant="outlined"
        type="text"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCPF(event.target.value);
        }}
        onBlur={validateFields}
        error={!errors.cpf.valid}
        helperText={errors.cpf.text}
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        type="text"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={news}
            onChange={(event) => {
              setNews(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promotion}
            onChange={(event) => {
              setPromotion(event.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        }
      />
      <Button variant="contained" color="primary">
        Anterior
      </Button>
      <Button variant="contained" color="primary" type="submit">
        Próxima
      </Button>
    </form>
  );
}

export default PersonalData;
