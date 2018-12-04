import React, { Component } from 'react';
import './styles.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import * as contentful from 'contentful';
import defaultImage from './images/default.jpeg';
import {  MarkdownPreview  } from 'react-marked-markdown';

const client = contentful.createClient({
  space: 'csc8avj2n586',
  accessToken: '5378a38f7ea0188752654c779c59c42b3fdaab8e0e7b64e5deba662856f9285a'
});


class News extends Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    client.getEntries({content_type: 'news'})
      .then((response) => this.setState({
        news: response.items
      }))
      .catch(console.error)
  }

  render() {
    return(
      <Grid container spacing={16}>
        {
          this.state.news && this.state.news.map((item, i) => <Grid item md={6} xs={12} key={i}>
              <Card className='news-item'>
                <CardMedia
                  className='news-item__image'
                  image={item.fields.image ? item.fields.image.fields.file.url : defaultImage}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography 
                    gutterBottom 
                    variant='headline' 
                    component='h2'
                  >
                    {item.fields.title}
                  </Typography>
                  <Typography component='div'>
                    <MarkdownPreview className="product-view__text" value={item.fields.text}/>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        }
      </Grid>
    )
  }
}

export default News;