import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../../redux/store";
import { addFilter } from "../../../redux/states/filters";

export interface SearchInterface {}

const Header: React.FC<SearchInterface> = ({}) => {
  const dispatch = useDispatch();

  const filterSlice = useSelector((store: AppStore) => store.filters);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newState = { ...filterSlice, text: event.target.value };
    dispatch(addFilter(newState));
  };

  return (
    <>
      <div className="flex items-center bg-cool-gray-100 rounded-lg w-343 h-52 p-2 gap-2">
        {/* <span className="text-gray-500">
          <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M14.157 14.157a7.5 7.5 0 111.414-1.414l3.293 3.293a1 1 0 01-1.414 1.414l-3.293-3.293zm-7.5 0a5 5 0 110-10 5 5 0 010 10z"
              clip-rule="evenodd"
            />
          </svg>
        </span> */}
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Search"
          className="bg-transparent w-full focus:outline-none text-gray-700 text-base leading-6 font-medium"
        />
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg">
          Filters
        </button>
      </div>
    </>
  );
};

export default Header;
