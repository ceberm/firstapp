import React, {Component} from "react";
import ReactDom from 'react-dom';
import "./styles/styles.css"
import Header from './components/header';
import NewsList from "./components/news_list"
import JSON from './db.json';


class App extends Component {
    constructor(){
        super();
        this.state={
            news:JSON,
            message: "Mensaje mostrado"
        };
    }

    render(){
        console.log(JSON);
        return (
        <>
            <Header />
            <NewsList news = {this.state.news} message={this.state.message}/>
        </>
        );
    }
};

//React es a base de componentes para convertir el app a componente se debe hacer <App />
ReactDom.render(<App />, document.getElementById("root"));