import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from '../api/axios';
import { GlobalStyle } from "../index";
import CircularProgress from '@material-ui/core/CircularProgress';   


export default function Content() {
    const [users, setUsers] = useState([]);

    const [data, setData] = useState({name: '', hobbie: ''});
    const [load, setLoad] = useState(true);
    // async function fetchData() {
    useEffect(() => {
        const req = axios.get('/').then((req) => {    
            setUsers(req.data); 
        })
    })

    const handleSubmit = async (data) => {
        await axios.post('/create', data);
    }
    
    useEffect(() => {
        if (users.length !== 0) {
            setLoad(false);
        }
    }, [users])

    
    // setName('hi');
    

    // console.log(req.data);
    // }   


    // const usersDb = fetchData();

    // console.log(users);

    const brac1 = '{'
    const brac2 = '}'


    return (
        load ? (
            <div className="container">
                <Head>
                    <title>MiniBoard</title>
                    <link rel="icon" href="https://media.discordapp.net/attachments/771821245292609556/820392652779290624/unknown.png" />
                </Head>
                <section>
                    <a href="/v2"><button type="button" className="goBtn mg-20">Go Back To MiniBoard V2</button></a>
                    <center>  
                        <h1>MongoDB Visualizer</h1>
                        <h5>**Scroll down to add your name & hobby!</h5>
                        <p>Loading...</p>
                        <CircularProgress />
                    </center>
                </section>
                <GlobalStyle />
            </div>
            ) : (
            <div className="container">
                <Head>
                    <title>MiniBoard</title>
                    <link rel="icon" href="https://media.discordapp.net/attachments/771821245292609556/820392652779290624/unknown.png" />
                </Head>
                <section>
                    <a href="/v2"><button type="button" className="goBtn mg-20">Go Back To MiniBoard V2</button></a>
                    <center>  
                        <h1>MongoDB Visualizer</h1>
                        <h5>**Scroll down to add your name & hobby!</h5>
                        <p>Enjoy!</p>
                    </center>
                    {users.map((arr) => (
                        <div className="flex-box">
                            <ul className="bold">{brac1}
                                <li className="bold mg-20">{"'_id': " + '"' + arr._id + '"'}</li>
                                <li className="bold mg-20">{"'name': " + '"' + arr.name + '"'}</li>
                                <li className="bold mg-20">{"'hobby': " + '"' + arr.hobbie + '"'}</li>
                            {brac2}</ul>
                        </div>
                    ))}
                    <center>
                        <p className="bold">Name <input className="modern-btn" type="text" onChange={e => setData({ ...data, name: e.target.value })} /></p>
                        <p className="bold">Hobby <input className="modern-btn" type="text" onChange={e => setData({ ...data, hobbie: e.target.value })} /></p>
                        <button onClick={() => handleSubmit(data) } className="goBtn">Submit</button>
                    </center>
                </section>

        <GlobalStyle />
        <style jsx> {`


            .modern-btn {
                background: transparent;
                border: 1px solid #159CD6;
                border-bottom: 2px solid #fff;
                color: white;
                transition: 0.7s ease-in-out;
            }

            .modern-btn:hover {
                transition: 0.7s ease-in-out;
                width: 200px;
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

            .mg-20 {
                margin-left: 20px;
            }

            

    `} </style>

        </div>
        )
    )
}