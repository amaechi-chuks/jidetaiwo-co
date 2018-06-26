import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Cool from './components/Cool/Cool';
import Carousel from './components/Carousel/Carousel';
import './App.css';


const particlesOptions = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800,
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            }
          }
        }

      }
    }
  }
}
class App extends Component {
  render() {
    return(
      <div>
      <Particles className='particles'
      params={particlesOptions}
      />
      <Navigation />
      <Logo />
      <Cool />
      <Carousel />
      </div>
    );
  }
}

export default App;
