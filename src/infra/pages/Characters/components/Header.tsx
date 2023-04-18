import Search from "./Search";

export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = ({}) => {
  return (
    <>
      <div>
        <h2 className="text-color-primary">Rick and Morty list</h2>

        <Search />
      </div>
    </>
  );
};

export default Header;
