import { CgInfinity } from 'react-icons/cg';

import React from 'react';
import Link from 'next/link';

interface ILogoProps {
  height: number;
  width: number;
}

const Logo = ({ height, width }: ILogoProps) => {
  return (
    <Link href={'/'} className="text-center">
      <CgInfinity
        style={{ width: `${width}px`, height: `${height}px`, margin: 'auto' }}
      />
    </Link>
  );
};

export default Logo;
