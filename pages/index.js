"use client";

import React from 'react'
import { useEffect } from 'react';
import Home from './home'
import 'aos/dist/aos.css';
import AOS from 'aos';

function index() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation will happen only once
    });
  }, []);
  return (
    <div>
      <Home />
      {/* website are COMPLETED */}
    </div>
  )
}

export default index