import React from 'react'
import { Link, Route, Routes } from "react-router-dom"
import artImg1 from "../assets/article1.jpg"


export default function Article1() {
    return (
        <div className="article">
            <h1>It's Absolutely okay if the reason to start programming is good pay </h1>
            <h2>Just make sure that it is not the only driving force otherwise you might get stuck and quit eventually.
            </h2>
            <img className="feature-image" src={artImg1}
                alt="Photo by micheile dot com on Unsplash">
            </img>
            <p className='image-desc'>Photo by micheile dot com on Unsplash</p>

            <div className="content-body">
                <p>I personally believe that there’s no problem in wanting to become a developer for high pay. Career is an important undertaking, wrong ones can frustrate you for life and the right ones make that same life a glide. Desiring for financial security and a better lifestyle out of a career is absolutely fine. If we are putting effort and heart into a path or career then wanting financial progress is such a strong motivation for continuing.
                </p>
                <p>The problem is when financial success is the  only motivation to pursue anything quitting becomes easy when times become harder. I say that because I have done that. I started programming in 2017 because my husband earned really good as a software engineer and I wanted to be one too. I tried a couple of books to start coding but soon I lost interest and called it quits. I again tried to learn coding in 2019, but lack of good meaningful reasons caught up and I quit the journey again.</p>
                <p>This whole experience made me realize that if I want to flourish and really become good at what I want to do then I have to find different kinds of motivation. You may think that I am referring to passion but no, I am not. Lately, the word started to have a negative ring and when I went to Merriam Webster to understand what passion means I found one of the fist meaning for the word is-
                </p>
                <h2 className='qoutes'>“the sufferings of Christ between the night of the Last Supper and his death. ”
                </h2>
                <p>Mind Boggling, right! Now I am all the more convinced that passion theory is not only overrated but widely misunderstood too. Even if we don’t go by the implied meaning, which is suffering, the word does mean intense emotions, and strong emotions always fade. A lot of us believe that passion helps with consistency and perseverance, but actually, results help us with them. Once we start noticing the results, our confidence to persevere develops and continuing a path becomes easier than before.
                </p>
                <p>I have a friend who is a runner. She started running for aesthetic reasons but when she started noticing improvement in her stamina and overall mood, she continued. After four years she still feels that she is not where she wants herself to be aesthetically, but that reason doesn’t matter to her anymore. Now there are more relevant reasons to continue her fitness journey. I think what I am trying to convey is that as long as good results are there, we will be motivated to be consistent and sticking to difficult undertakings will keep getting easier.
                </p>
                <p>So what kind of results should we keep in mind while we are learning to code?
                </p>
                <p>
                    A simple google search helps with the answer. It says if you want to become a better problem solver, expand your creative abilities and skills then coding can help with them. So I believe these reasons are great motivators to keep learning programming.
                </p>
                <p>Next question will be how to quantify the results? It's not like running where I can see and measure my results. If you are thinking about it too, then it's a valid question. A common approach suggested by a lot of people who have successfully become developers without cs degrees on podcasts is to start coding 1 hour everyday. So maybe try that for a month and see how you feel about your coding skills.
                </p>
                <p>Also if you have spent a considerable time on an online course and still don’t see results then trying something else might be a better option. After lots of trial and error of learning to code online, I have realized that if you are a new learner then it is important to start projects within 45 - 60 days of your programming journey, no matter how basic the projects are. If that is not happening, then please switch to a different coursework.
                </p>
                <p>I have written an article on<Link className="links" to="/blog/feature"> three factors any new learner can consider while choosing an online  program to learn code.</Link> I hope that it could save you crucial time in selecting a pathway for learning to code online.
                </p>

            </div>
        </div>
    )
}