import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { Card, Spin } from 'antd';
import axios from 'axios'
import './App.css'
import { useRef } from 'react'

function App() {
  const [Data, setData] = useState([])
  const [api, setApi] = useState([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`http://universities.hipolabs.com/search?name=`)
      .then((response) => setApi(response.data))
    setLoading(false)
  }, [])

  const handleSearch = (e) => {
    axios.get(`http://universities.hipolabs.com/search?name=${Data}`)
      .then((response) => setApi(response.data))
  }

  return (
    <div className="App">
      <input type="text" onChange={(e) => {
        setData(e.target.value)
        handleSearch(Data)
      }} />
      <button>Search</button>

      {Loading ? (<Spin />) : (
        <div className="results">
          {api.map((e, i) => {
            return (
              <Card key={i}
                title={e.name}
                bordered={false}
                style={{
                  width: 300,
                }}
              >
                <p>{e.country}</p>
                <a>{e.web_pages}</a>
                <p>{e.alpha_two_code}</p>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default App
