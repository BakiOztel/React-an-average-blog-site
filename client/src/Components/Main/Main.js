import { Layout } from "antd";
import Siders from "./Sider.js";
import Contents from "./Content.js";
const MainMenu = () => {
    return (
        <Layout>
            <Siders />
            <Layout style={{ marginLeft: 55 }} >
                <Contents />
            </Layout>

        </Layout>
    )
}

export default MainMenu;