import { hydrate } from "react-dom";
import App from './app.js';
import { BrowserRouter } from "react-router-dom";

hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)
