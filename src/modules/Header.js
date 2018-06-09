import React, { Component } from 'react';
import ndrlogo from '../assets/images/ndr_logo.png';


class Header extends Component{
  /*
   constructor(){
    super();
    this.handleScroll = this.handleScroll.bind(this);

  };

}
*/


render(){
  return(
    <header className = "header">
    <nav class = "primary">
    <div class = "cobrand-logo">
    <a href = "#"><img src = {ndrlogo} ></img></a>
</div>
<div class = "language-select">
<button className ="language select">Language-Select</button>
</div>
<div className = "privacy-nav-link">
<a href = "#"></a>
</div>
    </nav>
    <nav class = "secondary">
    <div className = "titlelink">
    <a href = "#"> Title Link</a>
    </div>
    <div className = "subnavpagelink">
    <ul>
    <li className = "subnav link">
<a href = "#"> Page Link</a>
</li>
   <li className = "subnav link">
<a href = "#"> Page Link</a>
</li>
   <li className = "subnav link">
<a href = "#"> Page Link</a>
</li>
    </ul>
    </div>
    </nav>
    </header>

  )
}
}
export default Header;