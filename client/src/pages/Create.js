import React, { useState } from "react";
import API from "../utils/API";
import { Input } from "../components/Form";
import { Link } from "react-router-dom";
// import Footer from "../components/Footer"
import { Card, Button } from "react-bootstrap";
import "./create.css";

const Create = () => {
  //Setting initial states
  const [userName, setUserName] = useState([]);
  const [userObj, setUserObj] = useState({
    name: "",
    giftList: [],
  });
  //Handling form inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUserObj({ ...userObj, [name]: value });
  };
  //Handling form submission
  const handleFormSubmit = (e) => {
    API.saveUser(userObj)
      .then((data) => {
        const userArr = userName.slice(0);
        userArr.push(data.data);
        console.log(data.data);
        setUserName(userArr);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <>
      <Card
        className="bg-dark text-white text-center"
        style={{ width: "40rem", padding: "20px" }}
      >
        <Card.Title>Create Your Own Registry Here!</Card.Title>
        <Card.Img src="https://www.honestlymodern.com/wp-content/uploads/2020/10/Gifts-Laying-on-a-Table-1.png" />
        <Card.Body>
          <Input onChange={handleInputChange} name="name" placeholder="Jane Doe" />
        </Card.Body>
        <Link
          to={"/showall/name/" + userObj.name}
          className="submit-button-create"
        >
          <Button variant="outline-light" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Link>
      </Card>
    </>
  );
};

export default Create;
