// DOCUMENT OBJECT MODEL = DOM
import ReactDOM from "react-dom";
// ADDING REACT TO ENABLE JSX USAGE
import React from "react";
// ADDING CSS
import './index.css'


const element = document.getElementById('root');
const tag = <strong>Hello, React!</strong>
ReactDOM.render(
    <div>
        {tag}
    </div>,
    element);