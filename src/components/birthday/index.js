import React, { Fragment } from 'react';
import './styles.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const blist = [
  {
    date: '03.07.1988',
    person: 'Name Surname'
  }
]

export default () => (
  <Card className="birthdays">
    <CardContent>
      <Typography
        component='h2'
        variant='headline'
      >
        Birthday Boom at Rolique
      </Typography>
      <Typography
        component='p'
      >
        It seems like June's the most popular month to be born in. Get your hands ready for clapping cause this motht's kinda birthday-crazy!
      </Typography>
      <ul className="birthdays-list global-list">
        {
          blist.map((b, k) => (
            <Fragment key={k}>
              {b.date}
              <br/>
              {b.person}
            </Fragment>
          ))
        }    
      </ul>
    </CardContent>
  </Card>
)
