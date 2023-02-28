import {useState, useEffect} from "react";

const useValidation = (INITIAL_STATE, validate, fn) => {
  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [submitForm, setSubmitForm] = useState(false);
  const [Loading, setLoading] = useState(false);

  console.log(values);
  console.log("errors: ", errors);

  useEffect(() => {
    if (submitForm) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        /* funcion que ejecuta el componente */
        setLoading(true);
      }
      setSubmitForm(false);
    }
    //eslint-disable-next-line
  }, [errors]);

  /* Funcion que se ejecuta a medida que el usuario escribe algo */
  const handleChange = (e) => {
    if (Object.keys(errors).length > 0) {
      setButtonDisabled(true);
    } else if (Object.keys(errors).length === 0) {
      setButtonDisabled(false);
    }
    const validationErrors = validate(values);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setErrors(validationErrors);
    if (Object.keys(errors).length > 0) {
      setButtonDisabled(true);
    } else if (Object.keys(errors).length === 0) {
      setButtonDisabled(false);
    }
    // console.log("errors: ", errors);

    console.log("is button disabled: ", buttonDisabled);
    setErrors(validationErrors);
  };

  // Funcion que se ejecuta cuando el usuario hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitForm(true);

    fetch("https://formsubmit.co/ajax/mateokellergms@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success === "true") {
          setValues(INITIAL_STATE);
          console.log(data);
          fn();
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  };

  // cuando se realiza el evento de blur
  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);

    console.log("is button disabled: ", buttonDisabled);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    buttonDisabled,
    Loading,
  };
};

export default useValidation;
