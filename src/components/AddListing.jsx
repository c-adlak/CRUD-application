import { useState } from "react";
import axios from "axios";
import "./addlistings.css";
const AddListing = () => {
  const [input, setInput] = useState({});
  let handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  let handleSubmit = () => {
    const url = `http://localhost:3000/sampleListings`;
    axios
      .post(url, input)
      .then(() => {
        alert("data saved sucessfully");
      })
      .catch((err) => {
        alert("error while saving data");
      });
  };
  return (
    <>
      <div className="addlistings-container">
        <div className="form">
          <h2>Register your Property</h2>
          <input
            required
            type="text"
            name="title"
            value={input.title}
            placeholder="Enter Title"
            onChange={(e) => {
              handleInput(e);
            }}
          />

          <input
            required
            type="number"
            name="price"
            value={input.price}
            placeholder=" Enter price"
            onChange={(e) => {
              handleInput(e);
            }}
          />

          <input
            required
            name="description"
            value={input.description}
            placeholder="Enter Details"
            onChange={(e) => {
              handleInput(e);
            }}
          />

          <input
            required
            name="image"
            value={input.image}
            placeholder="Enter image url"
            onChange={(e) => {
              handleInput(e);
            }}
          />

          <input
            required
            name="location"
            placeholder="Enter City"
            value={input.location}
            onChange={(e) => {
              handleInput(e);
            }}
          />

          <input
            required
            name="country"
            placeholder="Enter Country"
            value={input.country}
            onChange={(e) => {
              handleInput(e);
            }}
          />

          <button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddListing;
