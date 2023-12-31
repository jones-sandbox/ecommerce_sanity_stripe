import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Why from './Why';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Makufoods</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <section>
        <Why />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
