import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ColorProvider from "./color-hooks";

export const ColorContext = createContext();

ReactDOM.render(
    <ColorProvider>
        <App/>
    </ColorProvider>,
    document.getElementById('root')
);