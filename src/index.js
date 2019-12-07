import React from "react";
import ReactDom from 'react-dom';

const App = () => {
    return <h1>Hello World!!</h1>;
};

//React es a base de componentes para convertir el app a componente se debe hacer <App />
ReactDom.render(<App />, document.getElementById("root"));