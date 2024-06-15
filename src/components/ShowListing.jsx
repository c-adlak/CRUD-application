import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./showlisting.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GrLocationPin } from "react-icons/gr";
const ShowListing = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({});
  let { id } = useParams();
  let api = `http://localhost:3000/sampleListings/${id}`;
  axios
    .get(api)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  let deleteListing = () => {
    const url = `http://localhost:3000/sampleListings/${id}`;
    axios.delete(url).then((res) => {
      navigate("/alllistings");
    });
  };
  let editlisting = () => {
    navigate(`/alllistings/showlisting/${id}/editlisting/${id}`);
  };
  return (
    <>
      <Container>
        <div className="show-main-container">
          <Card
            className="show-cards"
            style={{ borderRadius: "20px", width: "50rem" }}
          >
            <Card.Img
              style={{
                height: "20rem",
                objectFit: "cover",
                width: "100%",
                borderRadius: "20px",
              }}
              variant="top"
              src={data.image}
            />
            <Card.Body>
              <Card.Title> {data.title} </Card.Title>
              <Card.Title> &#8377; {data.price} </Card.Title>
              <Card.Text>{data.description}</Card.Text>
              <Card.Text>
                <GrLocationPin /> {data.location} , {data.country}
              </Card.Text>

              <div className="btn-div">
                <Button variant="dark" onClick={editlisting}>
                  Edit
                </Button>
                <Button variant="dark" onClick={deleteListing}>
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default ShowListing;
