import { Menu, Button } from "antd";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link,useHistory } from "react-router-dom";
import {logoutAction} from "../Store/actions/userActions.js";
const Navbar = ({ userc }) => {
    const history =useHistory();
    const dispatch=useDispatch();
    const Logout= async ()=>{
        await dispatch(logoutAction());
        history.push("/");
    }
   
    return (
        <Fragment>
            <Link to="/" style={{ color: "white" }}>B</Link>
            <Menu theme="dark" mode="horizontal">
                {userc !== null ? (
                    <Fragment>
                        <Menu.Item key="1" >
                            <Button onClick={Logout} type="link"  style={{ color: "white" }}  >Logout</Button>
                        </Menu.Item>
                        <Menu.Item key="2" >
                            <Link to="/profile" style={{ color: "white" }}>Profile</Link>
                        </Menu.Item>
                    </Fragment>
                ) : (

                    <Fragment>
                        <Menu.Item key="1" >
                            <Link to="/signup" style={{ color: "white" }}>Sign Up</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/login" style={{ color: "white" }}>Login</Link>
                        </Menu.Item>
                    </Fragment>
                )
                }
            </Menu>
        </Fragment>

    )
}
export default Navbar;