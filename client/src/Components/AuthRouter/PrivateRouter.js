import {Redirect,Route} from "react-router-dom";

export const PrivateRouter=({user:User,component:Component, ...theRest})=>{
    return(
        <Route {...theRest} component={(props)=>(
            User ? (<Component user={User._id} {...props}/>):(<Redirect to="/login"/>)
        )} 
        />
    );
}