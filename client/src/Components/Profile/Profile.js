import { Row} from "antd";
import { Fragment } from "react";
import ProfileStat from "./ProfileComponent/ProfileStat.js"
import ProfileImg from "./ProfileComponent/Image.js";
import ProfilePost from "./ProfileComponent/Post.js";
import "../Css/Profile.css";


const Profile = (props) => {

    return (
        <Fragment>
            <Row className="Top_Row" >
                <ProfileImg />
            </Row>
            <Row style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
                <ProfileStat />
            </Row>
            <Row style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }} >
                <ProfilePost />
            </Row>
        </Fragment>
    );
}

export default Profile;