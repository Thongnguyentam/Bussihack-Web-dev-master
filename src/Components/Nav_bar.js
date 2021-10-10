import React, { Component } from 'react';
import {useLocation} from 'react-router-dom'
import {useEffect} from 'react';
function Nav_bar() {
    return (
      <header class="">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand" href="/home">
              <h2>
                Cyber <em>Fence</em>
              </h2>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/home">
                    Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/images">
                    Images Detection
                  </a>
                </li>
                            <li class="nav-item">
                              <a class="nav-link" href="/text">
                                Text Detection
                              </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/account">
                                    Your account
                              </a>
                            </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
}
export default Nav_bar;