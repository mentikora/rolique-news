import React, { Component } from 'react';
import './styles.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import * as contentful from 'contentful';

const client = contentful.createClient({
  space: 'csc8avj2n586',
  accessToken: '5378a38f7ea0188752654c779c59c42b3fdaab8e0e7b64e5deba662856f9285a'
});

class Birthdays extends Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    client.getEntries({content_type: 'birthdays'})
      .then((response) => this.setState({
        birthdays: response.items
      }))
      .catch(console.error)
  }
  render() {
    return(
      <Card className="birthdays">
        <CardContent>
          <Typography
            component='h2'
            variant='headline'
            gutterBottom
          >
            Birthday Boom at Rolique
          </Typography>
          <Typography
            component='p'
          >
            It seems like June's the most popular month to be born in. Get your hands ready for clapping cause this motht's kinda birthday-crazy!
          </Typography>
          <Typography
            component='div'
          >
            <ul className="birthdays-list global-list">
              {
                this.state.birthdays && this.state.birthdays.map((item, i) => (
                  <li key={i}>
                    {item.fields.date} {item.fields.name} {item.fields.surname}
                  </li>
                ))
              }
            </ul>
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default Birthdays;
