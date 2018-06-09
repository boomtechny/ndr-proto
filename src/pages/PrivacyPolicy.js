import React, { Component } from 'react';

import biker from './../assets/images/biker.svg';


class PrivacyPolicy extends Component{
  /*
   constructor(){
    super();
    this.handleScroll = this.handleScroll.bind(this);

  };

}
*/


render(){
  return(
 <section className = "privacy content">
 <section className = "privacy overview">
 <div className = "privacy overview_copy">
 <div className = "privacy overview_copy__hero">
     <p>This Online Privacy Policy applies to www.nationaldebtrelief.com, owned and operated by National Debt Relief, LLC (sometimes referred to as &#8220;Company&#8221;), and any Company affiliate or subsidiary online interface that links to this
                Policy, (each, a &#8220;Site,&#8221; and collectively, the &#8220;Sites&#8221;). This Policy describes how National Debt Relief, LLC collects and uses the personal information you provide. It also describes the choices available to you
                regarding the use of, your access to, and how to update and correct your personal information.</p>
            <p><strong>Agreement to this Policy</strong>: By using this Site you consent to this Online Privacy Policy, including your consent to our use and disclosure of information about you in the manner described herein.</p>
 </div>
 <div className = "privacy overview_copy__section">
 </div>
 <div className = "privacy overview_copy__section">
 </div>
 <div className = "privacy overview_copy__section">
 </div>
 </div>
 <div className = "privacy overview_svgholder ">
<img className = "svgholder_image" src = {biker}></img>
<img className = "svgholder_image" src = {biker}></img>
<img className = "svgholder_image" src = {biker}></img>
</div>
 </section>
 
 </section>
 


  )
}
}
export default PrivacyPolicy;