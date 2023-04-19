import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../../redux/store";
import { useState } from "react";
import { addCharacters } from "../../../redux/states/characters";
import { RickAndMortyDTO } from "../../../../domain/rick-and-morty/dtos";

export interface CommentInterface {
  character: RickAndMortyDTO;
}

const Comment: React.FC<CommentInterface> = ({ character }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState<string>();
  const characters = useSelector((store: AppStore) => store.characters);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const addComment = () => {
    if (comment) {
      const newCharacter = { ...character };

      newCharacter.comments = [...(newCharacter?.comments || []), comment];
      const filtered = [...filterCharacters(characters), newCharacter];
      dispatch(addCharacters(filtered));
      setComment("");
    }
  };

  const filterCharacters = (charactersToFilter: RickAndMortyDTO[]) =>
    charactersToFilter.filter((p) => p.id !== character?.id);

  return (
    <>
      <div className="flex flex-col w-full p-3 gap-5">
        <div className="flex items-center bg-primary-100 rounded-lg h-[100px] p-2 gap-2">
          <textarea
            onChange={(e) => handleChange(e)}
            value={comment}
            placeholder="Enter your comment..."
            className="resize-none bg-transparent w-full focus:outline-none text-gray-700 text-base leading-6 font-medium"
          />
        </div>

        <button className="bg-primary-600" onClick={addComment}>
          Comment
        </button>
      </div>
    </>
  );
};

export default Comment;
