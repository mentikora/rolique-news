import React from 'react';
import './styles.css';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const news = [
  {
    img: 'https://d1u5p3l4wpay3k.cloudfront.net/allstars_gamepedia/2/2b/Braxis_Outpost.jpg?version=baa4f31d2d93b98aa21282b990ba74ec',
    title: 'Epic Fifa masters combat',
    text: 'Roman Malets, aka "The first of Rolique House, the invincible Master of FIFA, King of the Playroom temple and true Adept of Console" obviosly, took the first place, leaving Volodymyr Paskiv rest on the second place with a bitter desire of revenge. It was spectacular!'
  },
  {
    img: 'https://d1u5p3l4wpay3k.cloudfront.net/allstars_gamepedia/2/2b/Braxis_Outpost.jpg?version=baa4f31d2d93b98aa21282b990ba74ec',
    title: 'Knowledge-sharing / Knowledge-using ',
    text: 'Vlad Bilyi slayed the Dev Challenge taking the first place, meanwhile, Anton Yatsenyuk shed the light of knowledge all around the Chernivtsi JS. Guys, you\'re awesome and we\'re proud to have you amoung us!'
  },
  {
    img: 'https://d1u5p3l4wpay3k.cloudfront.net/allstars_gamepedia/2/2b/Braxis_Outpost.jpg?version=baa4f31d2d93b98aa21282b990ba74ec',
    title: 'Open vacancies at Rolique',
    text: 'text text text'
  }
]

export default () => (
  <Grid container spacing={16}>
    {
      news.map((item, key) => <Grid item md={6} xs={12} key={key}>
          <Card className='news-item'>
            <CardMedia
              className='news-item__image'
              image={item.img}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography 
                gutterBottom 
                variant='headline' 
                component='h2'
              >
                {item.title}
              </Typography>
              <Typography component='p'>
                {item.text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )
    }
  </Grid>
)