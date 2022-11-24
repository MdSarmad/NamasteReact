import React from 'react';
import ReactDOM from 'react-dom/client';


// Creating <di><h1>Namaste React</h1><p>By: Akshay Saini</p></di> using React.createElement

const header = React.createElement("h1", { className: 'header' }, 'Namaste React');
const p = React.createElement("p", {}, 'By: Akshay Saini')
const container = React.createElement("div", { className: 'container' }, header, p)

const root = ReactDOM.createRoot(document.getElementById('root'));

// rendering container
root.render(container);