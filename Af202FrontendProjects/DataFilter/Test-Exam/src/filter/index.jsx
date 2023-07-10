import React, { useState } from 'react'
import { users } from '../App';
import './index.scss'

const DataUsers = () => {
    const [Data, setData] = useState(users)
    const [arr, setArr] = useState([])



    const handleDelete = (e) => {
        let updateUsers = Data.filter(
            (elem) => elem.id != e.target.parentElement.parentElement.id
        );
        setData(updateUsers);
    };

    const lokalStorage = (e) => {
        Data.forEach((el) => {
            if (el.id == e.target.parentElement.parentElement.id) {
                let usersObj = {
                    id: el.id,
                    name: el.name,
                    email: el.email,
                };
                let array = JSON.parse(localStorage.getItem("Users")) ?? [];
                !array.some((el) => el.id == usersObj.id)
                    ? localStorage.setItem("Users", JSON.stringify([...array, usersObj]))
                    : alert("elave olunub!!!!");
            }
        });
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>E-MAIL</th>
                        <th>DELETE</th>
                        <th>ADD</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((element) => {
                        return (
                            <tr key={element.id} id={element.id}>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.email}</td>
                                <td><button id={element.id} className="delete" onClick={(e) => {
                                    handleDelete(e)
                                }}>DELETE</button></td>
                                <td><button id={element.id} onClick={(e) => {
                                    lokalStorage(e)
                                }}>ADD</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <input type="text" placeholder='enter the name' onChange={(e) => {
                let arr = JSON.parse(localStorage.getItem('Users'))
                let test = arr.filter((elem) => elem.name.includes(e.target.value))
                setArr(test)
            }} />

            {arr.map((e) => {
                return (
                    <p key={e.id}>{e.name}</p>
                )
            })}
        </div>

    )
}

export default DataUsers