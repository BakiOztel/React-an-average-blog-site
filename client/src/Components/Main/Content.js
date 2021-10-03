import { Layout, Row } from "antd";
import Posts from "./Post/Post.js";
import SendPost from "./Post/SendPost.js";
const { Content } = Layout;
const Contents = () => {



    
    return (
        <Content>
            <Row justify="center">
                <SendPost />
            </Row>
            <Row justify="center">
                <Posts  />
            </Row>

        </Content>
    );
}

export default Contents;