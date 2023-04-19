import { useDispatch, useSelector } from "react-redux";
import { RickAndMortyDTO } from "../../../../domain/rick-and-morty/dtos";
import { AppStore } from "../../../redux/store";
import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { addCharacters } from "../../../redux/states/characters";
import { Link } from "react-router-dom";
import Comment from "./Comment";

export interface CharacterDetailInterface {}

const CharacterDetail: React.FC<CharacterDetailInterface> = ({}) => {
  const { id } = useParams();
  const [selectedPeople, setActiveCharacter] = useState<RickAndMortyDTO>();
  const userId = parseInt(id || "0");
  const dispatch = useDispatch();

  const characters = useSelector((store: AppStore) => store.characters);
  const character = characters.find((character) => character.id == userId);

  const handleDelete = () => {
    const newCharacters = [...characters].filter((el) => el.id != userId);
    dispatch(addCharacters(newCharacters));
  };

  useEffect(() => {
    setActiveCharacter(character);
  }, [character]);

  const verifyCharacter = () => {
    if (character) {
      return (
        <>
          <div
            className={`character-detail selected bg-white px-10 py-5 w-full h-full`}
          >
            <div className="flex flex-col">
              <div className="w-full flex flex-col pb-5 gap-2">
                <div title="Back" className=" w-[30px] h-[30px] ">
                  <Link to={"/"}>
                    <div className="flex justify-center rounded-lg text-red self-center text-primary-600 w-[38px] h-[35px] hover:cursor-pointer  hover:bg-gray-300 md:hidden">
                      <AiOutlineArrowLeft
                        className="self-center"
                        color={"#5A3696"}
                        size={20}
                      />
                    </div>
                  </Link>
                </div>
                <div className="relative w-[75px] h-[75x] ">
                  <img
                    className="rounded-full"
                    src={character.image}
                    alt={character.name}
                  />

                  <div className="flex justify-center self-center  absolute  bottom-[-5px] right-[-5px] w-[32px] h-[32px] rounded-full  bg-white">
                    <div className="flex justify-center self-center  w-[18px] h-[15.36px] ">
                      <FaHeart
                        className="self-center "
                        size={24}
                        color={character.favorite ? "#63D838" : "#EEE3FF"}
                      />
                    </div>
                  </div>
                </div>

                <div title="Delete" className=" w-[30px] h-[30px] ">
                  <Link to={"/"}>
                    <div
                      onClick={handleDelete}
                      className="flex justify-center rounded-lg text-red self-center text-primary-600 w-[38px] h-[35px] hover:cursor-pointer  hover:bg-gray-300"
                    >
                      <BsTrash
                        className="self-center"
                        color={"#F00"}
                        size={20}
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
                    {character.comments.length ? (
                      character.comments.map((comment, index) => (
                        <p
                          key={index}
                          className="w-37 h-21 text-base leading-6 font-medium  font-normal text-cool-gray-500 flex-none order-1 flex-grow-0 text-primary-100  text-left"
                        >
                          {comment}
                        </p>
                      ))
                    ) : (
                      <p
                        key="no-comment"
                        className="w-37 h-21 text-base leading-6 font-medium  font-normal text-cool-gray-500 flex-none order-1 flex-grow-0 text-primary-100  text-left"
                      >
                        No comments yet
                      </p>
                    )}
                  </div>
                </div>

                <Comment character={character} />
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
