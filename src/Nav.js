import React from 'react';
import 'tachyons';

const Nav= ({onRouteChange}) =>
{
	return(
<div>
<nav style ={{display :'flex' , justifyContent: 'flex-end'}} >
<p className='f3 link pointer dim underline pa3' onClick={()=>onRouteChange('Signout')}>Sign Out</p>
</nav>
</div>
		);
}
export default Nav;