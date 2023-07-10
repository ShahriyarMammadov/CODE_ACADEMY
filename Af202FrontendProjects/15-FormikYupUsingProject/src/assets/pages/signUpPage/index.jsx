import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, Form, Input, InputNumber, Select } from 'antd';
import axios from "axios"
import { SmileOutlined } from '@ant-design/icons';
import { Result } from 'antd';
import './index.scss'
import UsersPage from '../usersPage';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const SignUpPage = () => {
  let UsersDataArray = JSON.parse(localStorage.getItem('UsersData')) ?? []
  const [CountryData, setCountryData] = useState([])
  const [CityData, setCityData] = useState([])
  const [Welcome, setWelcome] = useState(false)
  const navigate = useNavigate()
  const [theme, setTheme] = useState('dark');


  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const onFinish = (values) => {
    let customerObj = {
      email: values.user.email,
      username: values.user.username,
      password: values.user.password,
      country: values.user.country,
    };

    UsersDataArray.push(customerObj)
    localStorage.setItem('UsersData', JSON.stringify(UsersDataArray))
    setWelcome(true)
  };
  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then((data) => setCountryData(data.data))
  }, [])

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  CityData.map((e) => {
    <UsersPage flag={e} />
  })

  return (
    <div className={`App ${theme}`}>
      {Welcome
        ?
        (<Result
          icon={<SmileOutlined />}
          title="Great, we have done all the operations!"
          extra={<Button type="primary" onClick={() => {
            navigate('/')
          }}>Next</Button>}
        />) : (
          <div>
            <div className="buttons">
              <div className="darkMode">
                <Button type="primary" onClick={toggleTheme}> <i className="fa-regular fa-moon"></i> Dark Mode</Button>
              </div>
              <NavLink to={'/'}>
                <Button type="primary" ghost>
                  LoginPage
                </Button></NavLink>
            </div>
            <NavLink to={'/'}></NavLink>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
              <Form.Item
                name={['user', 'fullname']}
                label="FullName"
                rules={[
                  {
                    required: true,
                    min: 5, message: 'Fullname must be minimum 5 and maximum 15 characters.',
                    max: 18,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'username']}
                label="UserName"
                rules={[
                  {
                    required: true,
                    min: 5, message: 'Username must be minimum 5 and maximum 10 characters.',
                    max: 10, 
                  },
                ]}
              >

                <Input />
              </Form.Item>

              <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                  {
                    type: 'email',
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'phone']}
                label="Phone"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Country" name={['user', 'country']}>
                <Select onChange={(e) => {
                  axios.get(`https://restcountries.com/v3.1/name/${e}`).then((data) => setCityData(data.data))
                }}>
                  <Select.Option disabled value='{e.name}'>Select the Country</Select.Option>
                  {CountryData.map((e) => {
                    return (
                      <>
                        <Select.Option key={e.name} value={e.name}>{e.name}</Select.Option>
                      </>
                    )
                  })}
                </Select>
              </Form.Item>
              <Form.Item label="City" name={['user', 'city']}>
                <Select>
                  <Select.Option disabled value='{e.capital}'>Select the City</Select.Option>
                  {CityData.map((el) => {
                    return (
                      <>
                        <Select.Option value={'city'}>{el.capital}</Select.Option>
                      </>
                    )
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                name={['user', 'password']}
                label="Password"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'resendpassword']}
                label="Resend Password"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  ...layout.wrapperCol,
                  offset: 8,
                }}
              >
                <Button id='signin' type="primary" htmlType="submit">
                  SIGN UP
                </Button>
              </Form.Item>
            </Form>
          </div>
        )
      }
    </div >
  )
}

export default SignUpPage