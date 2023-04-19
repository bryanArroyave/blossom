import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../../redux/store";
import { addFilter } from "../../../redux/states/filters";

export interface FilterInterface {}

const Filter: React.FC<FilterInterface> = ({}) => {
  const dispatch = useDispatch();

  const filters = useSelector((store: AppStore) => store.filters);
  console.log("sali");

  const setFilter = (filter: string, value: string) => {
    const newFilter: any = { ...filters };
    newFilter[filter] = value;
    dispatch(addFilter(newFilter));
  };

  const colorNonSelectedClass =
    "text-color-primary bg-white border-primary-100 hover:border-primary-700 active:outline-none";
  const colorSelectedClass =
    "text-primary-600 bg-primary-100 hover:border-primary-700 active:outline-none";

  const getClases = (val1: string, val2: string) => {
    const clases = `h-[44px] w-[102px]   ${
      val1 != val2 ? colorNonSelectedClass : colorSelectedClass
    }`;
    return clases;
  };

  return (
    <>
      <div className="modal-main">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <p className="text-color-primary">Character</p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  setFilter("character", "");
                }}
                className={getClases(filters.character, "")}
              >
                All
              </button>
              <button
                onClick={() => {
                  setFilter("character", "starred");
                }}
                className={getClases(filters.character, "starred")}
              >
                Starred
              </button>
              <button
                onClick={() => {
                  setFilter("character", "other");
                }}
                className={getClases(filters.character, "other")}
              >
                Other
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-color-primary">Specie</p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  setFilter("specie", "");
                }}
                className={getClases(filters.specie, "")}
              >
                All
              </button>
              <button
                onClick={() => {
                  setFilter("specie", "human");
                }}
                className={getClases(filters.specie, "human")}
              >
                Human
              </button>
              <button
                onClick={() => {
                  setFilter("specie", "alien");
                }}
                className={getClases(filters.specie, "alien")}
              >
                Alien
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
