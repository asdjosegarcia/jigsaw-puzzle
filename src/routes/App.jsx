import React, { useEffect } from "react";
// import StartButton from "@components/buttons/StartButton.jsx"
import Jigsaw from "@containers/Jigsaw.jsx";
import "@styles/App.scss";
import "normalize.css";
import { FuncionProvider } from "../context/context.jsx";
import { jigsawMaps } from "../utils/maps.jsx";

// import img from "@img/background/lvl1-background.jpg"
const img=jigsawMaps.lvl1.imgBackgroundUrl
// console.log({img1,img})


const App = () => {

  const style={
    backgroundImage: `url(${img})`
    // backgroundImage: img

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
