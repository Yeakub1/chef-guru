import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AtuhContext } from '../../providers/AuthProviders';

const Login = () => {
  const { sigIn } = useContext(AtuhContext);
  const neviget = useNavigate();
  const location = useLocation();
  console.log('login page location', location);
  const from = location.state?.from?.pathname || '/';

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    sigIn(email, password)
      .then(result => {
        const logedUser = result.user;
        console.log(logedUser);
        neviget(from, {replace: true})
      })
      .catch(error => {
      console.log(error);
    })
  }
    return (
      <div className="w-50 mx-auto">
        <h1 className="text-center ">Sign In</h1>
        <Form onSubmit={handleLogin}>
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
          <p>
            Don't have an account?{" "}
            <Link to="/registion" className="text-decoration-none mt-5">
              Register here
            </Link>
          </p>
        </Form>
      </div>
    );
};

export default Login;