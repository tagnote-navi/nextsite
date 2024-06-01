import React from 'react';
import logo from '../assets/img/logo.png';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header id="header">
      <h1 className="site-title wrapper">
        <Link href="/"><Image src={logo} alt="Travel Blog" /></Link>
      </h1>
      <nav id="navi">
        <ul className="wrapper">
          <li><Link href="#">NEW</Link></li>
          <li><Link href="#">COLUMN</Link></li>
          <li><Link href="#">SERIES</Link></li>
          <li><Link href="#">Q&amp;A</Link></li>
          <li><Link href="#">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
