import React from "react";

const Contact = () => {
  return (
    <div className="h-screen w-full">
      <p className="group-indicator">&lt;CONTACT&gt;</p>
      <div className="section-content">
        <h2 className="text-yellow title">Contact</h2>
        <h3 className="subtitle">Interested in collaborating with me?</h3>
        <p className="about-me-text">
          I’m always open to discussing product design work or partnership
          opportunities.
        </p>

        <div className="bg-gray-04 p-5 rounded-md mt-10 w-2/5">
          <form className="flex flex-col text-white" action="">
            <input
              className="p-3 border-none rounded-sm mb-5 "
              type="text"
              placeholder="Name"
              required=""
            />

            <input
              className="p-3 border-none rounded-sm mb-5 "
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required=""
            />

            <textarea
              className="resize-none h-52 p-3 border-none rounded-sm mb-5"
              id="message"
              name="message"
              placeholder="Message"
              required=""
            ></textarea>
            <button className="w-10 btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
