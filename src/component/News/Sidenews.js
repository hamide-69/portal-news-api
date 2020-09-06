import React, { Component } from 'react';
import axios from 'axios'
import SingleSide from './SingleSide'
import Error from './Error'


class Sidenews extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Sidenews: [],
        error: false ,
      };
    }
  
    componentDidMount() {
      const url = `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1c26550750524154a898615ffe589b30`;

      axios.get(url)
      .then((response) => {
        this.setState({
          Sidenews:response.data.articles 
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
      return this.state.Sidenews.map((item) => (
        <SingleSide key={item.url} item={item} />
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
  
  export default Sidenews;
  