import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AllListings from "./components/AllListings";
import AddListing from "./components/AddListing";
import ShowListing from "./components/ShowListing";
import Editlisting from "./components/Editlisting";
import SearchResult from "./components/SearchResult";
import Home from "./components/Home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="alllistings" element={<AllListings />} />
            <Route path="addlistings" element={<AddListing />} />
            <Route
              path="alllistings/showlisting/:id"
              element={<ShowListing />}
            />
            <Route
              path="alllistings/showlisting/:id/editlisting/:id"
              element={<Editlisting />}
            />
            <Route
              path="/addlistings/searchresult/:county_name"
              element={<SearchResult />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
