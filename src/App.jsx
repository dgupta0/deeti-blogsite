import React from 'react'
import { Link, Route, Routes } from "react-router-dom"

import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"
import Home from "./Pages/Home.jsx"
import Feature from './Pages/Feature'
import Article1 from './Pages/Article1'
import Article2 from './Pages/Article2'
import Article3 from './Pages/Article3'

import menu from "./assets/menu.png"
import close from "./assets/close.png"
import smilelogo from "./assets/smile.png"


function App() {
  const [sidebar, setSideBar] = React.useState(false)
  function displaySideBar() {
    setSideBar(prev => !prev)
  }

  return (
    <div className="appBody">
      <header>
        <Link to="/">
          <div className='blog-title'>
            <h1 className='title'>That's how I feel!</h1>
            <img className="logo" src={smilelogo} alt="smile logo by freepik" />
          </div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {!sidebar ?
          (<img
            className="menu"
            onClick={displaySideBar}
            src={menu}
            alt="menu from freepik" />

          )
          :
          (
            <div className="sidebar">
              <div className='close-div'>
                <img
                  className="close"
                  onClick={displaySideBar}
                  src={close}
                  alt="menu from freepik" />
              </div>

              <nav className='nav-side'>
                <ul className='side-ul'>
                  <li>
                    <Link
                      onClick={displaySideBar}
                      className="side-links"
                      to="/">Home</Link>
                  </li>
                  <li>
                    <Link
                      onClick={displaySideBar}
                      className="side-links"
                      to="/about">About me</Link>
                  </li>
                  <li>
                    <Link
                      onClick={displaySideBar}
                      className="side-links"
                      to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          )
        }
      </header >

      <Routes>
        <Route path="/*" element={<Home />}>
        </Route>
        <Route path="/blog/feature" element={<Feature />}></Route>
        <Route path="/blog/article1" element={<Article1 />}></Route>
        <Route path="/blog/article2" element={<Article2 />}></Route>
        <Route path="/blog/article3" element={<Article3 />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <footer>
        <Link to="/"><h2>Home @ That's How I Feel</h2></Link>
      </footer>
    </div>

  )
}

export default App
