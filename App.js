import React, {Component} from 'react';
import './App.css';
import Pass from './Pass';

class App extends Component {

  render(){
    return (
      <div className="App">
        <form>
          <Pass />
          <input type="submit" value="Generate"/>
        </form>
      </div>
    );
  }
}

export default App;
