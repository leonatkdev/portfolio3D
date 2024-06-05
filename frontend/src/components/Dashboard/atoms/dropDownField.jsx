import React, { useState, useEffect } from "react";

const Dropdown = ({
  label = "Assigned to:",
  selectedData,
  options = [],
  key = "name",
  showImage = true,
  showLabel = true,
  onSelect,
}) => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const selectedOption = options.find(option => option._id === selectedData._id);
    setSelected(selectedOption);
  }, [selectedData, options]);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option); // Call the onSelect handler with the selected option
  };

  return (
    <div className="container mx-auto">
      <div className="">
        {showLabel && (
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {label}
          </label>
        )}

        <div className="relative mt-2">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
          >
            <span className="flex items-center">
              {showImage && selected?.avatar && (
                <img
                  src={selected.avatar}
                  alt=""
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                />
              )}
              <span className="ml-3 block truncate">
                {selected ? selected[key] : 'Select an option'}
              </span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <span className="h-5 w-5 text-gray-400">&#9660;</span>
            </span>
          </div>

          {isOpen && (
            <div className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <div
                  key={option._id}
                  onClick={() => handleSelect(option)}
                  className="relative cursor-pointer select-none py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white"
                >
                  <div className="flex items-center">
                    {showImage && option.avatar && (
                      <img
                        src={option.avatar}
                        alt=""
                        className="h-5 w-5 flex-shrink-0 rounded-full"
                      />
                    )}
                    <span className="ml-3 block truncate">
                      {option[key]}
                    </span>
                  </div>
                  {selected && selected[key] === option[key] && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                      &#10003;
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
