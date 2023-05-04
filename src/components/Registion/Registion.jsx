import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AtuhContext } from "../providers/AuthProviders";


const Registion = () => {
  const { creatUser } = useContext(AtuhContext);
  const [errors, setErrors] = useState("");

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
      console.log(name, email, password, photo);
           if (password.length < 6) {
      setErrors('Your Password Must be characters or longer');
      return;
    }

        creatUser(email, password)
            .then(result => {
              const createdUser = result.user;
              event.target.reset();
                console.log(createdUser);
            })
            .catch(error => {
            console.log(error);
        })
    }

  return (
    <div className="w-50 mx-auto">
      <h1 className="text-center ">Sign Up</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="w-50"
            name="name"
            type="text"
            required
            placeholder="Your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="w-50"
            name="email"
            type="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            className="w-50"
            type="text"
            name="photo"
            required
            placeholder="Your Photo Url"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="w-50"
            name="password"
            type="password"
            required
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registration
        </Button>
        <p>
          already have an account{" "}
          <Link to="/login" className="text-decoration-none mt-5">
            Login Now
          </Link>
        </p>
        <p className="text-danger">{errors}</p>
      </Form>
    </div>
  );
};

export default Registion;
