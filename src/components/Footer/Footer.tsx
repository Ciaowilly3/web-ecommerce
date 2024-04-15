import React from 'react';
import { MainNavBar, Logo } from '@/components';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-16">
      <Logo width={120} height={60} />
      <MainNavBar />
      <div></div>
    </footer>
  );
};

export default Footer;
