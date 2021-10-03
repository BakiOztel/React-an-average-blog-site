import { UserOutlined } from '@ant-design/icons';
import { Avatar, Form, Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import "./Css/Post.css";

const Demo = ({ post }) => {


    const onFinish = (value) => {

        
    }
    return (
        <div className="Post" >
            <div className="Post_Top">

                <Avatar size={40} icon={<UserOutlined />} />
                <span style={{ marginLeft: "30px" }}>User</span>

            </div>
            <div>
                <Link to="/bok">
                    <img className="Post_Img" alt="example" src={ `http://localhost:5000/${post.img}`} />
                    {/* <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> */}
                </Link>
            </div>
            <div className="Post_Bottom">
                <div className="explanation">
                   {console.log(post)}
                </div>
                {
                    post.comments.slice(0, 2).map((value) => (
                        <div className="commonent">
                            <span className="comment_user_name">{value.name}</span>
                            <p className="comment_user_text">{value.yorum} </p>
                        </div>
                    ))
                }
                <div className="comment_input">
                    <Form name="comment"
                        layout="inline"
                        autoComplete="off"
                        onFinish={onFinish}
                        wrapperCol={{span:24}}
                    >
                        <Form.Item style={{width:"80%",margin:"0px"}}  name="message">
                            <Input style={{width:"100%"}} placeholder="message" />
                        </Form.Item>
                        <Form.Item  style={{width:"20%",margin:"0px"}}>
                            <Button type="text" style={{width:"100%"}}  htmlType="submit" >Paylaş</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Demo;