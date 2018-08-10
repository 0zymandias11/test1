import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import pokedex from './pokedex.png';
const Logo= () =>
{
	return(
<div className='mt3 ma4'>
<Tilt className="Tilt br4 shadow-5" options={{ max : 75 }} style={{ height: 150, width: 150 }} >
 <div className="Tilt-inner pa4">
 <img style={{paddingTop :'5px'}} alt='logo' src={pokedex}  />
 </div>
</Tilt>
</div>
		);
}
export default Logo;