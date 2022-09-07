import { FrownFilled, MailFilled } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import AuthLayout from "../../../layout/Auth";

const ForgotPassword: React.FC = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleCancel = () => {
    router.push("/auth/login");
  };

  const handleResetPass = () => {
    console.log("Vinhamo:", form.getFieldValue("email"));
  };

  return (
    <AuthLayout>
      <Form
        name="basic"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="cms-forgot-form"
      >
        <div className="cms-forgot-form-box-img">
          <FrownFilled className="cms-forgot-form-lock-icon" />
        </div>
        <div className="cms-forgot-form-title">forgot password?</div>
        <div className="cms-forgot-form-sub-title">
          You can reset your password here.
        </div>

        <Form.Item name="email">
          <Input
            prefix={<MailFilled style={{ fontSize: "18px" }} />}
            placeholder="Email"
            required
            className="cms-forgot-form-item"
            type="email"
          />
        </Form.Item>

        <div className="cms-forgot-box-link-center">
          <div className="cms-forgot-space-around">
            <Link href="/auth/login">
              <a className="cms-forgot-link">log in</a>
            </Link>

            <Link href="/auth/register">
              <a className="cms-forgot-link">register</a>
            </Link>
          </div>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Reset Password
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default ForgotPassword;
