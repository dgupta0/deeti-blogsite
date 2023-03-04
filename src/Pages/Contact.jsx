import React from 'react'
import linkedin from "../assets/linkedin.png"
import git from "../assets/github.png"
import discord from "../assets/discord.png"

export default function Contact() {
    return (
        <main class="contact">
            <h1 class="hi"><span class="shine">Hey, </span>There!!</h1>
            <div className='connect'>
                <h2>We can connect and contact at the following platforms-</h2>
                <div className='social'>
                    <a href='https://www.linkedin.com/in/deeti-gupta/' target="_blank"><img src={linkedin} alt="icon by Roundicons" /></a>
                    <a href="https://github.com/dgupta0/" target="_blank"><img src={git} alt="Github icons created by Pixel perfect - Flaticon" /></a>
                    <a href="https://discordapp.com/users/Deeti#4927" target="_blank"><img src={discord} alt="icon by freepik" /></a>

                </div>
            </div>
            <h2 className='footer-issue-se'> You can email me at <a className="links" href="mailto:deetigupta8@gmail.com">deetigupta8@gmail.com</a> to
                give feedback and suggestions. </h2>

        </main>
    )
}