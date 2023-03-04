import React from 'react'
import profilePic from "../assets/profile.jpeg"

export default function About() {
    return (
        <div className="about-me">
            <div className='explain-me'>
                <img className="profile-pic" src={profilePic}></img>
                <div>
                    <h3>Hi, I am Deeti! <br /> Welcome to my Blog Site</h3>
                    <h4>I am a new front end developer who is looking to transition into frontend/web development jobs.
                        I am familiar with front end stacks- HTML, CSS, Javascript and React framework.
                        My current goal is to keep practicing web development skills and become a full stack
                        developer.
                    </h4>
                </div>
            </div>

            <h4>I have created
                the blog site to write about my coding journey and what my learnings have been as
                a mature learner from non science background who is driven to learn programming and get better at it.
            </h4>
            <h4>
                I like to relax and be lazy on weekends. This could mean sitting on the bed and
                do whatever I like. It could be working on a project, watching youtube videos or movies. On weekdays,
                I like to follow routine, eat healthy and do my workouts.
            </h4>

        </div>
    )
}
