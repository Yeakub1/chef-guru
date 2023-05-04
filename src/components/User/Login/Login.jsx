import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
      <div className="w-50 mx-auto">
        <h1 className="text-center ">Sign In</h1>
        <Form>
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
           Login
          </Button>
        </Form>
      </div>
    );
};

export default Login;