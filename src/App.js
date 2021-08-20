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
        <Navbar/>
        <Switch>
          <Route 
            path = '/survivors'
            render={(props) => <CharacterList {...props} characters={this.state.survivalList} characterType={'/survivors'} characterName={'Survivors'} survivalFilter={this.survivalFilter}/>}
          />
          <Route
            path='/killers'
            render={(props) => <CharacterList {...props} characters={this.state.killerList} characterType={'/killers'} characterName={'Killers'}/>}
          />
        </Switch>
        <Footer/>
      </>
    );
  };
}

export default App;
