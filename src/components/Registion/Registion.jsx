import React from "react";
import { Button, Form } from "react-bootstrap";

const Registion = () => {
  return (
    <div className="w-50 mx-auto">
      <h1 className="text-center ">Sign Up</h1>
      <Form>
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
            type="email"
            name="email"
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
            type="password"
            name="password"
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
      </Form>
    </div>
  );
};

export default Registion;
