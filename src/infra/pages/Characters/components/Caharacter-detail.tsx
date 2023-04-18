import { useDispatch, useSelector } from "react-redux";
import { RickAndMortyDTO } from "../../../../domain/rick-and-morty/dtos";
import { AppStore } from "../../../redux/store";
import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { FaHeart, FaRemoveFormat } from "react-icons/fa";
import { addCharacters } from "../../../redux/states/characters";
import { Link } from "react-router-dom";

export interface CharacterDetailInterface {}
const CharacterDetail: React.FC<CharacterDetailInterface> = ({}) => {
  const { id } = useParams();
  const [selectedPeople, setActiveCharacter] = useState<RickAndMortyDTO>();
  const [comment, setComment] = useState<string>();
  const userId = parseInt(id || "0");
  const dispatch = useDispatch();

  const characters = useSelector((store: AppStore) => store.characters);
  const character = characters.find((character) => character.id == userId);

  const handleDelete = () => {
    const newCharacters = [...characters].filter((el) => el.id != userId);
    dispatch(addCharacters(newCharacters));
  };

  const filterCharacters = (charactersToFilter: RickAndMortyDTO[]) =>
    charactersToFilter.filter((p) => p.id !== character?.id);

  const addComment = () => {
    if (comment) {
      const newCharacter = { ...character };

      newCharacter.comments = [...(newCharacter?.comments || []), comment];
      const filtered = [...filterCharacters(characters), newCharacter];
      dispatch(addCharacters(filtered));
      setComment("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  useEffect(() => {
    setActiveCharacter(character);
  }, [character]);

  const verifyCharacter = () => {
    if (character) {
      return (
        <>
          <div className=" px-10 py-5 w-full h-full">
            <div className="flex flex-col">
              <div className="w-full flex flex-col pb-5">
                <div className="relative w-[75px] h-[75x] ">
                  <img
                    className="rounded-full"
                    src={character.image}
                    alt={character.name}
                  />
                  <div className="absolute  bottom-[7px] right-[7px]">
                    <FaHeart
                      className="self-center w-[18px] h-[15.36px] text-blue-500 bg-white"
                      size={24}
                      color={character.favorite ? "#63D838" : "#EEE3FF"}
                    />
                  </div>
                  <Link to={"/"}>
                    <div
                      onClick={handleDelete}
                      className="hover:cursor-pointer"
                    >
                      <FaRemoveFormat
                        className="self-center w-[18px] h-[15.36px] text-blue-500 bg-white"
                        size={24}
                        color={"#F00"}
                      />
                    </div>
                  </Link>
                </div>
                <p className="w-327 h-[32px] text-2xl leading-8 font-bold font-primary-100 font-normal tracking-normal text-gray-900 flex-none order-0 flex-grow-0 text-left">
                  {character.name}
                </p>
              </div>
              <div>
                <div className="border-t border-primary-100 border-1  border-opacity-50 flex flex-col w-full py-3">
                  <p className="w-50 h-21 text-base leading-6 font-semibold text-color-dgray font-normal text-cool-gray-900 flex-none order-0 flex-grow-0 text-left">
                    Specie
                  </p>
                  <p className="w-37 h-21 text-base leading-6 font-medium  font-normal text-cool-gray-500 flex-none order-1 flex-grow-0 text-primary-100  text-left">
                    {character.species}
                  </p>
                </div>
                <div className="border-t border-primary-100 border-1  border-opacity-50 flex flex-col w-full py-3">
                  <p className="w-50 h-21 text-base leading-6 font-semibold text-color-dgray font-normal text-cool-gray-900 flex-none order-0 flex-grow-0 text-left">
                    Status
                  </p>
                  <p className="w-37 h-21 text-base leading-6 font-medium  font-normal text-cool-gray-500 flex-none order-1 flex-grow-0 text-primary-100  text-left">
                    {character.status}
                  </p>
                </div>
                <div className="border-t border-primary-100 border-1  border-opacity-50 flex flex-col w-full py-3">
                  <p className="w-50 h-21 text-base leading-6 font-semibold text-color-dgray font-normal text-cool-gray-900 flex-none order-0 flex-grow-0 text-left">
                    Gender
                  </p>
                  <p className="w-37 h-21 text-base leading-6 font-medium  font-normal text-cool-gray-500 flex-none order-1 flex-grow-0 text-primary-100  text-left">
                    {character.gender}
                  </p>
                </div>

                <div className="border-t border-primary-100 border-1  border-opacity-50 flex flex-col w-full py-3">
                  <p className="w-50 h-21 text-base leading-6 font-semibold text-color-dgray font-normal text-cool-gray-900 flex-none order-0 flex-grow-0 text-left">
                    Comments
                  </p>
                  <div className="flex flex-col gap-2">
                    {character.comments.map((comment, index) => (
                      <p
                        key={index}
                        className="w-37 h-21 text-base leading-6 font-medium  font-normal text-cool-gray-500 flex-none order-1 flex-grow-0 text-primary-100  text-left"
                      >
                        {comment}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="border-t border-primary-100 border-1  border-opacity-50 flex flex-col w-full py-3">
                  <textarea
                    value={comment}
                    onChange={(e) => handleChange(e)}
                    className="border border-gray-300 p-4 text-primary-100"
                    placeholder="Escribe tu texto aquí..."
                  />
                  <button onClick={addComment}>Comment</button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      <Navigate to="/" />;
    }
  };

  return <>{verifyCharacter()}</>;
};

export default CharacterDetail;
