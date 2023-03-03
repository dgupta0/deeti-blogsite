import React from 'react'
import { Link, Route, Routes } from "react-router-dom"
import Feature from "./Feature"
import Article1 from './Article1'
import Article2 from './Article2'
import Article3 from './Article3'

import artImg1 from "../assets/article1.jpg"
import artImg2 from "../assets/article2.jpg"
import artImg3 from "../assets/article3.jpg"

export default function Home() {
    return (
        <>
            <Link to="/blog/feature">
                <div className="hero">
                    <div className='hero-content'>
                        <p>16/11/2022</p>
                        <h1>Three factors to consider while learning to code online
                        </h1>
                        <h4>A  guide for mature new learners with no CS degree but strong motivation to learn coding online.

                        </h4>
                    </div>

                </div>
            </Link>
            <h1 className='recent-posts-heading'>Recent Posts</h1>
            <div className='posts'>
                <Link to="/blog/article1">
                    <div className='blog-items art1'>
                        <img src={artImg1}
                            alt="Photo by micheile dot com on Unsplash">
                        </img>
                        <div className='article-description'>
                            <p>March 2nd 2023</p>
                            <h2>It is Absolutely okay if the reason to start programming is good pay
                            </h2>
                            <h3>Just make sure that it is not the only driving force to  pursue the journey otherwise you might get stuck and quit eventually.
                            </h3>
                        </div>
                    </div>
                </Link>
                <Link to="/blog/article2">
                    <div className='blog-items art2'>
                        <img src={artImg2} alt="Image by vectorjuice on Freepik"></img>
                        <div className='article-description'>
                            <p>March 2nd 2023</p>
                            <h2>How I actually started learning Javascript
                            </h2>
                            <h3>
                                And made progress in basic datatype manupulation to get myself started with leetcode.
                            </h3>
                        </div>
                    </div>
                </Link>
                <Link to="/blog/article3">
                    <div className='blog-items art3'>
                        <img src={artImg3} alt="Photo by Gaelle Marcel on Unsplash"></img>
                        <div className='article-description'>
                            <p>October 12 2022</p>
                            <h2>My so far programming journey - a ramble
                            </h2>
                            <h3>A series of constant failures, learnings and I cant believe I am saying this but joy too.
                            </h3>
                        </div>
                    </div>
                </Link>
            </div>


            <Routes>
                <Route
                    path="/blog/feature"
                    element={<Feature />}>
                </Route>
                <Route
                    path="/blog/article1"
                    element={<Article1 />}>
                </Route>
                <Route
                    path="/blog/article2"
                    element={<Article2 />}>
                </Route>
                <Route
                    path="/blog/article3"
                    element={<Article3 />}>
                </Route>
            </Routes>
        </>
    )
}