import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./routes/App.jsx"

if (module.hot) { //si el modulo en en caliente de server pide algo se acepta
    module.hot.accept();
}

createRoot(document.querySelector('#rompecabezas')).render(<App />);



