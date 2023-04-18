import { Provider } from "react-redux";
import "./App.css";
import { LayoutContainer } from "./infra/styled-components/layout.component";
import store from "./infra/redux/store";
import Characters from "./infra/pages/Characters/Characters";
import CharacterDetail from "./infra/pages/Characters/components/Caharacter-detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <LayoutContainer>
        <BrowserRouter>
          <Characters />
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/:id" element={<CharacterDetail />} />
          </Routes>
        </BrowserRouter>
      </LayoutContainer>
    </Provider>
  );
}

export default App;
