import React, { Component } from 'react';
import Facebook_logo from "./Images/facebook_logo.png";
import Glassdoor_logo from "./Images/glassdoor_logo.png";
import Instagram_logo from "./Images/instagram_logo.png";
import Linkedin_logo from "./Images/linkedin_logo.png";
import Twitter_logo from "./Images/twitter_logo.png";

let icons = 

<p className="signature-line">
  <a className="smicon" href="https://www.facebook.com/ECIConsulting/">
    <img
      width="30"
      height="30"
      src={Facebook_logo}
      alt="Facebook"
    />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a className="smicon" href="https://www.glassdoor.com/Overview/Working-at-Environmental-Consultants-EI_IE456522.11,36.htm">
    <img
      width="30"
      height="30"
      src={Glassdoor_logo}
      alt="Glassdoor"
    />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a className="smicon" href="https://twitter.com/eciconsulting?lang=en">
    <img
      width="30"
      height="30"
      src={Twitter_logo}
      alt="Twitter"
    />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a className="smicon" href="https://www.instagram.com/environmentalconsultantsinc/">
    <img
      width="30"
      height="30"
      src={Instagram_logo}
      alt="Instagram"
    />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a className="smicon" href="https://www.linkedin.com/company/environmental-consultants-inc/">
    <img
      width="30"
      height="30"
      src={Linkedin_logo}
      alt="Linkedin"
    />
  </a>
</p>;

export default icons;