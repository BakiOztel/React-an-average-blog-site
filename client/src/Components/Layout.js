import { Layout } from "antd";
import { Content, Header,Footer } from "antd/lib/layout/layout";
import Footerr from "./Footer.js";
import Navbar from "./header.js";

const height = window.innerHeight
const LayouT = ({ children  ,data }) => {

    return (
        <Layout style={{minHeight:height}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} className="header">
                <Navbar userc={data} />
            </Header>
            <Content className="site-layout" style={{ padding: '0', marginTop: 64 }}>
                {children }
            </Content>
            <Footer>
                <Footerr />
            </Footer>
        </Layout>
    );
}

export default LayouT;