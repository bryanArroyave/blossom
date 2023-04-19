import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../../redux/store";
import { addFilter } from "../../../redux/states/filters";
import { FaSearch } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import Filter from "./Filters";
import { useState } from "react";

export interface SearchInterface {}

const Header: React.FC<SearchInterface> = ({}) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState<boolean>(false);
  const filterSlice = useSelector((store: AppStore) => store.filters);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newState = { ...filterSlice, text: event.target.value };
    dispatch(addFilter(newState));
  };

  return (
    <>
      <div className="flex items-center bg-primary-100 rounded-lg h-[52px] p-2 gap-2">
        <div className="flex justify-center self-center text-gray-300 w-[24px] h-[24px] ">
          <FaSearch className="self-center " size={24} />
        </div>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Search"
          className="bg-transparent w-full focus:outline-none text-gray-700 text-base leading-6 font-medium"
        />
        <div
          onClick={() => {
            setActive(!active);
          }}
          className="flex justify-center rounded-lg self-center text-primary-600 w-[38px] h-[35px] hover:cursor-pointer  hover:bg-gray-300"
        >
          <VscSettings className="self-center" size={20} />
        </div>
      </div>
      {active ? (
        <div className="modal display-block">
          <Filter />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
