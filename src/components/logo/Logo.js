import React from 'react';

import './Logo.css'
import brain from './brain.png'

import Tilt from 'react-parallax-tilt';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
        <Tilt className='tilt br2 shadow-2' style={{ height: 80, width:80}}>
            <div className='titl-inner'>
                <img src={brain} alt='logo'  style={{paddingTop: '5px'}}/>
            </div>
        </Tilt>
    </div>
  )
}

export default Logo;