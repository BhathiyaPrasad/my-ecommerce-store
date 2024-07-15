// components/common/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/product/cart">Cart</Link></li>
        <li><Link href="/admin/home">Admin</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
