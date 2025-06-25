import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/profile_image.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt='' />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src = {profile_image} alt='' />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Looking for a job as a Full Stack Developer</p>
                    <p>I love crafting intuitive and responsive web applications that enhance user interaction and accessibility.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width: "75%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width: "50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>ReactJS</p><hr style={{width: "50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Java</p><hr style={{width: "70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Oracle</p><hr style={{width: "65%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Bootstrap</p><hr style={{width: "70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Springboot</p><hr style={{width: "50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JSP & Servlet</p><hr style={{width: "80%"}}/>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About