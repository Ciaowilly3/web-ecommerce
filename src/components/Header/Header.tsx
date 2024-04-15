import React from 'react';
import { MainNavBar, Logo } from '@/components';

const Header = () => {
  return (
    <header className="flex w-full justify-between items-center px-16">
      <MainNavBar />
      <Logo height={60} width={120} />
      <div></div>
    </header>
  );
};

export default Header;
