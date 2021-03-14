import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import { Navbar } from "./index";

export default function Content() {
    return (
        <div className="container">
      <Head>
        <title>MiniBoard</title>
        <link rel="icon" href="https://media.discordapp.net/attachments/771821245292609556/820392652779290624/unknown.png" />
      </Head>
      <section>
        <center>
          <Navbar />
        </center>
        <div className='centerA'>
          <div>
            <center>
              <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                      scale: .1,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .5
                  }
                },
              }}>
                <h1 className="thin-h1">MiniBoard Games & Activites!</h1>
                <h3 className="info">Here you will find games and activites packed inside MiniBoard Application!</h3>
                <p className="italic">Scroll down to check them out!</p>

              </motion.div>
            </center>
              
          </div>
        </div>
        <center>
          <a href="#games">
            <div className="scrolldown">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </center>
      </section>
      <section id="games">
        <br />
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
                <center>
                    <h1 className="thin-h1">Games & Activites</h1>
                </center>
                <div className="flex-box">
                    <div className="cards">
                        <img src="https://camo.githubusercontent.com/b29c9b294d6a16d7b9dc33c3ffb5fc9f07af0e3451f4d5cc8e8a8b3414b4614b/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3735343030343834353430343438373833312f3832303339383233343331363330383438302f756e6b6e6f776e2e706e67" />
                        <center>
                            <h3 className="thin-h1">Energised</h3>
                        </center>
                        <p className="info">A single player 2D game made with pygame. Controls: Player 1: right, left arrow keys to move side to side & space bar to move up The goal is to collect as many dots as possible, every 2 seconds the amount to dots += 1. More collected dots = Higher score!</p>
                    </div>

                    <div className="cards">
                        <img src="https://camo.githubusercontent.com/5721a665d100b2d57039741e4f2265800e69e6673ebf0b8a6627b238d675806e/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3735343030343834353430343438373833312f3832303339343639343137363933313836302f756e6b6e6f776e2e706e673f77696474683d343439266865696768743d343238" />
                        <center>
                            <h3 className="thin-h1">Pong Game</h3>
                        </center>
                        <p className="info">A multiplayer 2D game made with pygame. Controls: Player 1: W, S to move the paddle up and down | Player 2: Up, Down Arrow Keys to move the paddle up and down. The goal is to hit the ball with your paddle, if you miss it and it does behind your paddle, the other player gets a point. First to 21 wins!</p>
                    </div>

                    <div className="cards">
                        <a href="https://media.discordapp.net/attachments/754004845404487831/820492310164013056/unknown.png"><img src="https://media.discordapp.net/attachments/754004845404487831/820492310164013056/unknown.png" /></a>
                        <center>
                            <h3 className="thin-h1">ISS Location</h3>
                        </center>
                        <p className="info">Plots the location of the International Space Station!</p>
                    </div>
                </div>
            </motion.div>
      </section>

      <style jsx> {`
      .centerA {
        margin-top: 100px;
        scroll-behavior: smooth;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
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


      section {
        min-height: 100vh;
      }
      @import url('https://fonts.googleapis.com/css2?family=Niconne&display=swap');
    .flex-box {
        width: 75%;
        display: flex;
        flex-direction: column;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 0 auto;
    }
    .small img {
        height: 150px;
    }
    
    .cards {
        margin: 1%;
        min-width: 25%;
        max-width: 28%;
        height: 25%;
        background-color: white;
        border-radius: 10px;
        color: black;
        padding: 10px;
    }
    
    .cards img, .card img{
        margin: 0 auto;
        justify-content: center;
        width: 90%;
        margin-left: 5%;
        border-radius: 10px;
    }
    .cards p, .card p, .cards-silver p, .cards-bronze p {
        margin: 0 auto;
        text-align: center;
        width: 95%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
      .container {
        scroll-behavior: smooth;
        background: #159CD6;
      }
      .thin-h1 {
        font-weight: 300;
      }
      .italic {
        font-weight: 100;
        font-style: italic;
      }
      .info {
        font-weight: 200;
      }

  `} </style>

    </div>
    )
}