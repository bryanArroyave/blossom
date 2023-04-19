import Filter from "./Filters";
import Search from "./Search";

export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = ({}) => {
  return (
    <>
      <div>
        <h2 className="pt-[40px] pb-[16px] font-bold text-3xl text-color-primary">
          Rick and Morty list
        </h2>
        <Search />
      </div>
    </>
  );
};

export default Header;
