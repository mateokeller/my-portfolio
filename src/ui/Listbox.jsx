import React, {useState} from "react";
import {Listbox, Transition} from "@headlessui/react";

const categories = [
  {id: 1, name: "Web Development"},
  {id: 2, name: "Design"},
];

const MyListbox = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // const handleChange = () => {
  //   setCategory(category);
  //   var filtercategory = category
  // }

  return (
    <div className="md:hidden w-52">
      <Listbox as="div" value={selectedCategory} onChange={setSelectedCategory}>
        {/* <Listbox.Button className="pl-3 py-2 w-full text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 relative border shadow-sm border-gray-300 rounded text-gray-800">
          {selectedCategory.name}
        </Listbox.Button>
        <Listbox.Options>
          {categories.map((category) => (
            <Listbox.Option
              key={category.id}
              value={category}
              disabled={category.unavailable}
            >
              <span className="block truncate">{category.name}</span>
            </Listbox.Option>
          ))}
        </Listbox.Options> */}
        {({open}) => (
          <>
            <div className="relative">
              <span className="inline-block w-full">
                <Listbox.Button className="pl-3 py-2 w-full text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 relative border shadow-sm border-gray-300 rounded text-gray-800">
                  <span className="block truncate">
                    {selectedCategory.name}
                  </span>
                </Listbox.Button>
              </span>
              <Transition
                show={open}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className="border border-gray-300 rounded mt-1"
                >
                  {categories.map((category) => (
                    <Listbox.Option
                      key={category.id}
                      value={category}
                      disabled={category.unavailable}
                    >
                      {({selected, active}) => (
                        <div
                          className={`${
                            active
                              ? "text-white bg-yellow-primary"
                              : "text-gray-900"
                          } cursor-default select-none relative py-2 pl-10 pr-4`}
                        >
                          <span
                            className={`${
                              selected ? "font-semibold" : "font-normal"
                            }`}
                          >
                            {category.name}
                          </span>

                          {selected && (
                            <span
                              className={`${
                                active ? "text-white" : "text-yellow-primary"
                              } absolute inset-y-0 left-0 flex items-center pl-2`}
                            >
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default MyListbox;
