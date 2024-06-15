import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./layout.css";
import Footer from "./Footer";
const Layout = () => {
  let navigate = useNavigate();
  const [data, setData] = useState("");
  let searchFunction = () => {
    navigate(`/addlistings/searchresult/${data}`);
    //yourwebsite.com/pageB/[country_name]
  };
  return (
    <>
      <div className="main-container">
        <Navbar data-bs-theme="light" id="mynavbar">
          <Navbar.Brand href="#home">
            <Link to="home">Home</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="link" to="alllistings">
                All Listings
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="addlistings">
                Add Listings
              </Link>
            </Nav.Link>
          </Nav>
          <div>
            <input
              type="text"
              placeholder="Enter country"
              name="search"
              value={data}
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
            <button onClick={searchFunction}>Search</button>
          </div>
        </Navbar>

        <div className="outlet-container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
