import React,{Component} from 'react';
import './App.css';
import Signin from './Signin/Signin.js';
import Register from './Register/Register.js';
import Home from './Home/Home.js';
import Particles from 'react-particles-js';
import 'tachyons'
const particlesparams={
  particles: {
    number: {
      "value": 12,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 10,
        "color": "#454FB0"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.3,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.1,
        "opacity_min": 0,
        "sync": true
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.1,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 300,
      "color": "#ffe4e4",
      "opacity": 0.5,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 80,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 5
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
const intial={
      route:'signin',
      isSignedIn:false,
      from:'login'
    }
class App extends Component {
	constructor() 
	{
		super();
    this.state = {
      route:'signin',
      isSignedIn:false,
      from:'login'
    }
	}
enter=(route)=>
{
  this.setState({from:route})
}
onRouteChange=(route)=>
  {
    if(route=='signin')
    {
      this.setState(intial)
    }
    else if(route=='home')
      this.setState({isSignedIn:true})
    this.setState({route:route})
  }
  render(){
  return (
  	<div className="App">
  	<Particles className='particles' params={particlesparams} />
		{this.state.route==='signin'
        ?<Signin onRouteChange={this.onRouteChange} updateUser={this.updateUser} enter={this.enter}/>
        :this.state.route==='register'
        ?<Register onRouteChange={this.onRouteChange} updateUser={this.updateUser} enter={this.enter}/>    
        :<div className=''>
        <Home onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} enter={this.state.from}/>
        </div>
    }
    </div>
      );
    }
}

export default App;
