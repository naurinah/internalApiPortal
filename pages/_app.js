import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import React,{useState} from 'react'

function MyApp({ Component, pageProps,protocol }) {
  return <Component {...pageProps} />;
//   if (location.protocol !== 'http:') {
//     location.replace(`http:${location.href.substring(location.protocol.length)}`);
// }
}



  
export default MyApp;
