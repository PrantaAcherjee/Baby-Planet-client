import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../../Hooks/UseAuth';

const AdminRoute = (props) => {
    const { children, ...rest } = props
    const { user,isLoading,admin } = UseAuth();
    if(isLoading){
        return <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
            user.email && admin ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: location }
                    }}
                />
            )

                }
        >


        </Route>
    );
};

export default AdminRoute;

