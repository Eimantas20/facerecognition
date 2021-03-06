import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import logo from './Brainlogo.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner">
                    <img style={{padding: '5px', height: '190px'}} src={logo} alt='Logo'></img> 
                </div>
            </Tilt>
        </div>
    );
}

export default Logo