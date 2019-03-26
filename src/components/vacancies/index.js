import React, { Component } from 'react';
import './styles.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import * as contentful from 'contentful';

const client = contentful.createClient({
  space: 'csc8avj2n586',
  accessToken: '5378a38f7ea0188752654c779c59c42b3fdaab8e0e7b64e5deba662856f9285a'
});

class Vacancies extends Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    client.getEntries({content_type: 'vacancies'})
      .then((response) => this.setState({
        vacancies: response.items[0].fields.vacanciesList
      }))
      .catch(console.error)
  }

  render() {
    return(
      <Card className="vacancies">
        <CardContent className="vacancies__content">
          <Typography 
            component='h2' 
            variant='headline' 
            gutterBottom  
            color='inherit'
          >
            Актуальні вакансії
          </Typography>
          <Typography 
            component='p' 
            color='inherit'
          >
            Будуй команду, якій довіряєш. рекомендуй своїх друзів та знайомих.
          </Typography>
          <Typography 
            component='div' 
            color='inherit'
          >
            <ul className="vacancies-list">
              {
                this.state.vacancies && this.state.vacancies.map((vacancy, i) => (
                  <li key={i}>
                    {vacancy}
                  </li>
                ))
              }
            </ul>
          </Typography>
          {/* <Typography 
            component='p' 
            color='inherit'
          >
            PS. Feel free to refer your friends and acquaintance to Tanya, Stepan and Albina.
          </Typography> */}
        </CardContent>
      </Card>
    )
  }
}

export default Vacancies;
