import React from 'react';
import"./Header.css"
function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitlesmall'> React & Redux</span>
        <span className='headerTitleLarge'> Blog</span>
      </div>
      <img className='headerimg' src='https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'alt='imagebroke'/>
      
     </div>
  );
}

export default Header;
