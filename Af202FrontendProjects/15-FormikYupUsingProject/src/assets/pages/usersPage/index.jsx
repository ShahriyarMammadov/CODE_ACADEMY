import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input, message, Space } from 'antd';
import './index.scss'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import axios from "axios"

const UsersPage = () => {
  const [theme, setTheme] = useState('dark');
  const [LocaleData, setLocaleData] = useState(JSON.parse(localStorage.getItem('UsersData')) ?? [])
  const [AxiosData, setAxiosData] = useState([])
  const { Meta } = Card;

  useEffect(() => {
    LocaleData.map((e) => {
      // console.log(e.country)
      fetch(`https://restcountries.com/v3.1/name/${e.country}`)
        .then((response) => response.json())
        .then((data) => {
          setAxiosData(data)
        })
    })
  }, [])


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

  return (
    <div className={`App ${theme}`}>
      <div className="darkMode">
        <Button type="primary" onClick={toggleTheme}> <i className="fa-regular fa-moon"></i> Dark Mode</Button>
      </div>
      {AxiosData.map((e) => {
        console.log(e)
        return (
          // <Card
          //   hoverable
          //   style={{ width: 240 }}
          //   cover={<img alt="example" src={e.flags.svg} />}
          // >
          //   <Meta title={e.name.common} description="www.instagram.com" />
          // </Card>
          <div className="card">
            <img src={e.flags.svg} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default UsersPage