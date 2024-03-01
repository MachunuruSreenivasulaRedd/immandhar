import {Navbar,NavDropdown,Nav,Container, Carousel,ExampleCarouselImage} from 'react-bootstrap'
import './index.css'
const Home = () => {
    return(
        <div className="mainContainer">
            <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home"><img src="https://res.cloudinary.com/dollmqugm/image/upload/v1709200639/WhatsApp_Image_2024-02-29_at_2.52.42_PM_u6mkm6.jpg" className="logo" alt="brand" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggler'/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navBack">
            <Nav.Link href="#" className='item'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='item'>About Us</Nav.Link>
            <NavDropdown title="Services" className="item" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">Local Travel</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Airport Transfer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Outstation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Corporate Car Rental
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Long Term Car Lease</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Taxis for Wedding,Events & Exhibitions</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Tours/Packages</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Luxury Cabs in Chandigarh</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Cab Rental Gurugoan-Hiway Cabs</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="New Arrivals" className='item' id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#"> Unleash Opulence with Mercedes GLS on rent with HiWay Cabs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
              Kia Carnival On Rent in Chandigarh, Delhi
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Toyota Vellfire on rent in Chandigarh with HiWay Cabs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                All- New Mercedes Benz-E-Class 2023 on Rent in Chandigarh
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Urbania on Rent in Chandigarh</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Toyota Innova Hycross on Rent in Delhi</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tours" className='item' id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">Char Dham Yatra from Chandigarh</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Delhi to Char Dham Yatra
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Haridwar to Char Dham Yatra</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Delhi to Rajasthan Tour
              </NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="#test" className='item'>Testimonials</Nav.Link>
            <Nav.Link href="#blogs" className='item'>Blogs</Nav.Link>
            <Nav.Link href="#contact" className='item'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="banner">
      <div className='bannerContent'>
        <h1 className='bannerHeader'>Welcome to Mumbai's Premier Taxi Service</h1>
        <p className='bannerQuote'>Discover seamless transportation across Mumbai and Maharashtra with our top-rated taxi service. Whether you're commuting within the city or exploring the scenic landscapes of Maharashtra, we've got you covered.</p>
        <button className='bannerBtn' type="button">Read More</button>
      </div>
    </div>
    <div className='WhyChooseSection'>
      <h1>Why Choose Us?</h1>
      <hr className='liner'/>
      <ol type="1">
        <li><span >Reliability:</span> Our fleet of well-maintained vehicles ensures reliability and comfort throughout your journey.</li>
        <li><span>Safety:</span>  Your safety is our priority. Our drivers are experienced, licensed, and undergo regular training.
</li>
        <li><span>Convenience:</span> Booking a ride is quick and easy. Use our user-friendly app or call our hotline for instant reservations.</li>
        <li><span>Affordability:</span> Enjoy competitive rates with transparent pricing. No hidden fees or surprises!</li>
        <li><span>Customer satisfaction:</span> We are committed to providing exceptional service, ensuring that every ride exceeds your expectations.</li>
      </ol>
      <h1 className='explore'>Explore Mumbai and Maharashtra hassle-free with our trusted taxi service. <span>Book Your Ride</span> today and experience the difference! </h1>
    </div>
    <div className='aboutSection'>
      <h1 className='aboutHeader'>About Us</h1>
      <hr className='liner'/>
      <p className='aboutContent'>With a mission of transforming long-distance commute into a memorable and enjoyable experience, Imandar Tour and Travels has been serving travellers across western and Central India over last 15+ years. In this time, Imandar Tour and Travels  has established it’s name as The Best Cab Service in Mumbai ,& Maharastra &  as well as The Best Cab service in Mumbai & Maharastra including Pune , and Nagpur.
True to it's stature, Imandar  has always traveled an extra mile with the sole aim of customer satisfaction.Providing consumer centric services in the most economical prices, we are constantly innovating to fulfill all the local as well as outstation travel related needs of our clients & provide them with an ultimate experience that they look forward to.

With a highly-experienced and trained fleet of drivers, we assure you top-notch quality and safety at all times.
Imandar  Cabs have a dedicated 24*7 customer care panel, which would be happy to be at your disposal at any instance.

Our former and dedicated customer base is proof of our impeccably satisfactory service. We are justifiably proud of our record of providing highly rated 5- Star customer services, with an equally quick and responsive 1-hour turnaround time on almost every request.
With a vast experience of working with superior clientele including multiple Fortune 50 companies.</p>
    </div>
    <div className='services'>
      <h1 className='headLine'>Cab Services in Mumbai & Maharashtra</h1>
      <p>Our comprehensive suite of professionals caters to a diverse team,ranging from seasoned architects to renowned engineers.</p>
      <div className='AllServices'>
        <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/01-1.png" alt="Local Travel" className='serviceImg'/>
          <p className='serviceName'>Local Travel</p>
          </div>
          <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/02-1-300x102.png" alt="oustation travel" className='serviceImg'/>
          <p className='serviceName'>Explore Mumbai's Outstation Escapes</p>
          </div>
          <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/03-1.png" alt="airport transfers" className='serviceImg'/>
          <p className='serviceName'>Airport Transfer</p>
          </div>
          <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/06-1.png" alt="cabs for weddings & events" className='serviceImg'/>
          <p className='serviceName'>Special Ocassion Services </p>
          </div>
          <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/04-1.png" alt="corporate car rental" className='serviceImg'/>
          <p className='serviceName'>Corporate car Rental</p>
          </div>
          <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/05-1.png" alt="long term car lease" className='serviceImg'/>
          <p className='serviceName'>Long-Term Car Lease</p>
          </div>
          </div>
        </div>
    {/* <div className='quote'>
      <h1 className='headLine'>Best Taxi Service in Chandigarh, Now Operational in Delhi & <br />Gurgaon!</h1>
      <hr />
      <p className='quoteContent'>
      The Best Taxi Service in Chandigarh, Delhi, Mohali, Panchkula, Gurgaon & Noida- HiWay Cabs, is adept in providing it’s clients a travel experience par excellence whilst basking in utmost luxury.
Enjoy local-city travel, outstation travel, airport transfers, railway station transfers or book tour packages in the most economical prices.<br /><br/>

We have a hands-on experience with luxury hotels & have catered to large scale events with  top event companies in Delhi as well as Chandigarh. 

Call- 8872711111 to book an efficient and comprehensive taxi service for a hassle-free travel experience.
      </p>
      <button type="button" className='bookBtn'>Book Now</button>
    </div>
    <div className='aboutSection'>
      <h1 className="headLine">ABOUT US</h1>
      <hr />
      <h1 className='headLine'>Who we are & why choose us ?</h1>
      <p className="aboutContent">HiWay Cabs provides a one-stop solution for all your travel needs. Aimed at simplifying long-distance traveling, we are committed to providing a safe, secure, luxurious, and economic service to our customers. Confident of our quality standards, and imparting the best taxi service in Chandigarh, for over 6 years, we wish to reform the way you travel.</p>
      <button className='knowBtn' type="button">Know More</button>
    </div>
    <div className='services'>
      <h1 className='headLine'>Taxi & Cab Services in Chandigarh</h1>
      <div className='AllServices'>
        <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/01-1.png" alt="Local Travel" className='serviceImg'/>
          <p className='serviceName'>Local Travel</p>
          </div>
          <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/02-1-300x102.png" alt="oustation travel" className='serviceImg'/>
          <p className='serviceName'>Outstation Travel</p>
          </div>
          <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/03-1.png" alt="airport transfers" className='serviceImg'/>
          <p className='serviceName'>Airport Transfers</p>
          </div>
          <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/04-1.png" alt="corporate car rental" className='serviceImg'/>
          <p className='serviceName'>Corporate car Rental</p>
          </div>
          <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/05-1.png" alt="long term car lease" className='serviceImg'/>
          <p className='serviceName'>Long-Term Car Lease</p>
          </div>
          <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/06-1.png" alt="cabs for weddings & events" className='serviceImg'/>
          <p className='serviceName'>Cabs For Weddings & Events </p>
          </div>
          {/* <button type='button' className='bookBtn'>Book Now</button> */}
      {/* </div>
    </div>
    <div className='reviewSection'>
    <h1 className='headLine reviewHeadLine'>Reviews from our Travellers</h1>
    <br/>
    <div className='reviews'>
      <img src="https://hiwaycabs.com/wp-content/uploads/2022/07/606-6060823_trip-advisor-graphic-design-hd-png-download-300x231.png" alt="tripadvisor" className='advisorImage' />
      <div className='customerReviews'></div>
      <div className='googleRatingSection'>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/07/google-5-stars-reviews-png-11.webp" className='googleRating' alt="google" />
      </div>
      <button className='viewBtn' type="button">View More</button>
      </div>
    </div>
    <div className='typesOfCabs'>
      <div className='sedanType'>
        <h1 className='name'>Sedan</h1>
        <Carousel>
      <Carousel.Item>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/09/1-e1662810409939.jpg" className="carImg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/09/2-e1662810420837.jpg" className="carImg" alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/09/3-e1662810432419.jpg" className="carImg" alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/09/1-e1662810409939.jpg" className="carImg" alt="" />
      </Carousel.Item>
    </Carousel>
      </div>
      <div className='premiumsedanType'>
        <h1 className='name'>Premium Sedan</h1>
        <Carousel>
      <Carousel.Item>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/09/6-1.jpg" className="carImg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/09/9-1.jpg" className="carImg" alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/09/10-1.jpg" className="carImg" alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/09/11.jpg" className="carImg" alt="" />
      </Carousel.Item>
    </Carousel>
      </div>
      <div className='premiumSuvType'>
        <h1 className='name'>Premium Suv </h1>
        <Carousel>
      <Carousel.Item>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/09/2-1.png" className="carImg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/09/4-2.jpg" className="carImg" alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/09/5-1.jpg" className="carImg" alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/09/7-2.jpg" className="carImg" alt="" />
      </Carousel.Item>
    </Carousel>
      </div>
      <div className='luxuryType'>
        <h1 className='name'>Luxury</h1>
        <Carousel>
      <Carousel.Item>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/09/1-1.png" className="carImg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/09/7-3.jpg" className="carImg"  alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/09/6-2.jpg" className="carImg" alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/09/9-2.jpg" className="carImg" alt="" />
      </Carousel.Item>
    </Carousel>
      </div>
    </div>
    <div className='about'>
      <h1 className='aboutHeadLine'>Book the Best Taxi Service in Chandigarh with HiWay Cabs for a seamless travel experience, every single time.</h1>
      <p className='AboutContent'>Chandigarh, also known as City beautiful, is a union territory in India. It is a beautiful destination which is often a stop on the way for avid travelers moving towards Himachal Pradesh or to explore the culturally rich state of Punjab.

Despite the fact that Chandigarh is well-connected by airways and trains, the best way to travel to, in or from Chandigarh is by the means of a taxi. This allows people to explore the scenic beauty of the city while availing the benefit of its structurally planned road infrastructure which is  a sight to see in itself.

With the advancement in technology and grand infrastructure that the City of Chandigarh has to offer, you can now book a taxi in Chandigarh with a single call at +91-8872711111.

Depending on your specific travel needs, you can choose to hire a taxi in Chandigarh for the following services-
<ol>
  <li> Local Travel in Chandigarh</li>
  <li>Outstation Travel from Chandigarh</li>
  <li>Airport/ Railway station Transfers from Chandigarh</li>
  <li>Long- Term Leasing of Vehicles in Chandigarh</li>
  <li>Corporate Car Rental In Chandigarh</li>
  <li>Tour Packages from Chandigarh</li>
  <li>Luxury Cabs on Rent In Chandigarh</li>
</ol>
</p>
    </div> */}
        </div>
    )
}

export default Home