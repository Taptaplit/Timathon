import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from './axios';


export default function Content() {
    const [users, setUsers] = useState([]);

    const [data, setData] = useState({name: '', hobbie: ''});
    // async function fetchData() {
    useEffect(() => {
        const req = axios.get('/').then((req) => {    
            setUsers(req.data); 
        })
    })

    const handleSubmit = async (data) => {
        await axios.post('/create', data);

    }

    
    // setName('hi');
    

    // console.log(req.data);
    // }   


    // const usersDb = fetchData();

    // console.log(users);

    const brac1 = '{'
    const brac2 = '}'


    return (

        <div className="container">
            <Head>
                <title>MiniBoard</title>
                <link rel="icon" href="https://media.discordapp.net/attachments/771821245292609556/820392652779290624/unknown.png" />
            </Head>
            <a href="/v2"><button type="button" className="goBtn mg-20">Go Back To MiniBoard V2</button></a>
            <center>  
                <h1>MongoDB Visualizer</h1>
            </center>
            {users.map((arr) => (
                <div className="flex-box">
                    <ul className="bold">{brac1}
                        <li className="bold mg-20">{"'_id': " + arr._id}</li>
                        <li className="bold mg-20">{"'name': " + arr.name}</li>
                        <li className="bold mg-20">{"'hobby': " + arr.hobbie}</li>
                    {brac2}</ul>
                </div>
            ))}
            <center>
                <p className="bold">Name <input type="text" onChange={e => setData({ ...data, name: e.target.value })} /></p>
                <p className="bold">Hobby <input type="text" onChange={e => setData({ ...data, hobbie: e.target.value })} /></p>
                <button onClick={() => handleSubmit(data) }>Submit</button>
            </center>

      <style jsx> {`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
        .container {
            background:#159CD6;
            font-family:'Poppins';
        }

        .flex-box {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
        }

        ul {
            list-style: none;
           }

        section {
            height: 100vh;
        }

        .mg-20 {
            margin-left: 20px;
        }

        .bold {
            font-weight: bold;
        }

        .goBtn {
        font-weight: bold;
        font-family: 'Poppins';
        width: 200px;
        margin-bottom: 20px;
        height: 30px;
        border-radius: 10px;
        border: 2px solid white;
        background: transparent;
        margin-top: 20px;
        color: #fff;
        transition: 0.5s ease-in-out;
    }
    .goBtn:hover {
        width: 220px;
        height: 33px;
        background: white;
        border: 2px solid white;
        color: black;
        font-size: 15px;
    }

  `} </style>

    </div>
    )
}