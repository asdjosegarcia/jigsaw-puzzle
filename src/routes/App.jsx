import React from "react";
import StartButton from "@components/buttons/StartButton.jsx"
import jigsaw from '@containers/jigsaw.jsx'
import '@styles/app.scss'
import 'normalize.css'

const App=()=>{
   return(
    <div className="Background">
      <jigsaw>
      {/* <StartButton></StartButton> */}
      </jigsaw>
    </div>
   )
}
export default App;  