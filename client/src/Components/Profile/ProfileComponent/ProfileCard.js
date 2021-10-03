import {  Col } from "antd";
import { Link } from "react-router-dom";

const ProfileCard = ({ post }) => {

    return (
        <Col span={6} >
            <Link to={`/post/${post._id}`}
                key={post._id}
            >
                 <img src={`http://localhost:5000/${post.img}`}/>
            </Link>
        </Col>
    );
}

export default ProfileCard