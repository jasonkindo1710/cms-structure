import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { authActions } from "../../../redux/slice/authSlice";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector((state) => state.auth.logging);
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLoginClick = () => {
    dispatch(
      authActions.login({
        username: userName,
        password: password,
      })
      //tam thoi de user va admin nhu the nay vi chua co api
      // router.push("/")
      // router.push('/admin/landingpage')
    );
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="cms-login-form">
      <Form
        name="basic"
        // labelCol={{ span: 8 }}
        wrapperCol={{ offset: 4, span: 12 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="cms-login-title">admin login</div>
        <Form.Item name="username">
          <Input
            prefix={<UserOutlined />}
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </Form.Item>

        <Form.Item name="password">
          <Input
            prefix={<LockOutlined />}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Item>

        <Form.Item>
          <Link href="/forgot">
            <a className="cms-login-register">Register</a>
          </Link>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={handleLoginClick}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
