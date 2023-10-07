import React from 'react';

import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {

  return (
    <StateContext>
        <Toaster />
        <Component {...pageProps} />
    </StateContext>
  )
}

export default MyApp
