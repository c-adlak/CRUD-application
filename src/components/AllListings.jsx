import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./allListings.css";
const AllListings = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  let loadData = () => {
    const url = `http://localhost:3000/sampleListings`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert("error while fetching data");
      });
  };
  useState(() => {
    loadData();
  }, []);
  let viewlisting = (id) => {
    navigate(`showlisting/${id}`);
  };
  console.log(data);
  let showingdata = data.map((key) => {
    return (
      <>
        <div>
          <Card
            style={{ width: "20rem", height: "30rem" }}
            onClick={() => {
              viewlisting(key.id);
            }}
          >
            <Card.Img height={300} variant="top" src={key.image} />
            <Card.Body>
              <Card.Title>{key.title}</Card.Title>
              <Card.Title>&#8377; {key.price}</Card.Title>
              <Card.Text>{key.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  });
  return <div className="alllisting-container">{showingdata}</div>;
};

export default AllListings;
