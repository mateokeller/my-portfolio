import React from "react";
import {Modal} from "@mui/material";

import {Mailer} from "../ui/Mailer";

const Contact = () => {
  return (
    <div className="w-full flex">
      <p className="hidden md:block md:font-group-indicator md:[font-size:10rem] md:[width:40rem] md:self-center md:absolute md:transform md:-rotate-90 md:text-gray-03 md:[margin-left:-1em]">
        &lt;CONTACT&gt;
      </p>
      <div className="w-full -top-48 relative flex flex-col items-center p-4">
        <h2 className="text-yellow-primary text-2xl">Contact</h2>
        <h3 className="m-0 [font-size:2rem] mb-4">
          Interested in collaborating with me?
        </h3>
        <p className="hidden md:flex md:[width:40rem] justify-between items-center font-bold text-xl xs:w-4/5 ">
          I’m always open to discussing product design work or partnership
          opportunities.
        </p>

        <Mailer />
      </div>
    </div>
  );
};

export default Contact;
