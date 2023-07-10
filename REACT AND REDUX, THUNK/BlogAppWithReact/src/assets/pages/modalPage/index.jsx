import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Card } from 'antd';
import { useNavigate, useParams } from 'react-router-dom'
import { Alert, Space, message, Button, Popconfirm, Input } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { Helmet } from "react-helmet";

const ModalComp = () => {
    const [Datas, setDatas] = useState([])
    const [Loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/blogs/${id}`).then((response) => setDatas(response.data))
    }, [])
    const [messageApi, contextHolder] = message.useMessage();
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [loadings, setLoadings] = useState([]);
    const [open, setOpen] = useState(false);

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Uğurla silindi',
        });
    };

    const showPopconfirm = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);

            axios.delete(`http://localhost:8000/blogs/${id}`)
            success()
            setTimeout(() => {
                navigate('/')
            }, 1000);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 1000);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        console.log(e.target[2].value)
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{Datas.blogTitle}</title>
                <link rel="canonical" href="/blogs" />
            </Helmet>
            {contextHolder}

            <Card key={Datas.blogTitle}
                title={Datas.blogTitle}
                bordered={false}
                style={{
                    width: 300,
                }}
            >
                <p style={{ color: 'red' }}>{Datas.blogBody}</p>
                <p>by: {Datas.blogAuthor}</p>
                <Popconfirm
                    title="Delete?"
                    description="həqiqətəndə bu gözəl blog u silmək istiyirsiz?"
                    open={open}
                    onConfirm={handleOk}
                    okButtonProps={{
                        loading: confirmLoading,
                    }}
                    onCancel={handleCancel}
                >
                    <Button type="primary">Edit</Button>
                    <Button type="primary" onClick={showPopconfirm}>
                        Delete
                    </Button>
                </Popconfirm>
            </Card>
            <form action="" onSubmit={handleSubmit}>
                <Input placeholder="Basic usage" />;
                <Input placeholder="Basic usage" />;
                <Input placeholder="Basic usage" />;
                <Button
                    type="primary"
                    htmlType='submit'
                    icon={<PoweroffOutlined />}
                    loading={loadings[1]}
                    onClick={() => enterLoading(1)}
                >
                    Edit
                </Button>
            </form>

        </div >
    )
}


export default ModalComp