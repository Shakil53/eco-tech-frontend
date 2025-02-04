"use client";

import { Button, Form, Input, Upload } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserInfo = () => {
  const [step, setStep] = useState(1);
  const [form] = Form.useForm();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fileList, setFileList] = useState([]);

  const router = useRouter();

  const onFinish = (values: any) => {};

  console.log("Form Submitted with Values:", {
    fname,
    lname,
    age,
    address,
    phone,
    email,
    password,
    image: fileList?.length > 0 ? fileList[0]?.originFileObj : null,
  });

  return (
    <div className="p-4 mx-auto h-screen overflow-y-auto overflow-x-hidden w-full bg-white dark:bg-black">
      <div className="mx-auto max-w-[750px] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">User Info</h1>
        <p>Please fill out the form below:</p>
        <p>Fields marked with * are required.</p>
        <p>
          <span className="text-red-500">*</span> Indicates required field
        </p>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="flex flex-col gap-4 max-w-[750px] mx-auto"
      >
        {step === 1 && (
          <>
            <Form.Item className="!m-0" label="User Name" name="fname">
              <Input
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                allowClear
                placeholder="Enter your first name"
              />
            </Form.Item>
            <Form.Item className="!m-0" label="Last Name" name="lname">
              <Input
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                allowClear
                placeholder="Enter your last name"
              />
            </Form.Item>
            <Form.Item className="!m-0" label="Age" name="age">
              <Input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                allowClear
                placeholder="Enter your age"
                type="number"
              />
            </Form.Item>
          </>
        )}

        {step === 2 && (
          <>
            <Form.Item className="!m-0" label="Address" name="address">
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                allowClear
                placeholder="Enter your address"
              />
            </Form.Item>
            <Form.Item className="!m-0" label="Phone" name="phone">
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                allowClear
                placeholder="Enter your phone number"
              />
            </Form.Item>
            <Form.Item className="!m-0" label="Email" name="email">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                allowClear
                placeholder="Enter your email"
                type="email"
              />
            </Form.Item>
            <Form.Item className="!m-0" label="Password" name="password">
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                allowClear
                placeholder="Enter your password"
              />
            </Form.Item>
          </>
        )}

        {step === 3 && (
          <>
            <Form.Item className="!m-0" label="Image Upload" name="image">
              <Upload
                listType="picture"
                fileList={fileList}
                beforeUpload={() => false}
                onChange={({ fileList }: any) => setFileList(fileList)}
              >
                <Button>Upload</Button>
              </Upload>
            </Form.Item>
          </>
        )}

        <Button
          type="primary"
          onClick={() => {
            if (step < 3) {
              setStep(step + 1);
            } else {
              form.submit();
              router.push("/");
            }
          }}
        >
          {step < 3 ? "Next" : "Submit"}
        </Button>
      </Form>
    </div>
  );
};

export default UserInfo;
