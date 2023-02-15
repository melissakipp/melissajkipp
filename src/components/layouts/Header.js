import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import styles from '@/styles/Header.module.css';

import logo from '/public/svg/melissa-j-kipp-logo_black.svg';

const Header = () => {

  const [isOpen, setIsOpen] = useState(true);

  const openMenu= ()=> setIsOpen(!isOpen);

  return (
    <header className={styles.mainHeader}>
      <div>
        <Link href={'/'}>
          <Image 
            src={logo} 
            alt="Melissa J Kipp logo" 
            width={128}
            heigh={77} 
          />
        </Link>
      </div>
      <nav className={styles.mainNav}>
        <button className={
          isOpen === true ? 
          styles.menuBtn : styles.menuBtn + ' ' + styles.active} 
          onClick={openMenu}  
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
        <ul className={
          isOpen === true ? 
          styles.mainNav__list : styles.mainNav__list +' '+ styles.active 
        }>
          <li className={styles.mainNav__item}>
            <Link href='/'
              className={isOpen === true ? 
              styles.navlink : styles.navlink+' '+styles.active}
              onClick={openMenu} 
            >
              Home
            </Link>
          </li>
          <li className={styles.mainNav__item}>
            <Link href='/about'
              className={isOpen === true ? 
              styles.navlink : styles.navlink+' '+styles.active}
              onClick={openMenu}
            >
              About
            </Link>
          </li>
          <li className={styles.mainNav__item}>
            <Link href='/blog'
              className={isOpen === true ? 
              styles.navlink : styles.navlink+' '+styles.active}
              onClick={openMenu}
            >
              Blog
            </Link>
          </li>
          <li className={styles.mainNav__item}>
            <Link href='/projects'
              className={isOpen === true ? 
              styles.navlink : styles.navlink+' '+styles.active}
              onClick={openMenu}
            >
              Projects
            </Link>
          </li>
          <li className={styles.mainNav__item}>
            <Link href='/contact'
              className={isOpen === true ? 
              styles.navlink : styles.navlink+' '+styles.active}
              onClick={openMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;