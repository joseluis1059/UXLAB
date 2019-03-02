import React, { Component } from 'react';
import './App.css';
import ClassTable from './ClassTable';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <ClassTable/>
        </header>
      </div>
    );
  }
}

export default App;
