"use client"
import Image from 'next/image'
import './globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAddressCard, faCode, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import styles from './page.module.css'

import React, { useState, useEffect } from 'react'

const Navbar = () => {

  
  return(
    <div>
      <nav>
        <ul className={`${styles.navbar}`}>
          <li>
            <div className={styles.nav_content}>
              <span>
                <FontAwesomeIcon icon={faAddressCard} className={styles.nav_icon}/>
              </span>
              
              <span>
                <a className={styles.nav_text} href="#about">About</a>
              </span>
            </div>
           
            
          </li>
          <li>
            <div className={styles.nav_content}>
              <span>
                <FontAwesomeIcon icon={faCode} className={styles.nav_icon}/>
              </span>
              
              <span>
                <a className={styles.nav_text} href="#projects">Projects</a>
              </span>
            </div>
           
            
          </li>
          <li>
            <div className={styles.nav_content}>
              <span>
                <FontAwesomeIcon icon={faBookOpen} className={styles.nav_icon}/>
              </span>
              
              <span>
                
                <a className={styles.nav_text} href="#exp_edu">Experiences</a>
              </span>
            </div>
           
            
          </li>
          
          
        </ul>
        
      </nav>
    </div>
  )
  
}

export default function Home() {
  

  return (
    <>
      <Navbar />
      <div className={styles.title}>

      </div>
      <div className={styles.about} id="about">
      
      </div>
      <div className={styles.exp_edu} id="exp_edu">

      </div>
      <div className={styles.projects} id="projects">

      </div>
        
        
      
      
    </>
  )
}
