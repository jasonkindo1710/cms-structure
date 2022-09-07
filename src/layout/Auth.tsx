import { Form } from "antd";
import Head from "next/head";
import { Children, useEffect, useState } from "react";

const AuthLayout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Authentication</title>
      </Head>
      <main>
        <div className="cms-auth-form">{children}</div>
      </main>
    </>
  );
};

export default AuthLayout;
