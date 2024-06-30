import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Traction.css';

gsap.registerPlugin(ScrollTrigger);

const Traction = () => {
    const tractionRef = useRef(null);
    const tractionContainer = useRef(null);

    useGSAP(() => {
        gsap.to(".traction-letter", {
            y: 0,
            stagger: 0.1,
            delay: 0.1,
            duration: 0.1,
            ease: "back.out",
            onComplete: () => {
                console.log("Traction title animation")
            },
            scrollTrigger: {
                trigger: ".traction-letter",
            },
        });
        gsap.to(".traction-box", {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            delay: 0.1,
            duration: 0.1,
            ease: "back.out",
            scrollTrigger: {
                trigger: ".traction-content",
            },
        });
    }, { scope: tractionContainer });

    return (
        <div className='traction-container' ref={tractionContainer}>
            <div className='traction-title'>
                <h1 ref={tractionRef}>
                    {Array.from("TRACTION").map((letter, index) => (
                        <div key={index} className="traction-letter">{letter}</div>
                    ))}
                </h1>
            </div>
            <div className='traction-content'>
                <div className='traction-box'>
                <h3 style={{ fontSize: '3rem' }}>1500+</h3>
                    <h3>Students</h3>
                </div>
                <div className='traction-box'>
                <h3 style={{ fontSize: '3rem' }}>25+</h3>
                <h3>Universities</h3>
                   
                </div>
                <div className='traction-box'>
                <h3 style={{ fontSize: '3rem' }}>25+</h3>
                    <h3>Comrades</h3>
                </div>
                <div className='traction-box'>
                    <h3 style={{ fontSize: '3rem' }}>20+</h3>
                    <h3>Programs</h3>
                </div>
                <div className='traction-box'>
                <h3 style={{ fontSize: '3rem' }}>5+</h3>
                    <h3>States</h3>
                </div>
            </div>
        </div>
    );
}

export default Traction;
