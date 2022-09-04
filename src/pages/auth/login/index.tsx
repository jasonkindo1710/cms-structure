import { Button, Checkbox, Form, Input, message } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import {authActions} from '../../../redux/slice/authSlice'

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
      }),
      //tam thoi de user va admin nhu the nay vi chua co api
      router.push('/')
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
    <div className="login-form">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            value={userName}
            placeholder={"Please select user or admin"}
            onChange={(e) => setUserName(e.target.value)}
          ></Input>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            value={password}
            placeholder={"pass"}
            onChange={(e) => setPassword(e.target.value)}
          ></Input.Password>
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={handleLoginClick}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
