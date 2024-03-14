// DOCUMENT OBJECT MODEL = DOM
import ReactDOM from "react-dom";
// ADDING REACT TO ENABLE JSX USAGE
import React from "react";
// ADDING CSS
import './index.css';
// ADDING COMPONENTS
import First from "./components/basics/First";


const element = document.getElementById('root');
ReactDOM.render(
    <div>
        <First></First>
    </div>,
    element);