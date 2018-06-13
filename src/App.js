import React, { Component } from 'react';
import './styles/App.css';
import Book from './components/containers/Book'
import Author from './components/containers/Author'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Author-div">
          <Author />
        </div>
        <div className="Book-list">
          <Book />
        </div>
      </div>
    );
  }
}

// did not seperate the toggle function into a seperate component,
// it seemed better to get all the books from one component

export default App;
