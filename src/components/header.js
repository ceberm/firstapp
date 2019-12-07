import React, {Component} from "react";

class Header extends Component{

    state = {
        title: "My Title",
        keywords: "",
        count: 0
    }

    hello = () => {
        console.log("I was clicked")
    }

    inputChange = e => {
        console.log(e);
        this.setState({keywords: e.target.value});
    }
    buttonChange () {
        console.log(this.state.count);
        this.setState((state, props) => ({
            count: state.count+1
        }));
    }
    //El componente obtiene mas funciones que con el componente convencional
    //Hay que escoger si va a tener estado o sin estado
    render(){
        return (
            <header>
                <div className="logo" onClick={this.hello}>Logo</div>
                <input onChange={e => this.inputChange(e)}></input><br/>
                <div>{this.state.count}</div>
                <button onClick={e => this.buttonChange(e)}>Count ++</button>
            </header>
        )
    }//e es el evento de la funcion
}

/*
const getYear = () =>{
    const newDate = new Date; 
    return newDate.getFullYear();
};

const Header = () =>{
return <div>This is a header component {getYear()}</div>
};
*/
export default Header