import React, {useState, useRef} from "react";
import emailjs from "@emailjs/browser";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import useValidation from "../hooks/useValidation";
import {validateForm} from "../validate/validateForm";

export const Mailer = () => {
  const INITIAL_STATE = {
    name: "",
    email: "",
    message: "",
  };

  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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

    setOpenModal(true);
    console.log("sent email");
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
          id="frm"
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
        {openModal ? (
          <div>
            <Dialog
              open={true}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Thank you."}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  I will get back to you as soon as possible.
                </DialogContentText>
              </DialogContent>
              <DialogActions className="xs:self-center md:self-end">
                <button
                  className="items-center mr-4 justify-center self-center text-lg  flex w-auto px-5 py-0 xs:max-w-full h-10 border-[1px] border-yellow-primary text-yellow-primary cursor-pointer"
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  autoFocus
                >
                  Agree
                </button>
              </DialogActions>
            </Dialog>
          </div>
        ) : null}
      </div>
    </>
  );
};
