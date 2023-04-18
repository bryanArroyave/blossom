import { useDispatch, useSelector } from "react-redux";
import { RickAndMortyDTO } from "../../../../domain/rick-and-morty/dtos";
import { FaHeart } from "react-icons/fa";
import { AppStore } from "../../../redux/store";
import { Link } from "react-router-dom";
import { addCharacters } from "../../../redux/states/characters";

export interface CharacterInterface {
  character: RickAndMortyDTO;
}

const Character: React.FC<CharacterInterface> = ({ character }) => {
  const dispatch = useDispatch();

  const characters = useSelector((store: AppStore) => store.characters);

  const filterCharacters = (charactersToFilter: RickAndMortyDTO[]) =>
    charactersToFilter.filter((p) => p.id !== character.id);

  const addToFavorites = () => {
    const newCharacter = { ...character };
    newCharacter.favorite = !character.favorite;
    const filtered = [...filterCharacters(characters), newCharacter];
    dispatch(addCharacters(filtered));
  };

  return (
    <>
      <Link to={`/${character.id}`}>
        <div className="bg-white h-[74px] border-t-1 border-red-500 shadow-md grid grid-cols-3 gap-4 hover:bg-primary-100 cursor-pointer">
          <div className="flex justify-center">
            <img
              src={character.image}
              alt={character.name}
              className="self-center w-8 h-8 object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold mt-2 text-color-primary">
              {character.name} {character.favorite ? "SI" : "NO"}
            </p>

            <p className="mt-2 text-color-secondary">{character.species}</p>
          </div>

          <div
            onClick={addToFavorites}
            className="flex justify-center self-center  w-[32px] h-[32px] rounded-full hover:cursor-pointer"
          >
            <FaHeart
              className="self-center w-[18px] h-[15.36px] text-blue-500 bg-white"
              size={24}
              color={character.favorite ? "#63D838" : "#EEE3FF"}
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Character;
