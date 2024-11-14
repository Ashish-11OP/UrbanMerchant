import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";

import Contact from "./Contact";

import "./FrontPage.css";
export default function FrontPage() {
  return (
    <div>
      <NavBar />

      <section class="about section " id="about">
        <h2 class="section-title">About</h2>

        <div class="about__container bd-grid">
          <div class="about__img"> <img src="https://miro.medium.com/max/1200/1*sh1rOIDGJQBNhSunobPszw.jpeg" />
            <p class="about__text">
              <h4 class="imp1">A marketplace to showcase innovative products across various categories
                curated by local talent!
              </h4>
            </p></div>
          <div>
            <img src="https://img.freepik.com/free-vector/support-local-business-concept_23-2148593677.jpg?w=740&t=st=1650729896~exp=1650730496~hmac=c58b0c857f0b822927a02219f6f0077ad7658a56c460715db231cebc56d73325" />
          </div>

        </div>
      </section>
      <div><h1> <a class="imp" href="https://www.juscorpus.com/vocal-for-local-government-initiatives-and-outcomes/" class="btn">Govt Info

      </a></h1>

      </div>

      <section class="skills section" id="skills">


        <div class="skills__container bd-grid">
          <div>
            <h2 class="skills__subtitle">Benefits For You!!</h2>
            <p class="skills__text"></p>
            <div class="skills__data">
              <div class="skills__names">
                <i class='bx bxl-html5 skills__icon'></i>
                <span class="skills__name"><h3 class="ap">Recognition</h3></span>



              </div>
              <div class="skills__bar skills__html">

              </div>
              <div>
                <span class="skills__percentage"></span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__names">
                <i class='bx bxl-css3 skills__icon'></i>
                <span class="skills__name"><h3 class="ap">Convenience</h3></span>

              </div>
              <div class="skills__bar skills__css">


              </div>
              <div>
                <span class="skills__percentage"></span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__names">
                <i class='bx bxl-javascript skills__icon' ></i>
                <span class="skills__name"><h3 class="ap">Marketing</h3></span>
              </div>
              <div class="skills__bar skills__js">

              </div>
              <div>
                <span class="skills__percentage"></span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__names">
                <i class='bx bxs-paint skills__icon'></i>
                <span class="skills__name"><h3 class="ap">Transparency</h3></span>
              </div>
              <div class="skills__bar skills__ux">

              </div>
              <div>
                <span class="skills__percentage"></span>
              </div>

            </div>
          </div>
          <div>
            <img src="https://img.freepik.com/free-vector/vocal-local-campaign-india-independence-day-poster-vector-modern-banner-illustration_460848-1940.jpg?w=1060" />
          </div>

        </div>
      </section>
      <footer id="footer_section" class="footer">
        <p class="footer__title">UrbanMerchant</p>
        <div class="footer__social">

          <a href="#" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
          <a href="#" class="footer__icon"><i class='bx bxl-twitter' ></i></a>
          <a class="footbtn" href="https://contactus.tiiny.site">Contact Us</a>
          <a class="footbtn" href="romilmodi2014@gmail.com">About Us</a>


        </div>
        <p class="copy">© Copyright all right reserved</p>
      </footer>

    </div>

  );
}
