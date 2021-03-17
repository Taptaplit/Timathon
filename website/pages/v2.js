import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import { GlobalStyle, Navbar } from "./index";

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
                <h1 className="thin-h1">MiniBoard V2!</h1>
                <h3 className="info">Here you will find interactive games/activites to do!</h3>
                <p className="italic">Scroll down!</p>

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
                    <h1 className="thin-h1">MiniBoard V2</h1>
                </center>
                <div className="flex-box">
                    <div className="cards">
                        <img src="https://camo.githubusercontent.com/302162957cd553d74c119d7a02fdaa41a56750c7b90822069310ccac0372d4ff/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3735343030343834353430343438373833312f3832303834323937313038373337323239382f756e6b6e6f776e2e706e67" />
                        <center>
                            <a href="/v2/draw.html"><h3 className="thin-h1 cards-title">Drawing Board</h3></a>
                        </center>
                        <p className="info">Express your creativity and visulization skills by drawing! You can change the line color and size. It also comes with clear and download functionality! Have fun playing around with it!</p>
                    </div>

                    <div className="cards">
                        <img src="https://camo.githubusercontent.com/4eef2c2fc2f206c780663cd213db74345c53c2632710898032f3cd40ca2f88f0/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3735343030343834353430343438373833312f3832313339383132343139343033373738302f756e6b6e6f776e2e706e67" />
                        <center>
                        <a href="/v2/dbVis"><h3 className="thin-h1 cards-title">MongoDB Visualizer</h3></a>
                        </center>
                        <p className="info">Never seen MongoDB documents before, well now is your chance! It visualizes each document, just like the MongoDB Compass. Be sure to fill out the small form at the bottom to add your name and hobby to the collection!</p>
                    </div>

                    <div className="cards">
                        <img src="https://camo.githubusercontent.com/39eaa409a16638b3eed9e48685368d49aab2988629ae6a10ba91883e139cf6ed/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3735343030343834353430343438373833312f3832313534393937343332373339343333342f756e6b6e6f776e2e706e67" />
                        <center>
                          <a href="/v2/data.html"><h3 className="thin-h1 cards-title">Pie Ploter</h3></a>
                        </center>
                        <p className="info">Give information & plot your pie chart right now!</p>
                    </div>
                </div>
            </motion.div>
      </section>

      <style jsx> {`

      .cards-title:hover {
        text-decoration: underline;
      }
      
      
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
        background-color: transparent;
        border: 5px solid white;
        border-radius: 10px;
        color: black;
        padding: 10px;
        transition: 0.5s ease-in-out;
    }

    .cards:hover {
        border: 10px solid black;
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

  `} </style>

    </div>
    )
}