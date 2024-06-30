import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Partner.css';

import pushImg from '../assets/partnerlogos/push.webp';
import shardeumImg from '../assets/partnerlogos/shardeum.png';
import kalpImg from '../assets/partnerlogos/kalp.png';
import devfolioImg from '../assets/partnerlogos/devfolio.webp';

import iedcImg from '../assets/partnerlogos/iedc.webp';
import daocommunityImg from '../assets/partnerlogos/daocommunity.webp';
import defy24Img from '../assets/partnerlogos/defy24.png';
import dimohackImg from '../assets/partnerlogos/dimohack.png';

import kbaImg from '../assets/partnerlogos/kba.png';
import actualoneImg from '../assets/partnerlogos/actualone.png';
import coinexImg from '../assets/partnerlogos/coinex.png';
import mulearnImg from '../assets/partnerlogos/mulearn.png';

import buildbearImg from '../assets/partnerlogos/buildbear.svg';
import hackathenaImg from '../assets/partnerlogos/hackathena.png';
import wallethunterImg from '../assets/partnerlogos/wallethunter.png';
import web3keralaImg from '../assets/partnerlogos/web3kerala.png';

import web3chennaiImg from '../assets/partnerlogos/web3chennai.png';


gsap.registerPlugin(ScrollTrigger);

const Partner = () => {
    const partnerRef = useRef(null);
    const partnerContainer = useRef(null);

    useGSAP(() => {
        gsap.to(".partner-letter", {
            y: 0,
            stagger: 0.05,
            delay: 0.5,
            duration: 0.5,
            ease: "back.out",
            onComplete: () => {
                console.log("Partners animation")
            },
            scrollTrigger: {
                trigger: ".partner-letter",
            },
        });
        gsap.to(".partner-logo", {
            y: 0,
            opacity:1,
            stagger: 0.5,
            delay: 1,
            duration: 1,
            ease: "back.out",
            scrollTrigger: {
                trigger: ".partner-content",
            },
        })
        
    }, { scope: partnerContainer });
    
    

    return (
        <div className='partner-container' ref={partnerContainer}>
            <div className='partner-title'>
                <h1 ref={partnerRef}>
                    {Array.from("PARTNERS").map((letter, index) => (
                        <div key={index} className="partner-letter">{letter}</div>
                    ))}
                </h1>
            </div>
            <div className='partner-content' >

                {/* Row 1 */}

                <span className='partner-logo'>
                    <img src={pushImg} alt='push-protocol' />
                </span>

                <span className='partner-logo'>
                    <img src={shardeumImg} alt='shardeum' />
                </span>

                <span className='partner-logo'>
                    <img src={kalpImg} alt="KALP" />
                
                </span>

                <span className='partner-logo'>
                    <img src={iedcImg} alt='IEDC' />
                </span>

                {/* Row 2 */}

                <span className='partner-logo'>
                    <img src={devfolioImg} alt='Devfolio' />
                </span>

                <span className='partner-logo'>
                    <img src={daocommunityImg} alt="DAO COMMUNITY" />
                </span>


                <span className='partner-logo'>
                    <img src={defy24Img} alt='Defi24' />
                </span>

                <span className='partner-logo'>
                    <img src={dimohackImg} alt='Dimo hack' />
                </span>

               {/* Row 3 */}

                <span className='partner-logo'>
                    <img src={kbaImg} alt="Kerala Blockchain Academy" />
                </span>


                <span className='partner-logo'>
                    <img src={actualoneImg} alt='ActualOne' />
                </span>

                <span className='partner-logo'>
                    <img src={coinexImg} alt='CoinEX' />
                </span>

                <span className='partner-logo'>
                    <img src={mulearnImg} alt="Mulearn" />
                </span>

              {/* Row 4 */}

              {/* <span className='partner-logo'>
                    <img src={buildbearImg} alt="Buildbear" />
                </span> */}


                <span className='partner-logo'>
                    <img src={hackathenaImg} alt='Hackathena' />
                </span>

                <span className='partner-logo'>
                    <img src={wallethunterImg} alt='Wallet Hunter' />
                </span>

                {/* <span className='partner-logo'>
                    <img src={web3keralaImg} alt="Web3 Kerala" />
                </span> */}



            </div>
        </div>
    );
}

export default Partner;
