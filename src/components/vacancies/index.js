import React from 'react';
import './styles.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const vacancies = [
  'NodeJS Middle',
  'NodeJS Junior',
  'Angular 2 Middle',
  'Angular 2 Junior',
  'Team Lead (Full-stack, Node.js/Angular)',
  'Full-stack (PHP/Angular1) Middle/Senior',
  'Business Analyst',
  'Project Coordinator',
  'PM Middle',
  'QA Middle'
]

export default () => (
  <Card className="vacancies">
    <CardContent className="vacancies__content">
      <Typography component='h2' variant='headline' gutterBottom  color='inherit'>
        Open vacancies at Rolique
      </Typography>
      <Typography component='p' color='inherit'>
        This summer's gonna be super hot. Maybe even as hot as the open vacancies at Rolique:
      </Typography>
      <Typography component='div' color='inherit'>
        <ul className="vacancies-list">
          {
            vacancies.map((el, key) => (
              <li key={key}>{el}</li>
            ))
          }
        </ul>
      </Typography>
      <Typography component='p' color='inherit'>
        PS. Feel free to refer your friends and acquaintance to Tanya, Stepan and Albina.
      </Typography>
    </CardContent>
  </Card>
)
