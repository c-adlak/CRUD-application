import React from "react";
import { useParams } from "react-router-dom";
const SearchResult = () => {
  let { country } = useParams();
  console.log(country);
  //http://localhost:3000/sampleListings?country=Japan

  return <div>SearchResult</div>;
};

export default SearchResult;
