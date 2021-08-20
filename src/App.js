import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import ApiDbd from './api/api.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import CharacterList from './components/CharacterList.js';



class App extends Component {
  state = {
    survivalList: [],
    killerList: [],
    perkList: [],

    filteredSurvival: [],
    filteredKiller: [],
    filteredPerk: []
  }

  componentDidMount() {
    ApiDbd.survival().then((result) => {
      this.setState({
        survivalList: result.data,
        filteredSurvival: result.data
      })
    });
    
    ApiDbd.killer().then((result) => {
      this.setState({
        killerList: result.data,
        filteredKiller: result.data
      })
    });

    ApiDbd.perks().then((result) => {
      this.setState({
        perkList: result.data,
        filteredPerk: result.data
      })
    });
  }

  survivalFilter = (inputSearch) => {
    const filtered = this.state.survivalList.filter((character) => {
      return character.name.toLowerCase().includes(inputSearch.toLowerCase())
    })

    this.setState({
      filteredSurvival: filtered
    })
  }

  killerFilter = (inputSearch) => {
    const filtered = this.state.killerList.filter((character) => {
      return character.name.toLowerCase().includes(inputSearch.toLowerCase())
    })

    this.setState({
      filteredKiller: filtered
    })
  }

  
  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route 
            path = '/survivors'
            render={(props) => 
              <CharacterList {...props} 
                characters={this.state.filteredSurvival}
                characterType={'/survivors'} 
                characterName={'Survivors'} 
                characterFilter={this.survivalFilter}
              />
            }
          />
          <Route
            path='/killers'
            render={(props) => 
              <CharacterList {...props} 
                characters={this.state.filteredKiller}
                characterType={'/killers'} 
                characterName={'Killers'}
                characterFilter={this.killerFilter}
              />
            }
          />
        </Switch>
        <Footer/>
      </>
    );
  };
}

export default App;
