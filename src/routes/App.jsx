import React from "react";
// import StartButton from "@components/buttons/StartButton.jsx"
import Jigsaw from "@containers/Jigsaw.jsx";
import "@styles/App.scss";
import "normalize.css";
import { FuncionProvider } from "../context/context.jsx";

const App = () => {
  return (
    <FuncionProvider>
      <div className="app-background">
        <Jigsaw />
      </div>
    </FuncionProvider>
  );
};
export default App;
