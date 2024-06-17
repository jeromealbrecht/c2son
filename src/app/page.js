// pages/index.js

"use client";
import React, { useState } from 'react';
import GoogleLogin from './composants/GoogleLogin';
import UserInterface from './composants/UserInterface'
const Home = () => {

  return (
    <div className='page'>
      <UserInterface/>
    </div>
  );
};

export default Home;