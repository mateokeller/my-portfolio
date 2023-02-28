import React, {useState, useRef} from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Spinner from "./Spinner";

export const Mailer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [message, setMessage] = useState("");

  const values = {
    name: name,
    email: email,
    message: message,
  };

  const handleChange = (e) => {
    let valid;
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);

        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }

        if (e.target.value === "") {
          setEmailHelper("");
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

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
          console.log(data);

          setName("");
          setEmail("");
          setMessage("");

          setLoading(false);
          setOpenModal(true);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="bg-gray-04 p-5 rounded-md mt-10 xs:w-11/12 lg:max-w-5xl">
        <form id="frm" className="flex flex-col text-black" action="">
          <input
            className="p-3 border-none rounded-sm mb-5"
            type="text"
            value={name}
            required
            placeholder="Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            className="p-3 border-none rounded-sm mb-5"
            type="email"
            id="email"
            value={email}
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />
          <textarea
            required
            className="p-3 border-none rounded-sm mb-5"
            name="message"
            value={message}
            placeholder="Leave your message here"
            id=""
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            onClick={handleSubmit}
            disabled={
              name.length === 0 ||
              message.length < 9 ||
              emailHelper.length !== 0 ||
              email.length === 0
            }
            type="submit"
            className={
              Loading
                ? " items-center justify-center self-center text-xl font-extrabold flex w-72 xs:max-w-full h-12 border-[3px] border-yellow-primary text-yellow-primary cursor-pointer"
                : "btn items-center justify-center self-center text-xl font-extrabold flex w-72 xs:max-w-full h-12 border-[3px] border-yellow-primary text-yellow-primary cursor-pointer"
            }
          >
            {Loading ? <Spinner /> : <p>Send</p>}
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
