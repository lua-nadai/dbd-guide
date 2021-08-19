import React, {Component} from 'react';

import './App.css';

import ApiDbd from './api/api.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';


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
        <Navbar/>
        <Footer/>
      </>
    );
  };
}

export default App;
