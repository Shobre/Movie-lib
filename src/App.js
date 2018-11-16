import React, { Component } from 'react';
import './App.css';
import Main from './Main'

class App extends Component {

  render() {
    return <div className="App">
        <header className="App-header">
        <img src={"https://png2.kisspng.com/sh/b3314051ab1bb7f1a65431e1929d9b92/L0KzQYm3UsA2N6ltj5H0aYP2gLBuTgBqa6RmiuY2cHjyhLE0kCR2bJp0ReV5YYLufLa0lQJidqR1eeRuboSwcrLqiBdzd6ZzfJ8AYUe7SYGAgsc1bJY3TpCBNEO0QYO3UcE2OWg9TaICNEe3R4mATwBvbz==/kisspng-picsart-photo-studio-sparkle-transparent-background-5a78907b74de26.6431120115178507474787.png"} className="App-logo" alt="" />
        </header>
        <Main/>
      </div>;
  }
}

export default App;
