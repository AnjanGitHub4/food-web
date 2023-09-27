import './style.css'
import brandLogo from "/brandLogo.png"
import bannerBowlLogo from '/chicken-black-bow.png';
import swiggyLogo from '/swiggy-logo.svg'
import zomatoLogo from "/zomato.svg";
import chickenCurryLogo from "/chicken-curry.jpg"

document.querySelector("#app").innerHTML = `
   <header>
      <div class="header-top">
      <div class="container">
         <nav>
            <div class="brand-logo">
               <a href="#"><img src='${brandLogo}' alt="tech-in-deck" /></a>
            </div>
            <ul>
               <li><a>About As</a></li>           
               <li><a>Location</a></li>           
               <li><a>Contact</a></li>           
               <li><a class="btn btn-primary">Our specialty</a></li>           
            </ul>
         </nav>
       </div>
      </div>
      <div class="header-bottom">
         <div class="header-bottom_banner">
            <img src='${bannerBowlLogo}' alt='chicken-bowl' />
            <div class="banner-contents">
               <h2>Embrace Nature's Harvest <br/> for Revitalizing Meals</h2>
               <p>Discover the Delight of Fresh, Premium <br/>Ingredients for Home Cooking</p>
               <a href="" class="btn btn-primary">Menu</a>
               <a href="" class="btn btn-secondary">Book Table</a>
            </div>
         </div>
         <div class="company-logo">
            <p>We are Available on</p>
            <div class="logo">           
            <img src='${swiggyLogo}' alt="swiggy" width='180'/>
            <img src='${zomatoLogo}' alt="swiggy" width='150'/>
            </div>
         </div>
      </div>
   </header>
   <main>
      <section class="section-catelogue">
         <div class="container">
            <h2>Catelogue</h2>
            <div class="menu">
               <div class="card">
                  <img  src='${chickenCurryLogo}' alt="chicken-curry" width="120"/>
                  <div class="card-body">
                     <h3>Item One</h3>
                     <p>Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.</p>
                  </div>
               </div>
                <div class="card">
                  <img  src='${chickenCurryLogo}' alt="chicken-curry" width="120"/>
                  <div class="card-body">
                     <h3>Item One</h3>
                     <p>Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.</p>
                  </div>
               </div>
                <div class="card">
                  <img  src='${chickenCurryLogo}' alt="chicken-curry" width="120"/>
                  <div class="card-body">
                     <h3>Item One</h3>
                     <p>Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.</p>
                  </div>
               </div>
                <div class="card">
                  <img  src='${chickenCurryLogo}' alt="chicken-curry" width="120"/>
                  <div class="card-body">
                     <h3>Item One</h3>
                     <p>Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </main>
`;
