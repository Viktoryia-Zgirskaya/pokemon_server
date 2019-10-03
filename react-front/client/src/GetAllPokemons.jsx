import React from "react";
import "./App.css";
import ShowAllPokemons from './ShowAllPokemons';


class GetAllPokemons extends React.Component {
    constructor(props) {
        super(props);
        this.url = "https://pokeapi.co/api/v2/pokemon/";
        this.state = { data: [], status: false };
    }

    async componentDidMount() {	
      let response = await fetch(this.url);
          if (response.ok) {
            let json = await response.json();
            let new_url = this.url + "?limit=" + json.count;
            let new_responce = await fetch(new_url);
            if (new_responce.ok) {
              
              let new_json = await new_responce.json();
              let data = new_json.results;
              
              this.setState({ data: data, status: true });
            } 
          }
        
      }

   

    render() {
      if (this.state.status) {
        return <ShowAllPokemons status={this.state.status} data={this.state.data} />;
      } else {
        return (<div className = "elem1">Wait Please</div>);
      }
      
  }
 
}

export default GetAllPokemons;
