import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');

  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins";
    scroll-behavior: smooth;
    background-size: cover;
    background-attachment: fixed;
    overflow-x: hidden;
    overflow-y: scroll;
    background:#159CD6;
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

  .centerA {
    margin-top: 100px;
    scroll-behavior: smooth;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  section {
    min-height: 100vh;
  }
  
::-webkit-scrollbar {
  display: none;
}
.element::-webkit-scrollbar { width: 0 !important }

.bold {
  font-weight: bold;
}

.thin-h1 {
  font-weight: bold;
}
.italic {
  font-weight: 100;
  font-style: italic;
}
.info {
  font-weight: bold;
}

.scrolldown {
  scroll-behavior: smooth;
  position: absolute;
  bottom: 20px;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translateY(-80px) translateX(-30px) rotate(45deg);
}

.scrolldown span {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  animation: animate 1.5s linear infinite;
  opacity: 0;
}

.scrolldown span:nth-child(1) {
  transform: translate(-15px, -15px);
  animation-delay: -0.4s;
}

.scrolldown span:nth-child(2) {
  transform: translate(0, 0);
}

.scrolldown span:nth-child(3) {
  transform: translate(15px, 15px);
}

@keyframes animate
{
  0% {
    top: -5px;
    left: -5px;
    opacity: 0;
  }
  25% {
    top: 0px;
    left: 0px;
    opacity: 1;
  }
  100% {
    top: 5px;
    left: 5px;
    opacity: 0;
  }
}


`;


export function Navbar() {
  return (
      <div className="header">
        
        <motion.div initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .2,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .8
            }
          },
        }}>
          <a href="/v2" className="nav">
              <h3>MiniBoard V2</h3>
          </a>
          <a href="/content" className="nav">
              <h3>MiniBoard App</h3>
          </a>
          <a href="/" className="nav">
              <h3>Home</h3>
          </a>
        </motion.div>

      <GlobalStyle />
      <style jsx>{`
      body{
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        overflow-y: hidden;
        scroll-behavior: smooth;
      }
      .header {
        margin: 0;
        justify-content: center;
        padding: 0;
        display: flex;
        height: 40px;
        width: 100%;
        transition: 0.3s;
        position: relative;
        z-index: 1000000;
      }
      .space {
        margin-left: 23%;
      }
      .nav {
        float: right;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Poppins";
        flex-direction: center;
        text-decoration: none;
        margin: 20px;
        font-size: 20px;
        color: #fff;
        transition: 0.7s;
        text-align: center;
      }
      .nav:hover {
        color: #353638;
        font-size: 23px;
        font-family: "Poppins";
        font-style: bolder;
      }
      `}</style>
      </div>
  )
}


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>MiniBoard</title>
        <link rel="icon" href="https://media.discordapp.net/attachments/771821245292609556/820392652779290624/unknown.png" />
      </Head>
      <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section>
          <center>
            <Navbar />
          </center>
          <div className='centerA'>
            <div>
              <center>
                <motion.div initial="hidden" animate="visible" variants={{
                  hidden: {
                    scale: .2,
                    opacity: 0
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: .6
                    }
                  },
                }}>
                  <h1 className="thin-h1">MiniBoard</h1>
                  <h3 className="info">Have a ton of fun playing all sorts of games and activites from the 2D pong game to 2D soccer to the ISS location!</h3>
                  <p className="italic">Having Fun -> Being Positive -> Better Mindset</p>

                </motion.div>
              </center>
                
            </div>
          </div>
          <center>
            <a href="#download">
              <div className="scrolldown">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </center>
        </section>
        <section id="download">
          <center>
            <div className="card1">
              <div className="space"></div>
              <h2 className="thin-h1 marginT" >Download The MiniBoard App</h2>
              <a className="info link" href="https://github.com/Taptaplit/Timathon"><p>Click here to download the MiniBoard App!</p></a>
              <hr className="black-border"/>
              <h3 className="thin-h1">Instructions</h3>
              <p className='info'>Scroll Down to the README.md file</p>
              <p className="info marginB">Follow the simple installation & run guide! If you are having trouble, you can just visit MiniBoard Website Edition (MiniBoard V2).</p>
              <p>ENJOY!!</p>
            </div>
            <img className="LOGO" src="https://camo.githubusercontent.com/2fc50652cd9d3626fd858627fc482c8ba341195e9f06cec77346f9ac094087e9/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3737313832313234353239323630393535362f3832303339323635323737393239303632342f756e6b6e6f776e2e706e67" alt="MiniBoard Logo" />
          </center>
        </section>
      </motion.div>
      <style jsx> {`
      .black-border {
        border: 1px solid black;
      }
      .LOGO {
        height: 400px;
      }

      
      .space {
        margin: 10px;
      }
      .link:hover {
        text-decoration:underline;
      }
      .marginT {
        margin-top: 20px;
      }
      .marginB {
        margin-bottom: 20px;
      }
      .card1 {
        width: 50%;
        margin: 10px !important;
        border-radius: 20px;
        scroll-behavior: smooth;
      }
      

  `} </style>

    </div>
    
  )
}
