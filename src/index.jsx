import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";

import "$styles/normalize.css";
import "$styles/SUI/semantic.min.css";
import "$styles/index.styl";

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();