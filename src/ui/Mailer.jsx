import React, {useState, useRef} from "react";
import emailjs from "@emailjs/browser";

import useValidation from "../hooks/useValidation";
import {validateForm} from "../validate/validateForm";

export const Mailer = () => {
  const INITIAL_STATE = {
    name: "",
    email: "",
    message: "",
  };

  const [error, setError] = useState(false);

  const sendEmail = (event) => {
    emailjs
      .sendForm(
        "service_8t0n2qu",
        "template_g47joqo",
        form.current,
        "u-7NDagXvsfPUnlLD"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    setIsOpen(true);
  };

  const {values, errors, handleChange, handleSubmit, handleBlur} =
    useValidation(INITIAL_STATE, validateForm, sendEmail);

  const {name, email, message} = values;
  const form = useRef();

  const isButtonDisabled = name === "" || email === "" || message === "";

  return (
    <>
      <div className="bg-gray-04 p-5 rounded-md mt-10 xs:w-11/12 lg:max-w-5xl">
        <form
          ref={form}
          className="flex flex-col text-black"
          onSubmit={handleSubmit}
          action=""
        >
          <input
            className="p-3 border-none rounded-sm mb-5"
            type="text"
            value={name}
            placeholder="Name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* {errors.name ? (
            <div className="lg:px-3 m:px-2 text-yellow-primary pb-1 text-center">
              {errors.name}
            </div>
          ) : null} */}

          <input
            required
            className="p-3 border-none rounded-sm mb-5"
            type="email"
            value={email}
            placeholder="Email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* {errors.email ? (
            <div className="lg:px-3 m:px-2 text-yellow-primary pb-1 text-center">
              {errors.email}
            </div>
          ) : null} */}

          <textarea
            className="p-3 border-none rounded-sm mb-5"
            name="message"
            value={message}
            placeholder="Leave your message here"
            id=""
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>

          {/* {errors.message ? (
            <div className="lg:px-3 m:px-2 text-yellow-primary pb-1 text-center">
              {errors.message}
            </div>
          ) : null} */}

          {/* {error ? (
            <div className="lg:px-3 m:px-2 text-yellow-primary pb-1 text-center">
              {error}
            </div>
          ) : null} */}

          <button
            onClick={handleSubmit}
            disabled={isButtonDisabled}
            type="submit"
            className="btn items-center justify-center self-center text-xl font-extrabold flex w-72 xs:max-w-full h-12 border-[3px] border-yellow-primary text-yellow-primary cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};
