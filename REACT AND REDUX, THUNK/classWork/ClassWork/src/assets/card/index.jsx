import React, { useState, useEffect } from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Input, Space } from 'antd';
import axios from 'axios'

const { Meta } = Card;
const { Search } = Input;

const CardComp = () => {
    const [loading, setLoading] = useState(true);
    const [Data, setData] = useState([])
    const onChange = (checked) => {
        setLoading(!checked);
    };

    useEffect(() => {
        axios.get(`http://localhost:3000/results`)
            .then((response) => {
                setData(response.data)
            })
        setLoading(false)
    }, [])

    const onSearch = (value) => {
        axios.get(`http://localhost:3000/results`)
            .then((response) => {
                response.data.filter((e) => {
                    e.name.first.includes(value.target.value) && console.log(e)
                })
            })
    };
    console.log(Data)

    return (
        <>
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onChange={onSearch}
            />
            {Data.map((e) => {
                return (
                    <div className="kartlar">
                        <Card key={e.name.last}
                            style={{
                                width: 300,
                                marginTop: 16,
                            }}
                        >
                            <Skeleton loading={loading} avatar active>
                                <Meta
                                    avatar={<Avatar src={e.picture.large} />}
                                    title={`${e.name.first} ${e.name.last}`}
                                    description={`${e.location.country} ${e.location.city}`}
                                />
                            </Skeleton>
                        </Card>
                    </div>
                )
            })}
        </>
    );
}

export default CardComp