import './style.css'
import brandLogo from "/brandLogo.png"
import bannerBowlLogo from '/chicken-black-bow.png';
import swiggyLogo from '/swiggy-logo.svg'
import zomatoLogo from "/zomato.svg";
import chickenCurryLogo from "/chicken-curry.jpg"
import chickenLogo from "/chickenCurry.png";

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
      <!--- section recommendetion -->
      <section class="section-recommend">
         <div class="container">
            <div class="search-box">
               <div class="input-control">
                  <input type="text" placeholder="Discover Delicious..." required />
                  <i class="fa-solid fa-magnifying-glass"></i>
               </div>
               <div class="order-menu-control">
                  <a class="btn btn-secondary">Download Menu</a>
                  <a class="btn btn-primary">Order Now <span>2</span></a>
               </div>
            </div>
            <div class="menu-list-button">
               <div class="tab-menu">
                  <a>Veg</a>
                  <a class="active-menu">Non-Veg</a>
               </div>
                <div class="tab-menu tab-menu-secondary">
                  <a>North Indian</a>
               </div>
               <div class="tab-menu tab-menu-secondary">
                  <a>South Indian</a>
               </div>
               <div class="tab-menu tab-menu-secondary">
                  <a>Chines Items</a>
               </div>
            </div>
         </div>

         <div class="food-product-wrapper">
            <div class="products-slider swiper mySwiper">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
               <div class="card">
                <div class="card-body">
                  <div class="card-desc">
                     <h3>Todays Special</h3>
                     <h5>Malabar biryani</h5>
                     <span>(Kerala Style)</span>
                     <h6>&#8377; 185 <sub><del>&#8377; 250</del></sub></h6>
                  </div>
                <img  src='${bannerBowlLogo}' alt="chicken-curry" width="150"/>               
               </div>
             </div>
             </div>

              <div class="swiper-slide">
               <div class="card">
                <div class="card-body">
                  <div class="card-desc">
                     <h3>Todays Special</h3>
                     <h5>Malabar biryani</h5>
                     <span>(Kerala Style)</span>
                     <h6>&#8377; 185 <sub><del>&#8377; 250</del></sub></h6>
                  </div>
                <img  src='${bannerBowlLogo}' alt="chicken-curry" width="150"/>               
               </div>
             </div>
             </div>

             </div>
               <div class="swiper-pagination"></div>
             </div> <!-- products-slider end here -->

            <div class="products-list">
               <h3>Highly Recommended</h3>
               <div class="recommended-products">
                  <div class="card">
                     <div class="card-body">
                        <div class="card-desc">
                           <h5>Hyderabad <br/> Dum Biryani</h5>
                        <h6>&#8377; 320(Kerala Style)</h6>
                        </div>
                     <img  src='${chickenCurryLogo}' alt="chicken-curry" width="110"/>
                  </div>
                  </div>
                  <div class="card">
                     <div class="card-body">
                        <div class="card-desc">
                           <h5>Hyderabad <br/> Dum Biryani</h5>
                        <h6>&#8377; 320(Kerala Style)</h6>
                        </div>
                     <img  src='${chickenCurryLogo}' alt="chicken-curry" width="110"/>
                  </div>
                  </div>
                  <div class="card">
                     <div class="card-body">
                        <div class="card-desc">
                           <h5>Hyderabad <br/> Dum Biryani</h5>
                        <h6>&#8377; 320(Kerala Style)</h6>
                        </div>
                     <img  src='${chickenCurryLogo}' alt="chicken-curry" width="110"/>
                  </div>
                  </div>
                  <div class="card">
                     <div class="card-body">
                        <div class="card-desc">
                           <h5>Hyderabad <br/> Dum Biryani</h5>
                        <h6>&#8377; 320(Kerala Style)</h6>
                        </div>
                     <img  src='${chickenCurryLogo}' alt="chicken-curry" width="110"/>
                  </div>
                  </div>
                  <div class="card">
                     <div class="card-body">
                        <div class="card-desc">
                           <h5>Hyderabad <br/> Dum Biryani</h5>
                        <h6>&#8377; 320(Kerala Style)</h6>
                        </div>
                     <img  src='${chickenCurryLogo}' alt="chicken-curry" width="110"/>
                  </div>
                  </div> 
            </div> <!-- end recommeded products -->              
          </div>
         </div>
         <!-- another recommended -->
         <div class="container lastest-recommended">
         <div class="products-list">
               <h3>Highly Recommended</h3>
               <div class="recommended-products">
                  <div class="card">
                     <div class="card-body">
                        <div class="card-desc">
                           <h5>Hyderabad <br/> Dum Biryani</h5>
                        <h6>&#8377; 320(Kerala Style)</h6>
                        </div>
                     <img  src='${chickenCurryLogo}' alt="chicken-curry" width="110"/>
                  </div>
                  </div>
                  <div class="card">
                     <div class="card-body">
                        <div class="card-desc">
                           <h5>Hyderabad <br/> Dum Biryani</h5>
                        <h6>&#8377; 320(Kerala Style)</h6>
                        </div>
                     <img  src='${chickenCurryLogo}' alt="chicken-curry" width="110"/>
                  </div>
                  </div>
                  <div class="card">
                     <div class="card-body">
                        <div class="card-desc">
                           <h5>Hyderabad <br/> Dum Biryani</h5>
                        <h6>&#8377; 320(Kerala Style)</h6>
                        </div>
                     <img  src='${chickenCurryLogo}' alt="chicken-curry" width="110"/>
                  </div>
                  </div>
                  <div class="card">
                     <div class="card-body">
                        <div class="card-desc">
                           <h5>Hyderabad <br/> Dum Biryani</h5>
                        <h6>&#8377; 320(Kerala Style)</h6>
                        </div>
                     <img  src='${chickenCurryLogo}' alt="chicken-curry" width="110"/>
                  </div>
                  </div>
                  <div class="card">
                     <div class="card-body">
                        <div class="card-desc">
                           <h5>Hyderabad <br/> Dum Biryani</h5>
                        <h6>&#8377; 320(Kerala Style)</h6>
                        </div>
                     <img  src='${chickenCurryLogo}' alt="chicken-curry" width="110"/>
                  </div>
                  </div> 
            </div> <!-- end recommeded products -->              
          </div>
          </div>
      </section>
   </main>
`;

// swiper js
var swiper = new Swiper(".mySwiper", {
   autoplay:{
      delay:1500,
      disableOnInteraction:false,
   },
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});