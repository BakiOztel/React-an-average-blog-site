import { useEffect, useState } from "react";
import Navbar from "./header";
import Carousel from "./Carousel";
import Footerr from "./Footer.js";
import SignUp from "./form/signUp.js"
import Login from "./form/login.js";
import MainMenu from "./Main/Main.js";
import Profile from "./Profile/Profile.js";
import PostDetail from "./PostDetails/PostDetail.js";
import LayouT from "./Layout.js";
import PrivateRouter from "./AuthRouter/PrivateRouter.js";
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../Store/actions/userActions.js"
//css
import "antd/dist/antd.css";
import "./Css/header.css";
import "./Css/App.css";

const { Header, Footer, Content } = Layout;
const App = () => {
    const [Loading, setLoading] = useState(true);
    const { data } = useSelector(state => state.userReducers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(isLogin()).then(() => {
            setLoading(false);
        })

    }, []);
    return (

        <Router>
            {Loading ? (<div></div>) : (
                <Switch>
                    <Route path="/PostDetail">
                        <PostDetail />
                    </Route>
                    <Route path="/signup">
                        <LayouT data={data} >
                            <SignUp />
                        </LayouT>
                    </Route>
                    <Route path="/login">
                        <LayouT data={data} >
                            <Login />
                        </LayouT>
                    </Route>
                    <PrivateRouter user={data} path="/profile"  >
                        <LayouT data={data} >
                            <Profile />
                        </LayouT>
                    </PrivateRouter>
                    {data ? (<PrivateRouter exact user={data} path="/" >
                        <LayouT data={data} >
                            <MainMenu />
                        </LayouT>
                    </PrivateRouter>)
                        :
                        (<Route path="/" exact component={withRouter(Carousel)} />)}
                </Switch>
            )}
        </Router>
    );
}
export default App;