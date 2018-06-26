import React from 'react';
import Tilt from 'react-tilt';
import logotest from './logotest.png';
import './Logo.css';



const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 200, paddingTop: '10px', paddingBottom:'20px'}} >
                <div className="Tilt-inner pa3 ">
                    <img style={{ paddingTop: '25px' }} alt='logo' src={logotest} /></div>
            </Tilt>
        </div>
    )
}
export default Logo;