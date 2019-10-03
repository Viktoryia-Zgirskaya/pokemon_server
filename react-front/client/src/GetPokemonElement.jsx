import React from "react";
import GetPokemonInfo from "./GetPokemonInfo";
import ReactDOM from 'react-dom';

class GetPokemonElement extends React.Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        if (this.id == 0) {
            this.className = "elem1";
        } else {
            this.className = "elem";
        }
        this.name = props.name;
        this.url = props.url;
        
    }


    showPokemonInfo = e => {
      const name = this.name;
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      ReactDOM.render(<GetPokemonInfo name={name} url={url} />, document.getElementById("pinfo"));
    };
  

  render() {
      
    return (
      <div onClick={this.showPokemonInfo} className={this.className} id={this.id}>
        {this.name} 
      </div>
    );
  }
}

export default GetPokemonElement;
