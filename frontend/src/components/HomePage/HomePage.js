import React, { Component } from "react";
import "./HomePageStyles.css";
import airport from "./airport.png";
import image1 from "./image1.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import heart from "./heart.svg";
import icon from "./icon.png";
import Gujarat from "./Gujarat.avif";
import ArunachalPradesh from "./ArunachalPradesh.jpg";
import Sikkim from "./Sikkim.jpg"
import himachal from "./himachal.jfif"

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  render() {
    return (
      
      <div className="container">
        <h1 className="let">Let us plan you a<br></br>
        perfect <span className="color">India Holiday</span></h1>

        <br></br>
        <div class="t-card" data-aos="flip-left" data-aos-duration="1000">
              <img
                src={image4}
                alt="france"
                width="500"
                height="500"
                class="t-card__img"
              />
              <div class="t-card__content">
                <div class="t-card__title">
                  <h3 class="name"> Rajasthan</h3>
                  <p class="price">10,000 Rupees</p>
                </div>
                <div class="t-card__description">
                Discover the incredible beauty of the land of royal palaces & forts with affordable Rajasthan Tour packages available at Tour My India. Our packages cover the major exotic heritage attractions from all the popular tourist destinations of Rajasthan like Jaipur, Bikaner, Udaipur, Jaisalmer, Jodhpur and other offbeat places. Avail best discounts on Rajasthan family tour packages, honeymoon vacation tours and weekend tour packages by booking with us. With our affordable Rajasthan Travel Packages,
               discover the beauty of the state like never before! We're here to guide you keeping in mind your precise needs and make sure you enjoy a perfect vacation tour.
                </div>
                <div class="t-card__items">
                  <div class="days">6 Days</div>
                  <div class="likes">
                    <img
                      src={heart}
                      alt="heart"
                      width="20"
                      height="20"
                    />
                    4.9k
                  </div>
                </div>
              </div>
            </div>
  
            <div className="container"></div>
            <div class="t-card" data-aos="flip-left" data-aos-duration="1000">
              <img
                src={image3}
                alt="france"
                width="500"
                height="500"
                class="t-card__img"
              />
              <div class="t-card__content">
                <div class="t-card__title">
                  <h3 class="name">Taj Mahal</h3>
                  <p class="price">2,000 Rupees</p>
                </div>
                <div class="t-card__description">
                The Taj Mahal is considered to be the greatest architectural achievement in the whole range of Indo-Islamic architecture. 
                Its recognised architectonic beauty has a rhythmic combination of solids and voids, 
                concave and convex and light shadow; such as arches and domes further increases the aesthetic aspect.
                </div>
                <div class="t-card__items">
                  <div class="days">6 Days</div>
                  <div class="likes">
                    <img
                      src={heart}
                      alt="heart"
                      width="20"
                      height="20"
                    />
                    4.9k
                  </div>
                </div>
              </div>
            </div>
            <div class="t-card" data-aos="flip-left" data-aos-duration="1000">
              <img
                src={himachal}
                alt="france"
                width="500"
                height="500"
                class="t-card__img"
              />
              <div class="t-card__content">
                <div class="t-card__title">
                  <h3 class="name">Himachal</h3>
                  <p class="price">5,000 Rupees</p>
                </div>
                <div class="t-card__description">
                  With snow-capped mountains to plunging river valley, age-old monasteries to quaint churches, Himachal Pradesh makes for a holiday destination for all. If you have been planning to visit Himachal Pradesh, find out how we can make your Himachal Pradesh tour worth remembering for a lifetime. We at Tour My India offer the best Himachal Pradesh tour packages with attractive deals that are perfect for a family vacation, holiday with friends, adventure, and honeymoon.
                 Unwind amidst the serene beauty of Himachal Pradesh with the best affordable tour packages offered by Tour My India.
                </div>
                <div class="t-card__items">
                  <div class="days">6 Days</div>
                  <div class="likes">
                    <img
                      src={heart}
                      alt="heart"
                      width="20"
                      height="20"
                    />
                    4.9k
                  </div>
                </div>
              </div>
            </div>
            <div class="t-card" data-aos="flip-left" data-aos-duration="1000">
              <img
                src={Gujarat}
                alt="france"
                width="500"
                height="500"
                class="t-card__img"
              />
              <div class="t-card__content">
                <div class="t-card__title">
                  <h3 class="name">Gujarat</h3>
                  <p class="price">3,000 Rupees</p>
                </div>
                <div class="t-card__description">
                Gujarat is a popular tourist destination in Western India. Explore the diversity of Incredible Gujarat with our best Gujarat Tour Packages that take you on a tour of picturesque beaches, heritage sites, temples, wildlife sanctuaries & national parks, 
                the large white desert Rann of Kutch, Statue of Unity and many other popular attractions of Gujarat. Gujarat Tourism offers a numerous opportunity for a sightseeing tour.
                 Get special deals & discounts on Gujarat holiday packages only with Tour My India.
                </div>
                <div class="t-card__items">
                  <div class="days">6 Days</div>
                  <div class="likes">
                    <img
                      src={heart}
                      alt="heart"
                      width="20"
                      height="20"
                    />
                    4.9k
                  </div>
                </div>
              </div>
            </div>
            <div class="t-card" data-aos="flip-left" data-aos-duration="1000">
              <img
                src={ArunachalPradesh}
                alt="france"
                width="500"
                height="500"
                class="t-card__img"
              />
              <div class="t-card__content">
                <div class="t-card__title">
                  <h3 class="name">ArunachalPradesh</h3>
                  <p class="price">1,000 Rupees</p>
                </div>
                <div class="t-card__description">
                We at Tour My India know exactly what catches the attention of tourists in Arunachal Pradesh and that is why offer our expert assistance to make your tour to this amazing Northeastern state. 
                Our dedicated team streamlines the best Arunachal tourism holiday packages and let you get the best of the state. We promise assorted Arunachal vacation packages that cater to your special needs and interests. You can trust us with prompt transport services, 
                filtering the best hotels and accommodation options and providing other important travel & tourism services at your disposal.
                </div>
                <div class="t-card__items">
                  <div class="days">4 Days</div>
                  <div class="likes">
                    <img
                      src={heart}
                      alt="heart"
                      width="20"
                      height="20"
                    />
                    4.9k
                  </div>
                </div>
              </div>
            </div>
            <div class="t-card" data-aos="flip-left" data-aos-duration="1000">
              <img
                src={Sikkim}
                alt="france"
                width="500"
                height="500"
                class="t-card__img"
              />
              <div class="t-card__content">
                <div class="t-card__title">
                  <h3 class="name">Sikkim</h3>
                  <p class="price">6,000 Rupees</p>
                </div>
                <div class="t-card__description">
                With our Sikkim Tour Packages, you’re in for an experience of exploring the home of Mt Kanchenjunga, world’s third highest mountain. 
                The northeastern state of Sikkim offers the opportunity of witnessing the rich culture of Lepchas, Bhutias, Nepalese; exquisite Buddhist monasteries; sacred alpine lakes; and high mountain passes. It unfolds unforgettable experiences of trekking, motorbiking & mountain biking on its winding trails; savouring delectable cuisine; and a peek inside its rich traditional art & craft. Make your holidays in Sikkim and Northeast India quite special with TMI. 
                Avail upto 50% discount on Sikkim Gangtok holiday tourism packages 2022/2023 for family vacations, honeymoon tours, adventure tours, cultural tours and weekend tour packages.

                </div>
                <div class="t-card__items">
                  <div class="days">4 Days</div>
                  <div class="likes">
                    <img
                      src={heart}
                      alt="heart"
                      width="20"
                      height="20"
                    />
                    4.9k
                  </div>
                </div>
              </div>
            </div>
           
    </div>
    

    );
  }
}

export default HomePage;
