import React, { useContext } from 'react';
import { AtuhContext } from '../../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const { user, loding } = useContext(AtuhContext);
    const location = useLocation();
    console.log('user is private route', user);

    if (loding) {
        return (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <Spinner animation="border" variant="primary" />;
          </div>
        );
    }

    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoute;