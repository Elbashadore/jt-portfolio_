import React from 'react';
import pfp from '../../Assets/PFP.jpeg'

export default function About() {
  return (
    <div class="text-center container">
      <h1 >About Me</h1>
      <img class="rounded" alt="photo of Josh Tibbetts in a navy blue suit" height="500" src={pfp}></img>
      <p class="col align-items-center">
      I am a Full-stack web developer leveraging music technology background to build responsive user experiences on the web. 
      As a graduate of the University of Denver Full Stack Web Development Certificate program, I have over 100+ hours of experience building full-stack applications both individually and in teams.
       I single-handedly developed a fully functional weather site with current weather, five day forecast, and API calls to global weather data. Known as a team leader passionate about developing apps, with a focus on mobile-first design and development.
        I am an effective communicator and team player demonstrated throughout my Bootcamp, where I kept open and regular communication with my teammates both in-person and virtually.With each project, my aim is to best engage my audience for an impactful user experience.
         I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
      </p>
    </div>
  );
}