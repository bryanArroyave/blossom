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
        <div
          title="View details"
          className="bg-white h-[74px] grid-cols-[50px,auto,50px] border-t-1 grid grid-cols-3 gap-4 hover:bg-primary-100 cursor-pointer rounded-md rounded-4"
        >
          <div className="flex justify-center">
            <img
              src={character.image}
              alt={character.name}
              className="self-center w-8 h-8 object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold text-color-primary">{character.name}</p>

            <p className="text-color-secondary">{character.species}</p>
          </div>
          <div
            title={
              character.favorite ? "Remove from favorites" : "Add to favorites"
            }
            className="flex justify-center self-center  w-[32px] h-[32px] rounded-full hover:cursor-pointer bg-white"
          >
            <div
              onClick={addToFavorites}
              className="flex justify-center self-center  w-[24px] h-[24px] "
            >
              <FaHeart
                className="self-center "
                size={24}
                color={character.favorite ? "#63D838" : "#EEE3FF"}
              />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Character;
