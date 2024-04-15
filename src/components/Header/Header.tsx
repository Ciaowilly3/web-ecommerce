import React from 'react';
import { MainNavBar, Logo } from '@/components';

const Header = () => {
  return (
    <header className="flex w-full justify-between items-center px-16">
      <div className="basis-1/3">
        <MainNavBar />
      </div>
      <div className="basis-1/3 ">
        <Logo height={60} width={120} />
      </div>
      <div className="basis-1/3"></div>
    </header>
  );
};

export default Header;
