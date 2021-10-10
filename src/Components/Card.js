import React from 'react'
import {useState} from 'react';
function Card(props) {

  const [text1,setText1] = useState("");
    return (
      <div class="col-md-4">
        <div class="product-item">
          <a href="#">
            <img width="1200" src={props.src} alt="" />
          </a>
          <div class="down-content">
            <a href="#">
              <h4>{props.name}</h4>
            </a>
            <h6>{props.year}</h6>
            <p>{props.description}</p>
            <p className="bold">{props.quality}</p>
            <p className="bold">{text1}</p>
          </div>
        </div>
      </div>
    );
}

export default Card
