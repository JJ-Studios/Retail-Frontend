import React from "react";

function SingleCardComponent() {
  return (
    <body class="body-wrapper">
      <div class="product-item bg-light">
        <div class="card">
          <div class="thumb-content">
            <div class="price">$200</div>
            <a href="single.html">
              <img
                class="card-img-top img-fluid"
                src="images/products/products-1.jpg"
                alt="Card image cap"
              />
            </a>
          </div>
          <div class="card-body">
            <h4 class="card-title">
              <a href="single.html">11inch Macbook Air</a>
            </h4>
            <ul class="list-inline product-meta">
              <li class="list-inline-item">
                <a href="single.html">
                  <i class="fa fa-folder-open-o"></i>Electronics
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-calendar"></i>26th December
                </a>
              </li>
            </ul>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo, aliquam!
            </p>
            <div class="product-ratings">
              <ul class="list-inline">
                <li class="list-inline-item selected">
                  <i class="fa fa-star"></i>
                </li>
                <li class="list-inline-item selected">
                  <i class="fa fa-star"></i>
                </li>
                <li class="list-inline-item selected">
                  <i class="fa fa-star"></i>
                </li>
                <li class="list-inline-item selected">
                  <i class="fa fa-star"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-star"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default SingleCardComponent;
