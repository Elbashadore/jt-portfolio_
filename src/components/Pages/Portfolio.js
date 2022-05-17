import React from 'react';
import tv2 from '../../Assets/travelTrusteeV2.png';
import passGen from '../../Assets/Password Generator.png';
import dayPlan from '../../Assets/Day Planner.png';
import weatherDash from '../../Assets/weatherdashboard.png';
import Jate from '../../Assets/JATE.png';

export default function Portfolio() {
  return (
<div>
  <h1 class="text-center">Portfolio</h1>
  <div class = " fontLight container-fluid row p-0 m-0" id="work">
        <div class=" cardBorder backgroundGrey card col-sm-8">
        <img src={tv2} class="card-img-top" alt="Picture of a webpage with a map at the top"></img>
            <div class="card-body">
              <h5 class="card-title">Travel Trustee V2</h5>
              <p class="card-text align-bottom">For my second main project my group decided to continue development of our app, Travel Trustee. Now equipped with the tools to build a full stack application we refactored our application to allign with MVC framework as well we built out a full backend and optimized our application through utiliztion of serverside databases. Among the other improvements we added an ability to login to improve the user experience. 
              </p>
              <a href="https://pwa-jate-2022.herokuapp.com/" class="btnStyle btn backgroundRed">Deployed Site</a>
              <a href="https://github.com/Elbashadore/Just-some-text" class="btnStyle btn backgroundRed">Repository</a>
            </div>
          </div>

          <div class="cardBorder backgroundGrey card col-md-4">
            <img src={Jate} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">JATE</h5>
              <p class="card-text align-bottom">A PWA built using webpack, it's a web hosted javaScript text editor that can be installed as a PWA. Deployed to heroku.
              </p>
              <a href="https://immense-ravine-97579.herokuapp.com/" class="btnStyle btn backgroundRed">Deployed Site</a>
              <a href="https://github.com/ila0406/Travel-Trustees-2" class="btnStyle btn backgroundRed">Repository</a>
            </div>
          </div>

          <div class=" cardBorder backgroundGrey card col-sm-4">
            <img src={weatherDash} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Weather Dashboard</h5>
              <p class="card-text">This is a weather web app focusing on utelization of server side API's. You can input a city and have it geocoded and get current weather conditions as well as a five day forecast. As well this web app features a functioning search history where you can select a past search and have it grab the data for that location again.</p>
              <a href="https://elbashadore.github.io/WeatherDashboard/" class="btnStyle btn backgroundRed">Deployed Site</a>
              <a href="https://github.com/Elbashadore/WeatherDashboard" class="btnStyle btn backgroundRed">Repository</a>
            </div>
          </div>

          <div class="cardBorder backgroundGrey card col-md-4">
            <img src={passGen} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Password Generator</h5>
              <p class="card-text">A password generator built using javaScript focusing on Alert and Confirm prompts.</p>
              <a href="https://elbashadore.github.io/password-generator/" class="btnStyle btn backgroundRed">Deployed Site</a>
              <a href="https://github.com/Elbashadore/password-generator" class="btnStyle btn backgroundRed">Repository</a>
            </div>
          </div>

          <div class="cardBorder backgroundGrey card col-md-4">
            <img src={dayPlan} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Day Planner</h5>
              <p class="card-text align-bottom">This is a day planner web app, it will allow you to input things to your calendar and save to local storage and the color of the background will change dependent on the time.</p>
              <a href="https://elbashadore.github.io/Day-Planner/" class="btn btnStyle backgroundRed">Deployed Site</a>
              <a href="https://github.com/Elbashadore/Day-Planner" class="btn btnStyle backgroundRed">Repository</a>
            </div>
          </div>

</div>
</div>
  );
}
