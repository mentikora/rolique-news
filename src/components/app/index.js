import React, { Component } from 'react';
import './styles.css';
import Header from '../header';
import Footer from '../footer';
import News from '../news';
import Vacancies from '../vacancies';
import Bithdays from '../birthday';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <main className='main'>
          <Grid container spacing={16}>
            <Grid item xs={12} md={6}>
              <Vacancies />
            </Grid>
            <Grid item xs={12} md={6}>
              <Bithdays />
            </Grid>
            <Grid item xs={12} md={12}>
              <News />
            </Grid>
          </Grid>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
