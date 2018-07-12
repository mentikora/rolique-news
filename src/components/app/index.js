import React, { Component } from 'react';
import './styles.css';

import Header from '../header';
import Footer from '../footer';
import News from '../news';

import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className='App'>

        {/* header */}
        <Header />

        {/* main content wrapper */}
        <main className='main'>

          <Grid container spacing={16}>

            {/* news wrapper */}
            <Grid item md={9}>
              <News />
            </Grid>

            {/* else */}
            <Grid item md={3}>
              right side col
            </Grid>

          </Grid>

        </main>

        {/* footer */}
        <Footer />
        
      </div>
    );
  }
}

export default App;
