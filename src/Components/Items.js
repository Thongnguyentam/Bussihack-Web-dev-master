import React, { Component } from 'react';
import Card from './Card.js';
import {useState,useEffect} from 'react'

function Items() {
    return (
        <div>
            <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="w-100 pt-1 mb-5 text-right">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="" method="get" class="modal-content modal-body border-0 p-0">
                        <div class="input-group mb-2">
                            <input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ..."/>
                            <button type="submit" class="input-group-text bg-success text-light">
                                <i class="fa fa-fw fa-search text-white"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <section class="bg-light">
                <div class="container pb-5">
                    <div class="row">
                        <div class="col-lg-5 mt-5">
                            <div class="card mb-3">
                                <img class="card-img img-fluid" src="https://pictures.dealer.com/j/jimpattisontoyotavictoria/1384/8d5e08d35bbd600d90dc4b9c68d0763ax.jpg" alt="Card image cap" id="product-detail"/>
                            </div>
                            <div class="row">
                                <div class="col-1 align-self-center">
                                    <a href="#multi-item-example" role="button" data-bs-slide="prev">
                                        <i class="text-dark fas fa-chevron-left"></i>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </div>
                                <div id="multi-item-example" class="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                                    <div class="carousel-inner product-links-wap" role="listbox">
                                        <div class="carousel-item active">
                                            <div class="row">
                                                <div class="col-4">
                                                    <a href="#">
                                                        <img class="card-img img-fluid" src="https://pictures.dealer.com/j/jimpattisontoyotavictoria/0879/2ac3687013a1d140e75e9209205d97abx.jpg" alt="Product Image 1"/>
                                                    </a>
                                                </div>
                                                <div class="col-4">
                                                    <a href="#">
                                                        <img class="card-img img-fluid" src="https://pictures.dealer.com/j/jimpattisontoyotavictoria/1229/89cce9e5048e7c1a8f8561bccb43108ex.jpg" alt="Product Image 2"/>
                                                    </a>
                                                </div>
                                                <div class="col-4">
                                                    <a href="#">
                                                        <img class="card-img img-fluid" src="https://pictures.dealer.com/j/jimpattisontoyotavictoria/0201/65dd511ca218cb97a349b5d6483d0f1cx.jpg" alt="Product Image 3"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-1 align-self-center">
                                    <a href="#multi-item-example" role="button" data-bs-slide="next">
                                        <i class="text-dark fas fa-chevron-right"></i>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 mt-5">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="h2">RAV4 Hybrid</h1>
                                    <p class="h3 py-2">$26,888</p>
                                    <p class="py-2">
                                        <span class="list-inline-item text-dark">Rating 4.8/5</span>
                                    </p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <h6>Brand:</h6>
                                        </li>
                                        <li class="list-inline-item">
                                            <p class="text-muted"><strong>Toyota</strong></p>
                                        </li>
                                    </ul>

                                    <h6>Description:</h6>
                                    <p>You won't want to miss this excellent value!</p>
                                    <p>It just arrived on our lot this past week! All of the premium features expected of a Toyota are offered, including: variably intermittent wipers, power door mirrors and heated door mirrors, and 1-touch window functionality. Under the hood you'll find a 4 cylinder engine with more than 150 horsepower, and for added security, dynamic Stability Control supplements the drivetrain.</p>
                                    <p>You will have a pleasant shopping experience that is fun, informative, and never high pressured. Stop by our dealership or give us a call for more information.</p>
                                    <p>Call us today don't miss out... You can text our Sales Team directly @ (778)-860-4426</p>

                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <h6>Avaliable Color :</h6>
                                        </li>
                                        <li class="list-inline-item">
                                            <p class="text-muted"><strong>Black</strong></p>
                                        </li>
                                    </ul>

                                    <form action="" method="GET">
                                        <input type="hidden" name="product-title" value="Activewear"/>
                                        <div class="row pb-3">
                                            <div class="col d-grid">
                                                <button type="submit" class="btn btn-success btn-lg" name="submit" value="buy">Buy</button>
                                            </div>
                                            <div class="col d-grid">
                                                <button type="submit" class="btn btn-success btn-lg" name="submit" value="addtocard">Add To Cart</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Items;