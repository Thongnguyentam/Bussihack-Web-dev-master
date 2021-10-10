import React, { Component } from 'react';
import Card from './Card.js';
import {useState,useEffect} from 'react'
import Items from './Items.js'
function Products() {
    return (
      <div class="products">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="filters">
                <ul>
                  <li class="active" data-filter="*">
                    All Products
                  </li>
                  <li data-filter=".des">Phones & Tablets</li>
                  <li data-filter=".dev">Laptops</li>
                  <li data-filter=".gra">Vehicles</li>
                  <li data-filter=".gra">Others</li>
                </ul>
              </div>
            </div>
            <div class="col-md-12">
              <div class="filters-content">
                <div class="row grid">
                  <div class="col-lg-4 col-md-4 all des">
                    <div class="product-item">
                      <a href="#">
                        <img src="assets/images/product_01.jpg" alt="" />
                      </a>
                      <div class="down-content">
                        <a href="#">
                          <h4>Iphone XS</h4>
                        </a>
                        <h6>$18.25</h6>
                        <p>
                          Lorem ipsume dolor sit amet, adipisicing elite.
                          Itaque, corporis nulla aspernatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 all dev">
                    <div class="product-item">
                      <a href="#">
                        <img src="assets/images/product_02.jpg" alt="" />
                      </a>
                      <div class="down-content">
                        <a href="#">
                          <h4>Laptop Dell xps 2000</h4>
                        </a>
                        <h6>$16.75</h6>
                        <p>
                          Lorem ipsume dolor sit amet, adipisicing elite.
                          Itaque, corporis nulla aspernatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 all gra">
                    <div class="product-item">
                      <a href="#">
                        <img src="assets/images/product_03.jpg" alt="" />
                      </a>
                      <div class="down-content">
                        <a href="#">
                          <h4>RAV4 Hybrid</h4>
                        </a>
                        <h6>$26,888</h6>
                        <p>
                          It just arrived on our lot this past week! All of the
                          premium features, ...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 all gra">
                    <div class="product-item">
                      <a href="#">
                        <img src="assets/images/product_04.jpg" alt="" />
                      </a>
                      <div class="down-content">
                        <a href="#">
                          <h4>Harveyly Dakinson</h4>
                        </a>
                        <h6>$3224.60</h6>
                        <p>
                          Lorem ipsume dolor sit amet, adipisicing elite.
                          Itaque, corporis nulla aspernatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 all dev">
                    <div class="product-item">
                      <a href="#">
                        <img src="assets/images/product_05.jpg" alt="" />
                      </a>
                      <div class="down-content">
                        <a href="#">
                          <h4>Ipad 5</h4>
                        </a>
                        <h6>$180.75</h6>
                        <p>
                          Lorem ipsume dolor sit amet, adipisicing elite.
                          Itaque, corporis nulla aspernatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 all des">
                    <div class="product-item">
                      <a href="#">
                        <img src="assets/images/product_06.jpg" alt="" />
                      </a>
                      <div class="down-content">
                        <a href="#">
                          <h4>Ipad 4</h4>
                        </a>
                        <h6>$120.50</h6>
                        <p>
                          Lorem ipsume dolor sit amet, adipisicing elite.
                          Itaque, corporis nulla aspernatur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <ul class="pages">
                <li>
                  <a href="#">1</a>
                </li>
                <li class="active">
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-double-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Products;