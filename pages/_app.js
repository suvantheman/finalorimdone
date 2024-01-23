import "/public/styles/globals.css";
import "/public/styles/radio.css";

import { useState } from "react";

function Application({ Component, pageProps }) {
    return <Component  {...pageProps} />
}

export default Application