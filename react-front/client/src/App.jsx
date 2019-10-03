import React from 'react';

import './App.css';

import GetAllPokemons from './GetAllPokemons' ;





class App extends React.Component{
  constructor(props){
    super(props)
}
  render(){
      return (
          <div className="test_d">
            <div className ="test_d_2">
                <h1>Pokemons</h1>
                <h2 className="elem1">Pokemons List</h2>
                <div className="poInfo"><GetAllPokemons /><div id="pinfo"></div></div>
                
            </div>
          </div>
      )
  }
}

export default App;
