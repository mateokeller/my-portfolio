import React from "react";

const GalleryComponent = (props) => {
  return (
    <div className="relative h-full w-full ">
      <img
        className="w-full h-full object-cover rounded-lg object-top"
        src={props.imagePath}
        alt="parallax landing"
      />
      <div className="absolute bottom-0 w-full h-full overflow-hidden opacity-0 hover:opacity-100 transition-all">
        <div className="flex flex-col w-full gap-6 absolute bottom-0">
          <div className="bg-gray-04 p-4 min-h-[120px] rounded-b-lg">
            <h2 className="text-xl text-black dark:text-white font-medium">
              {props.projectTitle}
            </h2>
            <p className="text-black dark:text-white text-sm">
              {props.projectDescription}
            </p>
            <div className="flex gap-2 pt-2">
              <a
                href={props.url}
                // target="_blank"
                // rel="noreferrer"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="#4399CE"
                  id="magicoon-Filled"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <title>link</title>
                  <g id="link-Filled">
                    <path
                      id="link-Filled-2"
                      data-name="link-Filled"
                      className="cls-1"
                      d="M20.545,10.467l-1.839,1.84a1,1,0,0,1-1.414-1.414l1.839-1.84a2.965,2.965,0,0,0,0-4.186,3.027,3.027,0,0,0-4.184,0l-3.36,3.36a2.046,2.046,0,0,0-.267.316,2.943,2.943,0,0,0,.268,3.87,1,1,0,0,1-1.415,1.414,4.915,4.915,0,0,1-.5-6.42,3.792,3.792,0,0,1,.5-.594l3.36-3.36a4.959,4.959,0,0,1,7.013,7.014Zm-8.132-.294a1,1,0,0,0,0,1.414,2.928,2.928,0,0,1,.688,3.1,2.827,2.827,0,0,1-.688,1.088l-3.36,3.36a3.027,3.027,0,0,1-4.184,0,2.965,2.965,0,0,1,0-4.186l1.839-1.84a1,1,0,1,0-1.414-1.414l-1.839,1.84a4.959,4.959,0,1,0,7.013,7.014l3.359-3.359a4.813,4.813,0,0,0,1.163-1.849,4.963,4.963,0,0,0-1.163-5.166A1,1,0,0,0,12.413,10.173Z"
                    ></path>
                  </g>
                </svg>
              </a>
              <a href={props.github} target="_blank" rel="noreferrer">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#4399CE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
            <div className="bg-yellow-primary text-white  hover:text-white px-3 py-2 rounded-3xl w-max text-xs font-medium mt-3 transition-all">
              {props.projectSubtitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;
