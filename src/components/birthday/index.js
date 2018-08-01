import React, { Component } from 'react';
import './styles.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import * as contentful from 'contentful';
import noPartyImage from './no-party.gif';

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
          { this.state.birthdays && this.state.birthdays.length ? <Typography component='p'>
              Get your hands ready for clapping cause this motht's kinda birthday-crazy!
            </Typography> : null
          }
          <Typography component='div'>
            <ul className="birthdays-list global-list">
              {
                this.state.birthdays && this.state.birthdays.map((item, i) => (
                  <li key={i}>
                    {item.fields.date} {item.fields.name} {item.fields.surname}
                  </li>
                ))
              }
            </ul>
            {
              this.state.birthdays && !this.state.birthdays.length ? <div className='no-party'>
                <div className="no-party__image-wrapper">
                  <img src={noPartyImage} alt="no party for you" />
                </div>
                Congrats, comrades! Forget about the cakes and cheerful greetings. No more chocolate cakes, no braunies, no fondants. Nada. Nada
              </div> : null
            }
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default Birthdays;
