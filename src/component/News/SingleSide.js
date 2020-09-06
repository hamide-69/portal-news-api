import React from 'react'
import './App.css';

const SingleSide=( {item}) => (

    <div className="divider1">
        <a href={item.url} target="_blank">
        <div className="section"> 
            <h5>{item.source.name}</h5>
            <p>{item.title}</p>
        </div>

        </a>
      
    </div>

);

export default SingleSide;