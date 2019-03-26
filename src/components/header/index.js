import React from 'react';
import Logo from '../logo';
import Typography from '@material-ui/core/Typography';
import './styles.css';

export default () => (
  <header className='header'>
    <Logo />
    <Typography 
      component='p'
      className="moto"
    >
      - це life, як не крути :)
    </Typography>
  </header>
)
