"use client"
import Image from 'next/image'
import './globals.css'
import styles from './page.module.css'

import React, { useState, useEffect } from 'react'

const Navbar = () => {
  return(
    <div className={`${styles.navbar}`}>
      <ul>
        <li>hello</li>
      </ul>
    </div>
  )
  
}

export default function Home() {
  useEffect(() => {
    const navbar = document.querySelector(`.${styles.navbar}`);
    
    const parallax_images = document.querySelectorAll(`.${styles.parallaxImg}`);
    const grand_canyon = document.querySelector(`#grand_canyon`);
    
    let offsets = [0];
    parallax_images.forEach((parallax, idx) => {
      offsets.push(parallax.offsetHeight+ offsets.reduce((a, b) => a + b, 0));
      parallax.style.transform = `translateY(${offsets[idx]}px)`;
    });

    
    let sticky = navbar.offsetTop;
    window.addEventListener('scroll', () =>{
      
      let scrollY =  window.pageYOffset ;
      
      

      parallax_images.forEach((parallax, idx) => {
        
        parallax.style.transform = `translateY(${(scrollY * 0.4) + offsets[idx]}px)`;
      });
      
      
      if (window.pageYOffset >= sticky) {
        navbar.classList.add(`${styles.sticky}`);

      } else {
        navbar.classList.remove(`${styles.sticky}`);
      }
    });
  });

  return (
    <>
      
      <section className={styles.parallaxImgContainer}>
        
        <Image 
          id="grand_canyon"
          className={styles.parallaxImg}
          src="/grand_canyon.jpg" 
          fill={true} 
          
        />
        
        <p className={styles.name}>SebassNoob</p>
        
      </section>
      <section className={styles.main}>
        <Navbar />
        <Image 
          
          className={styles.parallaxImg}
          src="/next.svg" 
          fill={true} 
          
        />  
      </section>
    </>
  )
}
