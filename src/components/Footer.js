import React from 'react';
import twitter from '../Assets/Twitter.png';
import github from '../Assets/Github.png';
import linkedin from '../Assets/Linkedin.png';

export default function Footer() {
  return (
    <div class="justify-content-center text-center footer">
      <ul>
        <a href="https://github.com/Elbashadore">
        <img class="githubimg" src={github} alt="Github Logo" ></img>
        </a>
        <a href="https://twitter.com/Joshtibbs9327"><img class="img" src={twitter} alt="twitter logo"></img></a>
        <a href="https://www.linkedin.com/in/josh-tibbetts/"><img class="img linkedin" src={linkedin} alt="linkedin logo"></img></a>
      </ul>

    </div>
  );
}
