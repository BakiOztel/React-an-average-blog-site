import { useEffect, useState } from "react";
import Navbar from "./header";
import Carousel from "./Carousel";
import Footerr from "./Footer.js";
import signUp from "./form/signUp.js"
import Login from "./form/login.js";
import MainMenu from "./Main/Main.js";
import Profile from "./Profile/Profile.js";
import Deneme from "./Deneme.js";
import { PrivateRouter } from "./AuthRouter/PrivateRouter.js";
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../Store/actions/userActions.js"
//css
import "antd/dist/antd.css";
import "./Css/header.css";
import "./Css/App.css";

const height = window.innerHeight
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
                <Layout style={{ minHeight: height }}>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} className="header">
                        <Navbar userc={data} />
                    </Header>
                    <Content className="site-layout" style={{ padding: '0', marginTop: 64 }}>
                        {data ? (<PrivateRouter exact user={data} path="/" component={MainMenu} />) : (<Route path="/" exact component={withRouter(Carousel)} />)}
                        <Route path="/signup" component={withRouter(signUp)} />
                        <Route path="/login" component={withRouter(Login)} />
                        <Route path="/deneme" render={routeProps => (<Deneme {...routeProps} post={[{ name: "bok12", comment: "yoklama" }, { name: "bok13", comment: "yoklama1" }]} />)} />
                        <PrivateRouter user={data} path="/profile" component={Profile} />
                    </Content>
                    <Footer>
                        <Footerr />
                    </Footer>
                </Layout>
            )}
            {/* <Layout style={{ minHeight: height }}>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} className="header">
                    <Navbar userc={data} />
                </Header>
                <Content className="site-layout" style={{ padding: '0', marginTop: 64 }}>
                    {data ? (<PrivateRouter exact user={data} path="/" component={MainMenu} />) : (<Route path="/" exact component={withRouter(Carousel)} />)}
                    <Route path="/signup" component={withRouter(signUp)} />
                    <Route path="/login" component={withRouter(Login)} />
                    <Route path="/deneme" render={routeProps => (<Deneme {...routeProps} post={[{ name: "bok12", comment: "yoklama" }, { name: "bok13", comment: "yoklama1" }]} />)} />
                    <PrivateRouter user={data} path="/profile" component={Profile} />
                </Content>
                <Footer>
                    <Footerr />
                </Footer>
            </Layout> */}
        </Router>
    );
}
export default App;