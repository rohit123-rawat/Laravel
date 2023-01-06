import React from 'react';
import { createRoot } from 'react-dom/client'
import Home from './Components/home/home';

export default function App(){
    return(
        <>
        <Home/>
        </>
    );
}

if(document.getElementById('root')){
    createRoot(document.getElementById('root')).render(<App />)
}
