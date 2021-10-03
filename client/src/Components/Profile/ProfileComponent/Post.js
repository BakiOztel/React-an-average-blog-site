import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "./ProfileCard.js";
import {  Row,Spin } from "antd";
import { Fragment, useEffect } from "react";
import { FetchAllProfilePost } from "../../../Store/actions/postActions.js";

const style = { background: '#0092ff', padding: '8px 0' };
const ProfilePost = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchAllProfilePost());
    }, []);

    const state = useSelector(state => state.postReducers);
    
    const post = (post) => {
        return (
            <Fragment>
                {post.map((postt) => (<ProfileCard key={postt._id} post={postt} />))}
            </Fragment>
        );
    }

    return (
    <Row gutter={16} style={{width:"50%"}}>
        {state.isLoading ? (post(state.post)) : (<Spin style={{width:"100%",justifySelf:"center"}} size="large" />)}
    </Row>)
}
export default ProfilePost;