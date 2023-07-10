import "./App.css";
import { Table, Button, Modal, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Delete",
      dataIndex: "id",
      key: "id",
      render: (id) => {
        return (
          <>
            <div>
              <button
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => {
                  handleDelete(id);
                }}
              >
                Delete
              </button>
              <button
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => {
                  showModal(id);
                }}
              >
                Edit
              </button>
            </div>
          </>
        );
      },
    },
  ];

  const [data, setData] = useState([]);
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [inp3, setInp3] = useState("");

  const handleDelete = (id) => {
    const newData = data.filter((e) => e.id !== id);
    console.log(newData);
    setData(newData);

    axios.delete(`http://localhost:8000/users/${id}`);
  };

  const showModal = (id) => {
    handleEdit(id);
    setIsModalOpen(true);
  };
  const handleOk = (id) => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (id) => {
    const obj = {
      name: inp1,
      username: inp2,
      email: inp3,
    };
    axios.put(`http://localhost:8000/users/${id}`, obj);
  };

  const func = async () => {
    let response = await axios.get("http://localhost:8000/users");
    setData(response.data);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(inp1);
  useEffect(() => {
    func();
  }, []);

  return (
    <div className="App">
      <Table dataSource={data} columns={columns} />;
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={() => {
          handleOk();
        }}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Name"
          onChange={(e) => {
            setInp1(e.target.value);
          }}
        />
        <Input
          placeholder="UserName"
          onChange={(e) => {
            setInp2(e.target.value);
          }}
        />
        <Input
          placeholder="Email"
          onChange={(e) => {
            setInp3(e.target.value);
          }}
        />
      </Modal>
    </div>
  );
}

export default App;
