import React from 'react'
import { Link } from 'react-router-dom'
import artImg2 from "../assets/article2.jpg"

export default function Article2() {
    return (
        <div className="article">
            <h1> How I actually started learning Javascript
            </h1>
            <h2>  And finally made progress in basic datatype manupulation which ultimately helped me get started with leetcode.
            </h2>
            <img className="feature-image" src={artImg2}
                alt="Image by vectorjuice on Freepik">
            </img>
            <p className='image-desc'>Image by vectorjuice on Freepik</p>
            <div className="content-body">
                <p>My on and off Javascript journey has been going on for the last three years through different platforms and mediums. I tried an O'riley book to learn Javascript, Udacity’s Frontend Nano degree program, and Colt Steel’s Full Stack course on udemy, but unfortunately,  none helped me learn- how to program or how to use a programming language.
                </p>
                <p>By that I am not trying to insinuate that these courses are bad. They just didn’t work out for me! It could be because they were harder for my level or maybe I just needed to give them a second try. Anyway, long story short those directions didn’t work out for me as I couldn’t learn how to use a language to program.
                </p>
                <p>After lots of trial and error, I came across <Link className="links" to="https://www.freecodecamp.org/learn">freeCodeCamp</Link>. I did their legacy Responsive Design certificate. In my opinion, It is one of the best introductory courses on Web Development. Through this course I quickly got into writing code, which was a huge confidence booster.
                </p>
                <p>Anyway, more on it maybe later. For now let's fast forward to my learnings through Javascript and Data Structures Algorithm certificate.
                </p>
                <p>Okay. So where was I?
                </p>
                <p>Yeah. So, It was only through the <Link className="links" to="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/">freeCodeCamp javascript certificate course</Link>,  I started feeling confident in using a programming language. The course is well designed and it quickly puts me up to problem solving by using javascript. The course gave good exposure in algorithm designing. By this I mean I eventually started solving easy leetcode problems.
                </p>
                <p>The journey was so frustrating but if shown determination it does get rewarding too.
                </p>
                <p>The certificate covers different programming paradigms, styles and versions, particularly and widely used ES6, Object Oriented Programming, functional programming and few more.  I took those sections as they were coming, which means not stressing over or  trying too hard to memorize the methods (even push, splice, slice etc)  or even what they do or new and shorter ways to define functions. Instead I used google to find those answers everytime I needed them. </p>
                <p>Initially the course seemed like an average, theoretical course. But things really got challenging with basic scripting/algorithm challenges. These challenges felt like Sisyphus Boulder especially in the beginning. But honestly, each of them really forced me to think like a programmer. By the way, I am not saying I know what it is to  think like a programmer. But all I can say is each challenge made me one step closer towards the mindset.
                </p>
                <p>
                    These challenges were hard. They were rattling. Each challenge made me feel I couldn't do it. Programming is not for me. But completing one challenge leads to second and to third and then rest feels like a domino effect.
                </p>
                <p>This course was also useful in helping me getting started with
                    leetcode problems. I find this a big victory because
                    I knew where I was a year ago and how difficult it
                    was for me to even patiently read the problem description.
                    Though my leetcode journey is slower than a tortoise and I have
                    only solved twenty five challenges,  at least now, I am comfortable
                    with easy array and string problems. </p>
                <p> think the point
                    I am trying to make here is when I completed the FCC second certification, it took away my fear, inhibitions I had for algorithmic challenges.I
                    Now, I feel I am somewhere between a beginner to intermediate level in data structures and algorithms.</p>
                <p>I know I still have a lot of milestones to cover during this programming journey, but I can honestly say that this certificate is definitely a big step in that direction for me.
                </p>
                <p>Thanks freeCodeCamp
                </p>
            </div>
        </div>
    )
}