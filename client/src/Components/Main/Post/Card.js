import { Avatar, Form, Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import { postComment } from '../../../Api/postApi.js';
import "../../Css/Post.css"

const Demo = ({ post }) => {

    const onFinish = async (value) => {
        const data = {
            message: value.message,
            postId: post._id
        }
        await postComment(data);
    }
    return (
        <div className="Post" key={post._id} >
            <div className="Post_Top">
                <Avatar size={40} src={post.userId.profileImg ? (`http://localhost:5000/${post.userId.profileImg}`) : (null)} />
                <span style={{ marginLeft: "20px" }}>{post.userId.userName}</span>
            </div>
            <div>
                <Link to="">
                    <img className="Post_Img" alt="example" src={`http://localhost:5000/${post.img}`} />
                </Link>
            </div>
            <div className="Post_Bottom">
                <div className="explanation">
                    <span className="post_name">{post.userId.userName}:</span>
                    <span className="post_explanation">{post.explanation}</span>
                </div>
                {
                    post.comments.slice(0, 2).map((value) => (
                        <div className="commonent" >
                            <span className="comment_user_name">{value.user_id.userName} :</span>
                            <p className="comment_user_text">{value.comment} </p>
                        </div>
                    ))
                }
                <div className="comment_input">
                    <Form name="comment"
                        layout="inline"
                        autoComplete="off"
                        onFinish={onFinish}
                        wrapperCol={{ span: 24 }}
                    >
                        <Form.Item style={{ width: "80%", margin: "0px" }} name="message">
                            <Input style={{ width: "100%" }} placeholder="message" />
                        </Form.Item>
                        <Form.Item style={{ width: "20%", margin: "0px" }}>
                            <Button type="text" style={{ width: "100%" }} htmlType="submit" >Paylaş</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Demo;