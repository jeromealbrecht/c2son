// openTools.js
"use client";

import './userInterface.css';
import React from "react";

const OpenTools = () => {
    return (
        <nav>
            <div className='open-tools'>
                <div className='profile-picture'>
                    <img className='profile-picture-svg mt1' src="./studio.svg" alt='default_logo_svg' />
                    <img className='profile-picture-img mt1' src="./logo.jpg" width="100" height="50" alt='default_logo' />
                </div>

                <div className='profile-tools'>
                    
                </div>
            </div>
        </nav>
    );
}

export default OpenTools;