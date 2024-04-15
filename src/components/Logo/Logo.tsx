import { CgInfinity } from 'react-icons/cg';

import React from 'react';
import Link from 'next/link';

interface ILogoProps {
  height: number;
  width: number;
}

const Logo = ({ height, width }: ILogoProps) => {
  return (
    <Link href={'/'}>
      <CgInfinity style={{ width: `${width}px`, height: `${height}px` }} />
    </Link>
  );
};

export default Logo;
