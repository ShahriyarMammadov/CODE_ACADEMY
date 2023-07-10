import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, message, Space } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom'
import { Col, Row, Statistic, Alert } from 'antd';
import './index.scss'


const LoginPage = () => {
    const [LocaleData, setLocaleData] = useState([])
    const [ActiveUsers, setActiveUsers] = useState(0)
    const [messageApi, contextHolder] = message.useMessage();
    const navigation = useNavigate()
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const key = 'updatable';
    const openMessage = () => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Yoxlanılır',
        });
        setTimeout(() => {
            messageApi.open({
                key,
                type: 'success',
                content: 'Daxil Olunur',
                duration: 2,
            });
            setTimeout(() => {
                navigation('/users')
            }, 2200)
        }, 2000);
    };

    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Password is inCorrect',
        });
    };
    const warning = () => {
        messageApi.open({
            type: 'warning',
            content: 'This is a warning message',
        });
    };


    console.log(LocaleData)
    useEffect(() => {
        setLocaleData(JSON.parse(localStorage.getItem('UsersData')))
        const loginArray = JSON.parse(localStorage.getItem('UsersData'))
        setActiveUsers(loginArray.length)
    }, [setActiveUsers])

    const onFinish = (values) => {
        console.log('Success:', values.username);
        LocaleData.filter((data) => { data.username == values.username && data.password == values.password && openMessage() })
        // LocaleData.filter((data) => {
        //     if (data.username == values.username) {
        //         console.log('salam')
        //         if (data.password == values.username) {
        //             ''
        //         } else {
        //             error()
        //         }
        //     } else {
        //         warning()
        //     }
        // })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={`App ${theme}`}>
            <div className="buttons">
                <div className="darkMode">
                    <Button type="primary" onClick={toggleTheme}> <i className="fa-regular fa-moon"></i> Dark Mode</Button>
                </div>
                {contextHolder}
                <NavLink to={'/signup'}>    <Button type="primary" ghost>
                    SignUp
                </Button></NavLink>
            </div>

            <Form
                name="basic"
                labelCol={{
                    span: 10,
                }}
                wrapperCol={{
                    span: 6,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            // onSubmit={handleSubmit}
            >
                {/* {console.log("error", errors)} {console.log("error", errors)}{" "} */}

                <Form.Item
                    label="Username"
                    name="username"
                    // onChange={handleChange}
                    // onChange={(e) => console.log(e.target.value.length)}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >

                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    // onChange={handleChange}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 10,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 12,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        LOGIN
                    </Button>
                </Form.Item>
            </Form>
            <Col span={4} id='statistic'>
                <Statistic title="Total Users" value={ActiveUsers} />
            </Col>
        </div >
    )
}

export default LoginPage