import { render } from "@testing-library/react";
import Characters from "./Characters";
import store from "../../../infra/redux/store";
import { Provider } from "react-redux";
import { addCharacters } from "../../redux/states/characters";

describe("Character component", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <Characters />
    </Provider>
  );

  test("asdasd", async () => {
    // expect(getByText(/STARRED CHARACTERS/i)).toBeInTheDocument();
    // expect(getByText(/CHARACTERS/i)).toBeInTheDocument();
    store.dispatch(
      addCharacters([
        {
          name: "Rick",
          gender: "male",
          species: "Human",
          favorite: true,
        },
        {
          name: "Morty",
          gender: "male",
          species: "Human",
          favorite: true,
        },
      ])
    );

    console.log(getByText(/STARRED CHARACTERS/i).innerHTML);
  });
});
