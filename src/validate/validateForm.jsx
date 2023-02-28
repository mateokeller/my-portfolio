export const validateForm = (values) => {
  let errors = {};

  // validar el nombre
  if (!values.name) {
    errors.name = "El nombre es obligatorio";
  }

  // validar el email
  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (
    !(
      // regex validation
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    )
  ) {
    errors.email = "Email no valido";
  }

  // validar el message
  if (!values.message) {
    errors.message = "It must contain a message";
  } else if (values.message.length < 9) {
    errors.message = "El mensaje debe contener por lo menos 10 caracteres";
  }

  return errors;
};
