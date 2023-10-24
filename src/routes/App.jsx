import React, { useEffect } from "react";
import Jigsaw from "@containers/Jigsaw.jsx";
import "@styles/App.scss";
import "normalize.css";
import { FuncionProvider } from "../context/context.jsx";
import { jigsawMaps } from "../utils/maps.jsx";

const img = jigsawMaps.lvl1.imgBackgroundUrl


const App = () => {
  const style = {
    backgroundImage: `url(${img})`
  }

  return (
    <FuncionProvider>
      <div style={style} className="app-background">
        <Jigsaw />
      </div>
    </FuncionProvider>
  );
};
export default App;
