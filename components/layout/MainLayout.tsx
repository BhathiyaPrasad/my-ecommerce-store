// components/layout/MainLayout.tsx
import React, { ReactNode } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
