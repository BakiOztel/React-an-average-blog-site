import { Form, Input, Button } from 'antd';
import { signUp } from "../../Api/formApi.js";
import {useHistory} from "react-router-dom";

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-disable no-template-curly-in-string */


const Register = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  // useEffect(() => {
  //   if(data){
  //     history.push("/");
  //   }
  // }, [data]);
  const onFinish =  (value) => {
    try {
        signUp(value);
        history.push("/login");
    } catch (error) {
      console.log(error);
    }

  }
  const FormItemLayout = {
    labelCol: {
      sm: {
        span: 6
      }
    },
    wrapperCol: {
      sm: {
        span: 12
      }
    }
  }
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      sm: { span: 3, offset: 11 },
    },
  };
  return (
    <Form style={{marginTop:"200px"}}
      onFinish={onFinish}
      {...FormItemLayout}
      scrollToFirstError
      form={form}
      validateMessages={validateMessages}
      name="basic"
      layout="horizontal"
    >
      <Form.Item
        label="Username"
        name="userName"
        rules={[{ required: true, min: 5, }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Email"
        name="Email"
        rules={[{ required: true, type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Name and Surname"
        name="realNameAndSurname"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...formItemLayoutWithOutLabel}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;