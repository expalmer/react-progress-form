
var datas = [
  {
    id: "name",
    label: "Nome Completo",
    value: "",
    validation: {
      rules: { name: [ "required", "regex:/^([a-zA-z]{3,10} [a-zA-z ]{3,})$/" ] },
      messages: { "required.name": 'Informe seu nome e sobrenome!', 'regex.name': 'Nome e sobrenome rapaz!' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "age",
    label: "Sua Idade",
    value: "",
    validation: {
      rules: { age: [ "required", "integer" ] },
      messages: { "required.age": 'Informe sua idade!', 'integer.age': 'Só números aqui ok' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "email",
    label: "Seu E-mail",
    value: "",
    validation: {
      rules: { email: [ "required", "email" ] },
      messages: { "required.email": 'Informe seu e-mail!', 'email.email': 'E-mail inválido rapa!' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "lang",
    label: "Linguagem de programação poderosa!",
    value: "",
    validation: {
      rules: { lang: [ "required", "regex:/^javascript$/" ] },
      messages: { "required.lang": 'Digite a linguagem!', 'regex.lang': 'Dica: começa com "java" terminha com "script"' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  }
];

module.exports = datas;
