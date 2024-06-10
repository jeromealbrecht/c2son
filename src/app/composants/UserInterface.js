// userInterface.js
"use client";

import './userInterface.css';
import React from "react";

const Interface = () => {
    return (
        <main>
            <span className='welcom'>Studio +</span>

            <div className='explain_Parent'>
                <div className='explain font-class'> 
                    Bienvenue sur le développement de votre application Studio + <br />
                    <br />
                    Dans le but de mieux répondre à vos besoins, <br />
                    nous avons mis en ligne un court sondage :
                    <br />
                    <br />
                    <div className='tally-button'>
                        <a href='https://tally.so/r/mOPL9a' target='_blank'>Participer au sondage</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Interface;