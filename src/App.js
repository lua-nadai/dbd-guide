import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import ApiDbd from './api/api.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import CharacterList from './components/CharacterList.js';
import PerkList from './components/PerkList';
import SurvivalInfo from './components/SurvivalInfo.js';
import KillerInfo from './components/KillerInfo';
import HomeInfo from './components/HomeInfo.js'


class App extends Component {
  state = {
    survivalList: [],
    killerList: [],
    perkList: [],

    filteredSurvival: [],
    filteredKiller: [],
    filteredPerk: []
  }

  componentDidMount = async () => {

    const survival = await ApiDbd.survival()
    const killer = await ApiDbd.killer()
    const perks = await ApiDbd.perks()

    this.setState({
      survivalList: survival.data,
      filteredSurvival: survival.data,

      killerList: killer.data,
      filteredKiller: killer.data,

      perkList: perks.data,
      filteredPerk: perks.data

    })
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

  perkFilter = (inputSearch) => {
    const filtered = this.state.perkList.filter((character) => {
      return character.perk_name.toLowerCase().includes(inputSearch.toLowerCase())
    })

    this.setState({
      filteredPerk: filtered
    })
  }


  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route
            exact
            path='/'
            component={HomeInfo}
          />
          <Route
            exact
            path='/survivors'
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
            exact
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
          <Route
            path='/perks'
            render={(props) =>
              <PerkList {...props}
                perks={this.state.filteredPerk}
                characterFilter={this.perkFilter}
              />
            }
          />
          <Route
            path='/survivors/:_id'
            render={(props) =>
              <SurvivalInfo {...props} />
            }
          />
          <Route
            path='/killers/:_id'
            render={(props)=> 
            <KillerInfo {...props} />
            }
          />

        </Switch>
        <Footer/>
      </>
    );
  };
}

export default App;
