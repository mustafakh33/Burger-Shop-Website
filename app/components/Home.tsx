"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import PopularBurger from './PopularBurger/PopularBurger'
import Delivery from './Delivery/Delivery'
import Team from './Team/Team'
import Reservation from './Reservation/Reservation'
import Newsletter from './Newsletter/Newsletter'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import ("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-center",
      })
    };
    initAos();
  },[])
  return (
    <div>
        <Hero/>
        <Features/>
        <PopularBurger/>
        <Delivery/>
        <Team />
        <Reservation/>
        <Newsletter/>
    </div>
  )
}

export default Home