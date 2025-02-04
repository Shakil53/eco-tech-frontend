"use client";

import Link from "next/link";
import { Form, Input, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";

export default function Login() {
  const onFinish = async (values: any) => {};

  return (
    <div className="min-h-screen bg-[#f8f0ff] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-[90%] sm:max-w-[480px] bg-white rounded-lg p-6 sm:p-8 shadow-sm">
          <div className="flex justify-center mb-6 sm:mb-8">
            <Link href="/">
              <p className="text-[32px] sm:text-[40px] font-bold text-center">
                USER INFO
              </p>
            </Link>
          </div>

          <h1 className="text-center text-sm sm:text-md font-semibold text-gray-800 mb-6 sm:mb-8">
           MAKE YOU LISTING
          </h1>

          <Form
            name="login"
            onFinish={onFinish}
            layout="vertical"
            requiredMark={false}
          >
            <Form.Item
              label={<span className="text-sm">*Username</span>}
              name="email"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                type="email"
                placeholder="Enter Email"
                className="h-10 sm:h-11 text-base"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-sm">*Password</span>}
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Enter Password"
                className="h-10 sm:h-11 text-base"
                iconRender={(visible) => (
                  <EyeOutlined className={visible ? "text-blue-500" : ""} />
                )}
              />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                className="w-full h-10 sm:h-11 bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-600"
              >
                Login
              </Button>
            </Form.Item>
            <div>
              <h1 className="text-center mb-3 md:mb-5 text-gray-500">
                <span className="text-sm">Don't have an account?</span>
                <Link className="text-purple-500 text-sm" href="/signup">
                  {" "}
                  Sign up
                </Link>
              </h1>
            </div>

            <div className="text-center">
              <Link
                href="/forgot-password"
                className="text-blue-500 hover:text-blue-600"
              >
                Forgot Username or Password
              </Link>
            </div>
          </Form>
        </div>
      </div>

      <footer className="py-4 sm:py-6 text-center text-xs sm:text-sm">
        <div className="space-x-4 sm:space-x-6 mb-2">
          <Link href="/terms" className="text-blue-500 hover:text-blue-600">
            Terms of Use
          </Link>
          <Link href="/privacy" className="text-blue-500 hover:text-blue-600">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-blue-500 hover:text-blue-600">
            Contact Us
          </Link>
        </div>
        <p className="text-gray-600">
          © 2025 CreditScoreIQ™ | All rights reserved
        </p>
      </footer>
    </div>
  );
}
