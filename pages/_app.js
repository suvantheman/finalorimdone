import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.css";
import "@styles/radio.css";

import { useState } from "react";

function Application({ Component, pageProps }) {
  return <Component {...pageProps} /> 
}

export default Application