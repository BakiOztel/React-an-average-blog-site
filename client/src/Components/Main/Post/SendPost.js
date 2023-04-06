import { useRef } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import Dragger from "antd/lib/upload/Dragger";
import { useDispatch } from 'react-redux';
import { createPost } from "../../../Store/actions/postActions.js";
import { Form, Button, Input } from "antd";
const PostForm = () => {
    const formRef = useRef();
    const dispatch = useDispatch();
    const normFile = (e) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e
        }

        return e && e.fileList;
    };
    const ff = (value) => {
        const data = new FormData();
        data.append("image-file", value.file[0].originFileObj);
        data.append("comment", value.comment);
        dispatch(createPost(data));
        formRef.current.resetFields();
    }

    return (
        <Form
            ref={formRef}
            onFinish={ff}
            style={{ width: "1000px" }}
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 10,
            }}
            initialValues={{
                remember: true,
            }}
        >
            <Form.Item
                label="Comment"
                name="comment"
                rules={[
                    {
                        required: false,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input.TextArea />

            </Form.Item>
            <Form.Item name="file" rules={[
                {
                    required: false,
                    message: 'Please input your username!',
                },
            ]} label="photo"
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Dragger beforeUpload={() => false} name="file" multiple={true} >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </Dragger>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 11,
                    span: 16,
                }}
                style={{ marginLeft: "100px" }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default PostForm;