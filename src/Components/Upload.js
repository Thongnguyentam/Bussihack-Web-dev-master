import React from 'react'
import {useEffect,useState} from 'react';
import Card from "./Card.js";
function Upload() {
    const [listItem, setListItem] = useState();

    function handleClick(event) {
        var text = document.getElementsByClassName("text");
        var description = document.getElementsByClassName("description");

        var name = document.getElementsByClassName("name");
      setListItem(
        <Card
          text="Cubu"
              src="assets/images/example.png"
              name="This is a message with toxicity level 15. Are you sure you want to send it?"
        />
      );
    };
    return (
        <section class="bg-light">
            <div class="container pb-5">
                <div class="row">
                    <div className="upload-container"> 
                      <div class="col-md-12">
                          <label class="labels"><b>Image</b></label>
                          <input
                            type="file"
                            class="form-control"
                            placeholder="Address line 2"
                          />
                        </div>
                        <button onClick={handleClick}>Test!</button>
                        <div className="container">{listItem}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Upload
