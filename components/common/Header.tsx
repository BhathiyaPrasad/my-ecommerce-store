// components/common/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/cart">Cart</Link></li>
        <li><Link href="/admin">Admin</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
