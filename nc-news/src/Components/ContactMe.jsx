import React from 'react';
import {
    CodeReviewIcon,
    MailIcon,
    PersonIcon 
  } from "@primer/octicons-react";

const ContactMe = () => {
return (
    <div>
        <h2>Contact me!</h2>
        <h5>Hello, my name is Daniel Beaumont and I would like to thank you for visiting my website, if you have any queries please do not hesitate to contact me
            on the links provided below!
        </h5>
        <p>
        <CodeReviewIcon size={20} />: 07515538351
      </p>
        <p>
         <MailIcon size={20}/>: danielbeaumont95@hotmail.co.uk 
        </p>
        <p>
          <a href="www.linkedin.com/in/daniel-beaumont" target="_blank">
        <PersonIcon size={20}/>www.linkedin.com/in/daniel-beaumont  
        </a>  
        </p>
        <p>
         <a href="www.instagram.com/danscodingjourney">
       <PersonIcon size={20}/>www.instagram.com/danscodingjourney 
        </a>   
        </p>
        <p>
        <a href="www.twitter.com/danbeaumont95">
      <PersonIcon size={20}/>www.twitter.com/danbeaumont95  
        </a>  
        </p>
       
    </div>
)
}

export default ContactMe;