import React, { Component } from 'react';
import './styles.css';
import Header from '../header';
import Footer from '../footer';
import Welcome from '../welcome';
import News from '../news';
import Vacancies from '../vacancies';
import Bithdays from '../birthday';
import Grid from '@material-ui/core/Grid';

const contentful = require('contentful');
const client = contentful.createClient({
  space: 'csc8avj2n586',
  accessToken: '5378a38f7ea0188752654c779c59c42b3fdaab8e0e7b64e5deba662856f9285a'
});

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    client.getAssets()
      .then((response) => this.setState(
        {
          response: response
        }
      ))
      .catch(console.error)
  }

  render() {
    return (
      <div className='App'>
        {
          !this.state ? '' : console.log(this.state.response)
        }
        <Header />
        <main className='main'>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Welcome />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={12} md={9}>
              <News />
            </Grid>
            <Grid item xs={12} md={3}>
              <Vacancies />
              <Bithdays />
            </Grid>
          </Grid>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
