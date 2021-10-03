import { useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch,useSelector} from "react-redux";
import {login} from "../../Store/actions/userActions.js";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.userReducers);
  const onFinish = async (values) => {  
      await dispatch(login(values));
      history.push("/");
  };
  useEffect(() => {
    if(data){
      history.goBack();
    }
  }, [data]);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form  style={{marginTop:"250px"}}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 10  ,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;