import React, { useEffect, useContext } from "react";
import Jigsaw from "@containers/Jigsaw.jsx";
import "@styles/App.scss";
import "normalize.css";
import { FuncionProvider } from "../context/context.jsx";
import Background from "../containers/Background.jsx";



const App = () => {


  return (
    <FuncionProvider>
      <Background>
        <Jigsaw />
      </Background>
      {/*       <div style={style} className="app-background">
        <Jigsaw />
      </div> */}
    </FuncionProvider>
  );
};
export default App;
