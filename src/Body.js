import React from 'react';
import About from './About';
import Carrer from './Carrer';
import Education from './Education';
import Experience from './Experience';
import Technical from './Technical';

export default function Body(){
    return (
        <div>
            <Carrer/>
            <Technical/>
            <Experience/>
            <Education/>
            <About/>
        </div>
    )
}