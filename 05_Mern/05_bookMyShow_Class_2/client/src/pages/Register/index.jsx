import React from 'react'
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from '../../api/users';


function Register() {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const response = await RegisterUser(values);
            if (response.success) {
                message.success(response.message);
                navigate("/login");
            } else {
                message.error(response.message);
            }

        } catch (err) {
            console.log("While try to establish a server connection for register endpoint. Something unexted happened. For more details:", err);
            message.error(err.message);
        }
    }
    return (
        <>
            <main className='App-header'>
                <h1>Register to BookMyShow</h1>
                <section className="main-area mw-500 text-center px-3">
                    <Form layout="vertical" onFinish={onFinish}>

                        <Form.Item
                            label="Name"
                            htmlFor="name"
                            name="name"
                            className='d-block'
                            rules={[{ required: true, message: "Name is required." }]}
                        >

                            <Input
                                id="name"
                                type="text"
                                placeholder='Enter Your Name Here.'
                            />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            htmlFor="email"
                            name="email"
                            className="d-block"
                            rules={[{ required: true, message: "Email is required." },
                            { type: "email", message: "Please enter a valid email id." }
                            ]}
                        >

                            <Input
                                id="email"
                                type="text"
                                placeholder="Enter your Email"
                            ></Input>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            htmlFor="password"
                            name="password"
                            className="d-block"
                            rules={[{ required: true, message: "Password is required." }]}
                        >

                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your Password"
                            ></Input>
                        </Form.Item>

                        <Form.Item className="d-block">
                            <Button
                                type="primary"
                                block
                                htmlType="submit"
                                style={{ fontSize: "1rem", fontWeight: "600" }}
                            >
                                Register
                            </Button>
                        </Form.Item>

                    </Form>

                    <div>
                        <p>
                            Already a user? <Link to="/login">Login Now</Link>
                        </p>
                    </div>

                </section>
            </main>
        </>
    )
}

export default Register
