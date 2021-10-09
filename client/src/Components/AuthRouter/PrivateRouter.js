import { Redirect, Route } from "react-router-dom";
import React from "react"
const PrivateRouter = ({ user: User, children, ...theRest }) => {
    return (
        <Route {...theRest} component={(props) => (
            User ? (React.createElement(React.Fragment, [props], [children])
            ) : (<Redirect to="/login" />)
        )}
        />
    );
}
export default PrivateRouter;