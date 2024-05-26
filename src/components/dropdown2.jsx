import React, { useState } from 'react';
import { Country } from '../data/country.js';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(Country[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full flex text-left">
      {/* dropdowmn */}
      {isOpen && (
        <div id="dropdown" className="absolute z-10 -top-48  divide-y bg-white divide-gray-100 rounded-lg shadow w-32 h-44 overflow-y-scroll mt-2 ">
          <ul className="" aria-labelledby="dropdownDefaultButton">
            {Country.map((item, index) => (
              <li key={index}>
                <button onClick={() => handleItemClick(item)} className="flex items-center justify-start text-[10px] px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">
                  <img src={`https://flagsapi.com/${item.label}/flat/48.png`} alt={item.country} className="w-5 h-5 mr-1" />
                  {item.country}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* button dropdown */}
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="relative flex items-center justify-between h-10 w-full rounded-md border-2 px-4 py-1.5 text-xs ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
        type="button"
        onClick={toggleDropdown}
      >
        <img src={`https://flagsapi.com/${selectedItem.label}/flat/48.png`} alt={selectedItem.country} className="w-5 h-5 " />
        {selectedItem.country}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
        <span className="uppercase text-black text-opacity-80 bg-white absolute left-1 top-3 px-1 -translate-y-6 -translate-x-2 scale-75  transition duration-200 text-xs ">country or region</span>
      </button>
    </div>
  );
};

export default Dropdown;
