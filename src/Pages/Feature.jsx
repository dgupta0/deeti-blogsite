import React from 'react'
import { Link } from 'react-router-dom'
import hero from "../assets/hero.jpg"

export default function Feature() {
    return (
        <div className="article">
            <h1> Three factors to consider while learning to code online</h1>
            <h2>A  guide for mature new learners with no CS degree but strong motivation to learn coding online
                and become professional programmers. </h2>
            <img className="feature-image" src={hero}
                alt="Photo from Unsplash">
            </img>
            <p className='image-desc'>Image from Unsplash</p>
            <div className="content-body">
                <p> Learning to code online is hard. Not because there's a lack of course providers on the internet, but because there are so many. I have personally gone through that struggle. For a very long time, I had been stuck in the journey of wanting to become a software developer and fast forward to a few years and still wanting to become a software developer. I felt my goal was clear but the direction wasn’t. Absolute beginners who are aspiring to become a programmer, especially those with no science background, have an even harder time. There's a decision involved in figuring out why you want to code, then finding a programming language to learn, then a good course to learn from and a niche you want to build your skills in. I am sure if anyone does a quick search on “how to become a software developer” the information will be overwhelming and can also discourage so many new learners.</p>

                <p>I personally feel that going back to a university programme or investing in a good bootcamp are better choices than starting through the internet, but if you have no choice but to learn by yourself then I hope this article could help you kickstart your coding journey online. </p>

                <p>After trying several courses online and struggling for a couple of years I have identified three factors that new learners can consider while choosing a course or path to learn coding online.</p>

                <h3>1. Interactive Interface:</h3>
                <p>If you are someone who have tried a couple of courses online
                    to learn coding and have failed to learn any skills from them,
                    then it might be that you are stuck in tutorial hell.
                    This means that you are just watching videos and not
                    actually building anything.</p>
                <p> Personally I would also
                    include mimicking the code of the instructor on the editor as tutorial hell
                    too because rarely we learn anything from it. But of course we can debate
                    about it too.
                </p>
                <p>Mentioning tutorial hell is important before I can explain what Interactive Interface
                    is and why it is an important factor while deciding a platform or
                    coursework to learn coding. To put  simply an interactive interface
                    is an environment where one can easily play with code inside the platform
                    and render the code there too. If you are an absolute beginner,
                    open the first certificate of freeCodeCamp and take a glimpse of their challenges.  </p>
                <p>Interactive interface not only forces us to constantly code but also simultaneously display the result
                    of our written code.
                    The feedback loop is fast here. When the code doesn’t render as it was supposed to,
                    we understand that we have made an error. We will try to resolve the error,
                    run the code again and keep doing that until we have what we need on the screen.
                    In the case of freeCodeCamp if error is made then the tests of the
                    challenge will fail and we know for sure that we will have to modify the code to
                    pass all the tests.</p>
                <p>While setting up the development environment on our local computer isn’t hard,
                    but an interactive interface inside the coursework
                    ensures that as a beginner we get into the habit of writing code.
                    While watching tutorials, it's easy to feel
                    that I know it and I can implement it and move on with the
                    rest of the lectures, but the interactive interface
                    really pushes us to simultaneously practice what we have learned.
                    It breaks the barrier between what we know and what we can actually do,
                    which from my limited experience is extremely crucial to feel
                    comfortable and confident in coding. </p>

                <h3>2. Independent Projects:</h3>
                <p>From my experience it is very easy to get into the
                    loop of just watching programming tutorials and following along.
                    Knowledge is essential but so is to apply it independently through projects. </p>
                <p>I was in this loop of just watching tutorials for around a year and half.
                    I was frustrated because even after spending so much time on learning I kept feeling like someone who is programming for the first time.
                    But freeCodeCamp broke that loop. </p>
                <p>Their courses are designed in a way where we have to complete five solo projects to get the certification. Their other certifications are like that too.
                    I started with Responsive Web Design certification where I was introduced to html and css to understand the structure and style necessary in web development.
                    The projects are simple, but they allowed me to practice html and css skills and become comfortable in creating and designing small static landing pages, product pages. I think with this course, I finally understood how important it is to quickly start working on small projects to get the confidence in coding.  I would if you are absolutely new then you should start working on small projects in 15 - 45 days of learning.</p>

                <p>Another good path that helped with practicing code through solo projects was Scrimba’s front end career development path. So far this program has been the bible for pursuing web development. The entire path is divided into modules and we get to practice everything we have learnt through solo projects. We got to build a mini version of a tinder app for dogs, a food ordering project for a restaurant, finding movies and saving them through API’s and more. I can’t stress enough how much I have grown in my front end journey just because of doing solo projects through Scrimba.</p>
                <p>Learning to program though personal projects is a very common suggestion, but when we are just starting out it's so hard to figure which project to work on. Ideation also takes time and effort and as a beginner we can simply fall into the trap of just ideation but no implementation. That is why having a path that reduces what of a project and just focuses on the how is crucial for beginner learners who want to pursue programming and are completely dependent on online programs.</p>
                <p> If anyone is learning programming online, then having a programme or a course that not only states the project but outlines it too is immensely helpful during the learning process. It increases the chances of project completion and acts as a huge confidence booster in terms of skills. Both FCC and Srimba provide that and personally, having the requirements, specifications and designs of a project allowed me to completely focus on the building blocks of application and helped me successfully complete all my projects.</p>

                <h3>3. Active and Responsive Community Channel:</h3>
                <p> Learning to programme can be daunting. So it is better to have a community with whom we can share your thoughts and struggle and get feedback.
                    I can’t tell you how helpful people can be when you feel stuck on a problem.</p>
                <p>I remember when I was doing freeCodeCamp’s second certification,
                    I used to get stuck on so many challenges in javaScript.
                    I used to post my queries and I would quickly get a reply.
                    Active communities are also helpful for inspiration and
                    give the comfort of not being alone in the journey. </p>
                <p>On Scrimba too, learners and mentors have unblocked me often and have always brought me a step closer to solidifying my understanding or reducing the confusion.</p>
                <p>One other great benefit of having a good community is you can network with people and also work with them on open source projects. I had the opportunity to do two projects on github with the members of the community and learnt how to use terminal, git and make contributions on projects. These experiences are helpful in mimicking the work scenarios in coding industries and improves the job readiness in the field. This process also allows you to nurture personal relationships which could be helpful in finding good mentors who can assist you closely in becoming job ready.</p>
                <p>I believe that before choosing a programme it is important to get the glimpse of the culture of the online community, their interaction with each other and how active they are in responding to the questions posted. In a lot of cases you will find even founders and coaches interact with the learners to get feedback on the coursework. Instructors on Scrimba, update their modules based on suggestions and common problems of the learners. This factor is highly underrated but I strongly believe the chances of finding jobs leads in programming are significantly better with the platforms who have a strong community channel.</p>

                <p> I really hope that if you are beginning to learn programming then less time is spent on stumbling on the right coursework and more towards getting better at coding.</p>

                <p className="endline"> Let me know if I can help.</p>
                <h3>Resources:</h3>
                <Link className='links resource'>freeCodeCamp</Link> <br />
                <Link className='links resource'>freeCodeCamp Community Forum</Link> <br />
                <Link className='links resource'>Scrimba-front end career path</Link>
            </div>
        </div>

    )
}