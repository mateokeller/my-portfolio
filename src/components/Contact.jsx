import React from "react";

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

        <div className="bg-gray-04 p-5 rounded-md mt-10 xs:w-11/12 lg:max-w-5xl">
          <form className="flex flex-col text-white" action="" method="post">
            <input
              className="p-3 border-none rounded-sm mb-5 "
              type="text"
              placeholder="Name"
              value={""}
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
            <button
              className="btn items-center justify-center self-center text-xl font-extrabold flex w-72 xs:max-w-full h-12 border-[3px] border-yellow-primary text-yellow-primary cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
