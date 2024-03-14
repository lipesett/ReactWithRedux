// DOCUMENT OBJECT MODEL = DOM
import ReactDOM from "react-dom";
// ADDING REACT TO ENABLE JSX USAGE
import React from "react";
// ADDING CSS
import './index.css';
// ADDING COMPONENTS
import First from "./components/basics/First";
import WithParams from "./components/basics/WithParams";


const element = document.getElementById('root');
ReactDOM.render(
    <div>
        <First></First>
        <WithParams
            title="student situation"
            student="James Smaug"
            note={9.1}>
        </WithParams>
    </div>,
    element);