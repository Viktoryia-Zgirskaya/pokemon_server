import React from "react";
import "./App.css";
import GetPokemonElement from './GetPokemonElement';



class ShowAllPokemons extends React.Component {
    constructor(props) {
        super(props);
        this.status = props.status;
        this.data = props.data;
    }

    render() {
      if (this.status) {
        return (
            <div id="pList">
                {this.data.map((pokemon_obj, index) => (
                    <GetPokemonElement
                        id={index}
                        key={index}
                        name={pokemon_obj.name}
                        url={pokemon_obj.url}
                    />
                    ))}
            </div> 
          );
      } else {
        return (
            <div id="pList"></div> 
        );
      }
    }

}

export default ShowAllPokemons;