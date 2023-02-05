import React from 'react';
import Banner from './banner';
import { Header } from './header';
import Navigation from './navigation';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Banner />
      <Navigation />
      {children}
    </>
  );
}
