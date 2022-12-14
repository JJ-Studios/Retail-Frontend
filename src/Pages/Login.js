import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Headbanner from "../Components/Headbanner";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const login = (e) => {
    e.preventDefault();
    Axios.post("https://bathhut-api.herokuapp.com/Login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setloginStatus(response.data.message);
        alert("Wrong Password");
      } else {
        setloginStatus(response.data[0].username);
        navigate("/DashBoard");
      }
    });
  };

  const [loginStatus, setloginStatus] = useState("");
  useEffect(() => {
    Axios.get("https://bathhut-api.herokuapp.com/Login").then((response) => {
      if (response.data.loggedIn === true)
        setloginStatus(response.data.user[0].username);
    });
  });

  return (
    <body class="body-wrapper">
      <section class="login py-5 border-top-1">
        <Headbanner />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-8 align-item-center">
              <div class="border">
                <h3 class="bg-gray p-4">Login Now</h3>
                <form action="#">
                  <fieldset class="p-4">
                    <div className="status">
                      <h1>{loginStatus}</h1>
                    </div>
                    <input
                      type="text"
                      placeholder="Username"
                      class="border p-3 w-100 my-2"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      class="border p-3 w-100 my-2"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    {/*  <div class="loggedin-forgot">
                      <input type="checkbox" id="keep-me-logged-in" />
                      <label for="keep-me-logged-in" class="pt-3 pb-2">
                        Keep me logged in
                      </label>
                    </div> */}
                    <button
                      type="submit"
                      class="d-block py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3"
                      onClick={login}
                    >
                      Log in
                    </button>
                    {/* <a class="mt-3 d-block  text-primary" href="#">
                      Forget Password?
                    </a>
                    <a
                      class="mt-3 d-inline-block text-primary"
                      href="register.html"
                    >
                      Register Now
                      </a> */}
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Login;
