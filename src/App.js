import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Game from './pages/Game';
import './App.css';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}><App /></Router>, document.getElementById('root'));

class App extends Component {

  render() {
    return (
        <Route exact path={'/'} render={ <Game /> } />
    );
  }
}

export default App;