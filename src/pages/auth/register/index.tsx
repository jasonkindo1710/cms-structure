import {
  AliwangwangOutlined,
  LockOutlined,
  MailOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import Link from "next/link";
import AuthLayout from "../../../layout/Auth";

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <AuthLayout>
      <Form
        name="basic"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="cms-register-form"
      >
        <div className="cms-register-form-title">register account here</div>

        <Form.Item name="fullName">
          <Input
            prefix={<UserOutlined />}
            type="text"
            placeholder="Full Name"
            required
          />
        </Form.Item>

        <Form.Item name="email">
          <Input
            prefix={<MailOutlined />}
            type="email"
            placeholder="Email"
            required
          />
        </Form.Item>

        <Form.Item name="username">
          <Input
            prefix={<AliwangwangOutlined />}
            type="text"
            placeholder="Username"
            required
          />
        </Form.Item>

        <Form.Item name="password">
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Item>

        <Form.Item name="re-password">
          <Input
            prefix={<SafetyCertificateOutlined />}
            type="password"
            placeholder="Re-type Password"
            required
          />
        </Form.Item>

        <div className="cms-register-box-link-center">
          <div className="cms-register-space-around">
            <Link href="/auth/login">
              <a className="cms-register-link">log in</a>
            </Link>

            <Link href="/auth/forgot-password">
              <a className="cms-register-link">forgot password</a>
            </Link>
          </div>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default Register;
