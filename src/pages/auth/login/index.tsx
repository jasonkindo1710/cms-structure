import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import React, { useEffect } from "react";

import AuthLayout from "../../../layout/Auth";

const Login: React.FC<{
  setType: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setType }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      username: "abc",
      password: "abc",
    });
  }, []);

  const onFinish = (values: object) => {
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
        className="cms-login-form"
      >
        <div className="cms-login-title">admin login</div>
        <Form.Item name="username">
          <Input prefix={<UserOutlined />} placeholder="Username" required />
        </Form.Item>

        <Form.Item name="password">
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Item>

        <div className="cms-login-box-link-center">
          <div className="cms-login-space-around">
            <Link href="/auth/register">
              <a className="cms-login-link">register</a>
            </Link>

            <Link href="/auth/forgot-password">
              <a className="cms-login-link">forgot password</a>
            </Link>
          </div>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default Login;
