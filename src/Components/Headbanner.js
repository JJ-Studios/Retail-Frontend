import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getSessionStorage, setSessionStorage } from "./GlobalVariable";
import "./Component.css";

function Headbanner() {
  //  const { product, setProduct } = useContext(productType);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    // sticky-top
    <body className="body-wrapper">
      {/*style={{ backgroundColor: "#8b0000" }}  d-none d-xl-block*/}
      {/*<section
        className="page-search bg-white pt-4 pb-0"
        style={{ height: "70px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/*className="advance-search"
              <div>
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-7 px-0">
                      <input
                        type="text"
                        className="form-control rounded-pill bg-light"
                        id="inputtext4"
                        placeholder="What are you looking for"
                      />
                    </div>
                    <div className="form-group col-md-0 px-0">
                      <a href="">
                        <i className="fa fa-search p-3 bg-white"></i>
                      </a>
                    </div>
                    {/*<div className="form-group col-md-3">
                      <input
                        type="text"
                        className="form-control my-2 my-lg-0"
                        id="inputCategory4"
                        placeholder="Category"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <input
                        type="text"
                        className="form-control my-2 my-lg-0"
                        id="inputLocation4"
                        placeholder="Location"
                      />
                    </div>*/}
      {/*<div className="form-group col-md-2">
                      <button type="submit" className="btn btn-primary">
                        Search Now
                      </button>
                    </div>
                    <div className="form-group col-md-1 pl-5 d-none d-lg-block">
                      <i class="fa fa-map-signs fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className="form-group col-md-2 pl-2 d-none d-lg-block">
                      <h6>(281) 255-4700</h6>
                      <h6>115 Commerce St, Tomball, TX</h6>
                    </div>
                    <div className="form-group col-md-0 d-none d-lg-block">
                      <Link to="/Cart" onClick={scrollToTop}>
                        <i class="fa fa-shopping-cart fa-2x" aria-hidden="true">
                          <span className="number">
                            {getSessionStorage("number")}
                          </span>
                        </i>
                        <h6>Cart</h6>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
                  </section>*/}
      <section>
        <div
          className="container-fluid text-center h1"
          style={{ fontFamily: "Brush Script MT, cursive" }}
        >
          <img className="w-100" src={"images/banner/SmallBanner.jpg"} />
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row">
            {/*col-md-12*/}
            <div className="col-xl-10 col-12 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light navigation">
                {/*<Link className="navbar-brand" to="/Home" onClick={scrollToTop}>
                  <img src="images/bathlogo2.png" alt="" height="38px" />
                </Link>*/}
                <p></p>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto main-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/Home"
                        onClick={scrollToTop}
                        style={{ fontSize: "25px" }}
                      >
                        <div className="menu">Home</div>
                      </Link>
                    </li>

                    {/*Clothes tab*/}

                    {/*Bath tab*/}
                    {window.location.pathname === "/CategoryBath" && (
                      <li className="nav-item active">
                        <Link
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          to="/CategoryBath"
                          onClick={scrollToTop}
                          style={{ fontSize: "25px" }}
                        >
                          Bath & Body
                          {/*<span>
                          <i className="fa fa-angle-down"></i>
                        </span>*/}
                        </Link>
                      </li>
                    )}
                    {window.location.pathname !== "/CategoryBath" && (
                      <li className="nav-item">
                        <Link
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          to="/CategoryBath"
                          onClick={() => {
                            scrollToTop();
                          }}
                          style={{ fontSize: "25px" }}
                        >
                          Bath & Body
                          {/*<span>
                          <i className="fa fa-angle-down"></i>
                        </span>*/}
                        </Link>
                      </li>
                    )}

                    {/*Bag tab*/}
                    {window.location.pathname === "/CategoryBags" && (
                      <li className="nav-item active">
                        <Link
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          to="/CategoryBags"
                          onClick={scrollToTop}
                          style={{ fontSize: "25px" }}
                        >
                          Bags
                          {/*<span>
                          <i className="fa fa-angle-down"></i>
                        </span>*/}
                        </Link>
                      </li>
                    )}
                    {window.location.pathname !== "/CategoryBags" && (
                      <li className="nav-item">
                        <Link
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          to="/CategoryBags"
                          onClick={scrollToTop}
                          style={{ fontSize: "25px" }}
                        >
                          Bags
                          {/*<span>
                          <i className="fa fa-angle-down"></i>
                        </span>*/}
                        </Link>
                      </li>
                    )}

                    {window.location.pathname === "/CategoryClothing" && (
                      <li className="nav-item active">
                        <Link
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          to="/CategoryClothing"
                          onClick={scrollToTop}
                          style={{ fontSize: "25px" }}
                        >
                          Clothing
                          {/*<span>
                          <i className="fa fa-angle-down"></i>
                        </span>*/}
                        </Link>
                      </li>
                    )}
                    {window.location.pathname !== "/CategoryClothing" && (
                      <li className="nav-item">
                        <Link
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          to="/CategoryClothing"
                          onClick={scrollToTop}
                          style={{ fontSize: "25px" }}
                        >
                          Clothing
                          {/*<span>
                          <i className="fa fa-angle-down"></i>
                        </span>*/}
                        </Link>
                      </li>
                    )}
                    {window.location.pathname === "/CategoryJewelry" && (
                      <li className="nav-item active">
                        <Link
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          to="/CategoryJewelry"
                          onClick={scrollToTop}
                          style={{ fontSize: "25px" }}
                        >
                          Jewelry
                          {/*<span>
                          <i className="fa fa-angle-down"></i>
                        </span>*/}
                        </Link>
                      </li>
                    )}
                    {window.location.pathname !== "/CategoryJewelry" && (
                      <li className="nav-item">
                        <Link
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          to="/CategoryJewelry"
                          onClick={scrollToTop}
                          style={{ fontSize: "25px" }}
                        >
                          Jewelry
                          {/*<span>
                          <i className="fa fa-angle-down"></i>
                        </span>*/}
                        </Link>
                      </li>
                    )}
                    {window.location.pathname === "/CategoryGifts" && (
                      <li className="nav-item active">
                        <Link
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          to="/CategoryGifts"
                          onClick={scrollToTop}
                          style={{ fontSize: "25px" }}
                        >
                          Gifts
                          {/*<span>
                          <i className="fa fa-angle-down"></i>
                        </span>*/}
                        </Link>
                      </li>
                    )}
                    {window.location.pathname !== "/CategoryGifts" && (
                      <li className="nav-item">
                        <Link
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          to="/CategoryGifts"
                          onClick={scrollToTop}
                          style={{ fontSize: "25px" }}
                        >
                          Gifts
                          {/*<span>
                          <i className="fa fa-angle-down"></i>
                        </span>*/}
                        </Link>
                      </li>
                    )}
                    {window.location.pathname === "/ContactUs" && (
                      <li className="nav-item active">
                        <Link
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          to="/ContactUs"
                          onClick={scrollToTop}
                          style={{ fontSize: "25px" }}
                        >
                          Contact Us
                          {/*<span>
                          <i className="fa fa-angle-down"></i>
                        </span>*/}
                        </Link>
                      </li>
                    )}
                    {window.location.pathname !== "/ContactUs" && (
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/ContactUs"
                          onClick={scrollToTop}
                          style={{ fontSize: "25px" }}
                        >
                          Contact Us
                          {/*<span>
                          <i className="fa fa-angle-down"></i>
                        </span>*/}
                        </Link>
                      </li>
                    )}
                  </ul>

                  <ul className="navbar-nav ml-auto mt-10">
                    <li className="nav-item">
                      <Link to="/Cart" onClick={scrollToTop}>
                        <i class="fa fa-shopping-cart fa-2x" aria-hidden="true">
                          <span className="number">
                            {getSessionStorage("number")}
                          </span>
                        </i>
                        <h6>Cart</h6>
                      </Link>
                    </li>
                    <li className="pl-xl-5">
                      <form class="d-flex">
                        <input
                          class="form-control me-1 py-2"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <i
                          class="btn btn-outline-success fa fa-search px-1"
                          type="submit"
                        ></i>
                      </form>
                    </li>
                    {/*<li className="nav-item">
                      <Link to="/Login">
                        <a className="nav-link login-button">Login</a>
                      </Link>
                    </li>
                    {/*<li className="nav-item">
                      <Link to="/AdListing">
                        <a className="nav-link text-white add-button">
                          <i className="fa fa-plus-circle"></i> Add Listing
                        </a>
                      </Link>
                    </li>*/}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Headbanner;
