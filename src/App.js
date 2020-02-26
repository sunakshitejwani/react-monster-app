import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters :[
        {
          name: 'Frankestein',
          id: 'ID1'
        },
        {
          name: 'Zombie',
          id: 'ID2'
        },
        {
          name: 'Goblin',
          id: 'ID3'
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
