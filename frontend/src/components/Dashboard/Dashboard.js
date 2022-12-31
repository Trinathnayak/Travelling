import React, { Component } from "react";
import "./DashboardStyles.css";
import loader from "./loader.gif";
import sigiriya from "./sigiriya.jpg";
import sigiriya2 from "./sigiriya2.jpg";
import sigiriya3 from "./sigiriya3.jpg";
import image2 from "./image2.jfif"
/*import react-bootstrap from "react-bootstrap"*/
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
    };
  }

  render() {
    return (
      <div className="q">
        <div className="container">
          <div className="container text-left">
            <br></br>
            <br></br>
            <img className="imageBack" src={image2} width="100%"></img>
            <h1 className="d">About Us</h1>
            <br></br>
            <br></br>
            <p className="p">
            <span className="edit">Travel to India</span> is one of the best travel agency and service provider in India 
            with branch office established in New Delhi. Founded in the year 2011 as traveltoindia.
            org an online travel service provider is providing excellent services all over India with best
            India holiday tour packages. The company with its professionally managed trip plans and itineraries specializes
            mainly in organizing Adventure tours, Cultural tours, pilgrimage tours, hill station romantic tour & wildlife
            adventure tours in India through a wide spread network. We offer 24 X 7 hours services that include travel planning, 
           customized holiday packages, itinerary design, hotel bookings and transport facilities as per your demand and budget.
           </p>
              <br></br>
              <br></br>
            <h3>WHY choose Travel to India?</h3>
            <p className="p">
            We are consistently working in travel sector with quality staff, skilled driver, expert travel package designer. 
            We are continuously increasing towards success with positive feedback of our respective clients and smooth work structure. 
            We offer.
            </p>
            <br></br>
            <ol>
              <li>Guaranteed best deals</li>
              <li>Hassle-free Holiday planning</li>
              <li>Quality services in each sector either hotels or transport</li>
              <li>Best Travel Itinerary that suits your plan and budget</li>
            </ol>
              <br></br>
              <p className="p">
              Travel to India takes the opportunity to make you informed about the glorified fortunes of this astounding ancient nation. 
              The nation which is brimming with contrasts and with the most appealing tour and travel services we are here to assist you to perceive and regard those distinctions and adaptability in a fantastic and regal way.
               For booking convenience, transportation and direction our committed individuals will consistently stand by you to bring the most impressive Travel to India Services.

              From Northern Himalayas to Southern beaches, Eastern forests to Western deserts, India is prospered with such a large number of cultural and geological diversities, a perfect reason behind booming Indian tourism industry. From rich natural valleys, snow-capped mountains and flawless beaches to well-preserved wildlife sanctuaries, adventure spots, historical landmarks, and cultural and heritage sights - there are lot of beautiful options to explore in India. With a variety of outlandish tourist destinations, including the ones detailed on India tour packages page, our explorers are spoilt for decision. To dive profound into the mystical environs of their preferred destinations, every one of the one need to do is look through the itineraries of our well-made travel packages so as to decide for their next holiday destination, and prepare for a thrilling experience. Go through our comprehensive Trip packages to pick one suitable just for you, and begin packing to be left amazed with unmatchable travel experiences.

              Royal Rajasthan, lying at the west end part is the most ecstatic state where beautiful clothing types and lively societies with vibrant culture, tradition are its actual mystification. The place that is known for the Rajputs resembles numerous forts, palaces and museums attracting tourists to encounter memorable travel to India.

             India is additionally encircled with numerous profound and holy places right from the consecrated Himalayan valleys to the oceanic temples of south.

             The historical backdrop of India is engraved profoundly and perpetually at its antiquated artworks, 
             rock cut structures and models at various old caverns and landmarks. The Ajanta, Ellora and Elephanta in Maharashtra, temples in Karnataka and ancient Mahabalipuram in Tamil Nadu are the ideal models for historical connections in India.

              India Tourism additionally brings a fantastic instance of backwater visit in its huge, articulate beaches. 
              The altruistic beaches of Kerala, Goa, Maharashtra and Tamil Nadu provides tourists the peacefulness of the nature along with lifetime cherished memories.

              For the welfare of the imperilled species and balancing the eco-framework,
               India is wide spread with in more than 500 wildlife sanctuaries and bio-reserve. India gladly holds enormous includes of wild species in the individual zones for great wilderness.

              India Tour Packages are perhaps the most ideal approaches to travel bother free. With consistent arranging, plans, and moves being dealt with, booking tour packages are the most ideal approach to explore the world's beauty and varied landscapes. Every tourist has their own mindset and reasons for travelling and selection of place to travel. Whether you are searching for a solo trip, couple journey, family trip or friend’s group tour, travel packages designed by Travel to India ensure each tourist to get an encounter to esteem for long memory.

              For the individuals who do pre-plan, apply some effort to make a total schedule following some exploration about the destination you are planning to visit. Pay special consideration to festivals, celebrations, climate, and political atmosphere when you are working on a schedule. This gives space to back up plans in the event of unanticipated travel issues. The itinerary likewise guarantees that everything is arranged dependent on what you/your family needs to see and experience. Simply ensure all the activities are something worth trying and gives you and your loved fellows exciting and truly new dimension of the place. Whole in all, just not to worry much, contact us and be worry free about all the consequences. If you are travelling on a budget then you should plan with flight, ground arrangements, passport, visa, meals, transport, shopping and contingency cash for emergency.
                      </p>
                      <br></br>
                      <br></br>

              
              <div className="container text-center">
                <h4>Thank you</h4>
              </div>
              <br></br>
              <br></br>
              
              <br></br>
              <br></br>
             
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
