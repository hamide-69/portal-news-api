import React, { Component } from 'react';
import NewSingle from './NewSingle';
import Error from './Error'
import axios from 'axios'


class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      News: [],
      error: false ,
    };
  }

  componentDidMount() {
    const url = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-28&sortBy=publishedAt&apiKey=1c26550750524154a898615ffe589b30`;

    axios.get(url)
    .then((response) => {
      this.setState({
        News:response.data.articles 
      })
    })

    .catch((error) => {
      this.setState({
        error:true
      })
    } );
  }

  renderItems() {
    if(!this.state.error){
    return this.state.News.map((item) => (
      <NewSingle key={item.url} item={item} />
    ));
  } else{
    return <Error />
  }
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
         
    );
  }
}

export default News;

