import React from 'react';
import './Navigation.css';

const Navigation = () => {
     
        return ( 
            <header className="bg-black-90 fixed w-100 ph1 pv1 pv2-ns ph2-m ph5-l">
            <nav className=" nav-list f3 fw12 ttu tracked">
              <a className="link dim white dib mr4" href="#" title="Home">Home</a>
              <a className="link dim white dib mr4" href="#" title="About Us">About Us</a>
              <a className="link dim white dib mr4" href="#" title="our services">our services</a>
              <a className="link dim white dib mr4" href="#" title="Carrers">careers</a>
              <a className="link dim white dib mr4" href="#" title="valuaation authentication">valuation authentication</a>
              <a className="link dim white dib mr4" href="#" title="feedback"> feedback</a>
              <a className="link dim white dib" href="#" title="Contact">contact</a>
            </nav>
          </header>

  
        );

        
    
}
export default Navigation;