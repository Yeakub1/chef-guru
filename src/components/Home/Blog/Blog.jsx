import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
  return (
    <Container>
      <div className="">
        <h4>
          <span className="text-primary">
            1. uncontrolled and controlled components:
          </span>{" "}
          In React, controlled components refer to components that have their
          state and behavior controlled by the parent component. These
          components rely on props passed down from the parent component to
          update their state and behavior. Uncontrolled components refer to
          components that manage their own state internally.
        </h4>
      </div>
      <div className="mt-5">
        <h4>
          <span className="text-primary">
            2. validate React props using PropTypes:
          </span>{" "}
          Props are an important mechanism for passing the read-only attributes
          to React components. The props are usually required to use correctly
          in the component. If it is not used correctly, the components may not
          behave as expected. Hence, it is required to use props validation in
          improving react components.
        </h4>
      </div>

      <div className="mt-5">
        <h4>
          <span className="text-primary">3. node.js :</span> NodeJS is the
          package, which provides the JavaScript run-time environment, whereas
          Express is a framework that sits on top of NodeJS and helps us to
          handle requests and responses.
        </h4>
        <h4>
          <span className="text-primary">3. Express.js: :</span> Express is a
          small framework that sits on top of Node.jss web server functionality
          to simplify its APIs and add helpful new features. It makes it easier
          to organize your applications functionality with middle ware and
          routing. It adds helpful utilities to Node.jss HTTP objects. It
          facilitates the rendering of dynamic HTTP objects.
        </h4>
      </div>

      <div className="mt-5">
        <h4>
          <span className="text-primary">
            3. custom hook and create a custom hook :
          </span>{" "}
          A custom Hook is a JavaScript function whose name starts with use
          and that may call other Hooks.
          <br />
          Custom React JS hooks offer reusability as when a custom hook is
          created, it can be reused easily, which makes the code cleaner and
          reduces the time to write the code.
        </h4>
      </div>
    </Container>
  );
};

export default Blog;