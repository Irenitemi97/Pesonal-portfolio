import React from 'react'
import './AboutComp.css'
import pics1 from '../../images/12.jpg'
import { Link } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar';

function AboutComp() {
    const html = 90;
    const css = 80;
    const java = 75;
    const react = 70;

    return (
        <>
            <div className="about component__space" id='About'>
                <div className="container">
                    <div className="row">
                        <div className="col__2">
                            <h1 className="about__heading">About Me</h1>
                            <div className="about__meta">
                                <p className="about__text p__color">Hii, I'm Adeniran Sulyman Adebayo. <br />Since the evolution of the world in modern scientific technology, web development technology is a complete motivation besides my passion for advanced and inquisitively high instinct of delivering elevated front-end user experience.</p>
                                <p className="about__text p__color">I, of these recent days, successfully mastered the art of digital web design specializing in creating inclusive content to give a noteworthy and enticing visual outcome while writing clean code.</p>
                                <p className="about__text p__color">  As a creative front-end developer, here are the technologies I do work with:<br /><div>
                                    <ProgressBar variant="danger" now={90} label={`HTML:${html}%`} /><br />
                                    <ProgressBar variant="danger" now={80} label={`CSS:${css}%`}/><br />
                                    <ProgressBar variant="danger" now={75} label={`JAVA SCRIPT:${java}%`}/> <br />
                                    <ProgressBar variant="danger" now={70} label={`REACT:${react}%`}/>
                                </div>
                                </p>
                                <p className="about__text p__color"> I have obtained the essential skillset to equip myself for creative designing space. However, on a given platform of exposition, my work which comes with an unlimited valuable influence tend towards developing variety of accessible web experience for the utmost satisfaction of my clients.</p>
                                <div className="about__button d__flex align__items__center">
                                    <a href='https://docs.google.com/file/d/1YskdnFFZoGE4zB1pP3yrxh-NyOdY_uEe/edit?usp=docslist_api&filetype=msword'><button className='about btn pointer'>Download CV</button></a>
                                    <Link to='/Contact'><button className='about btn pointer'>Hire Me</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col__2">
                            <img src={pics1} alt="pics1" className='about__img' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComp