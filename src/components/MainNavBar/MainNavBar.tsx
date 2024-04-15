import { Paths } from '@/enums/Paths';
import Link from 'next/link';
import React from 'react';
import { capitalize } from 'lodash';
import { Button } from '../ui/button';

interface MainNavBarProps {
  isVertical?: boolean;
}

const MainNavBar = ({ isVertical }: MainNavBarProps) => {
  return (
    <nav>
      <ul className={'flex gap-4 ' + (isVertical ? 'flex-col' : '')}>
        {Object.values(Paths).map(
          (path, index) =>
            path !== '/' && (
              <li key={index}>
                <Button variant="outline">
                  <Link href={path}>{capitalize(path.slice(1))}</Link>
                </Button>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default MainNavBar;
