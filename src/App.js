import React, {Component} from 'react';
import CharacterCard from './components/CharacterCard.js'
import ApiDbd from './api/api.js'

import './App.css';


class App extends Component {
  state = {
    survivalList: [],
    killerList: [],
    perkList: []
  }

  componentDidMount() {
    ApiDbd.survival().then((result) => {
      this.setState({
        survivalList: result.data
      })
    });
    
    ApiDbd.killer().then((result) => {
      this.setState({
        killerList: result.data
      })
    });

    ApiDbd.perks().then((result) => {
      this.setState({
        perkList: result.data
      })
    });
  }
  
  render() {
    return (
      <>
        <div className="App">
          <h1>Oi</h1>
        </div>
      </>
    );
  };
}

export default App;
