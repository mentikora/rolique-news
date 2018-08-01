import React from 'react';
import './styles.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default () => (
  <Card className='welcome'>
    <CardContent>
      <Typography 
        component='p'
        gutterBottom
        className='welcome__text-hello'
      >
        Hello-hello!
      </Typography>
      <Typography
        component='h1'
        gutterBottom
        variant='headline'
        className='welcome__heading'
      >
        What a productive month we had, huh? Let's rewind the calendar and see what we were up to!
      </Typography>
      <Typography
        component='p'
        className='welcome__text-reader'
      >
        (4-min-read for a slow-reader)
      </Typography>
    </CardContent>
  </Card>
)
