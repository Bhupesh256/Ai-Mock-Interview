"use client";
import Image from 'next/image';
import React from 'react';

const Header = () => (
  <div>
    <Image src={'/logo2.svg'} width={167} height={41} alt='logo' />
  </div>
);

export default Header;
