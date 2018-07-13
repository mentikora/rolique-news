import React, { Component } from 'react';
import './styles.css';
import Header from '../header';
import Footer from '../footer';
import Welcome from '../welcome';
import News from '../news';
import Vacancies from '../vacancies';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <main className='main'>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Welcome />
            </Grid>
          </Grid>
          <Grid container spacing={16}>
            <Grid item xs={12} md={9}>
              <News />
            </Grid>
            <Grid item xs={12} md={3}>
              <Vacancies />
            </Grid>
          </Grid>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
