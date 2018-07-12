import React, { Component } from 'react';
import './styles.css';

import Header from '../header';
import Footer from '../footer';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* header */}
        <Header />

        {/* main content wrapper */}
        <main className="main">

        </main>

        {/* footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
