import React from 'react'
import {useEffect,useState} from 'react';
import Card from "./Card.js";
function Upload_text() {
    const [listItem, setListItem] = useState();

    function handleClick(event) {
        var text = document.getElementsByClassName("text");
        var description = document.getElementsByClassName("description");
        var name = document.getElementsByClassName("name");
      setListItem(
        <Card
          text=""
              description=" 'Ur really XXX. YOU XXX, go XXX yourself' "
              name="This is a message with toxicity level 10. Are you sure you want to send it?"
        />
      );
    };
    return (
      <div className="upload-container">
        <div class="col-md-12">
          <label class="labels">Text</label>
          <input type="text" class="form-control" placeholder="Enter your text here" />
        </div>
       
        <button onClick={handleClick}>Test!</button>

        <div className="container">{listItem}</div>

      </div>
    );
}

export default Upload_text
