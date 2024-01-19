
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';
const slides = [
    {
      id: 1,
      title: "Grow Your Business",
      subtitle: "Let's grow your business together",
      description: "Optio reiciendis accusantium iusto architecto at quia minima maiores quidem, dolorum.",
    },
    {
      id: 2,
      title: "Unde Perspiciatis",
      subtitle: "Unde perspiciatis ut repellat dolorem",
      description: "Amet cumque nam sed voluptas doloribus iusto. Dolorem eos aliquam quis.",
    },
    {
      id: 3,
      title: "Aliquid Non Alias Minus",
      subtitle: "Aliquid non alias minus",
      description: "Necessitatibus voluptatibus explicabo dolores a vitae voluptatum.",
    },
    {
      id: 4,
      title: "Necessitatibus Suscipit",
      subtitle: "Necessitatibus suscipit non voluptatem quibusdam",
      description: "Tempora quos est ut quia adipisci ut voluptas. Deleniti laborum soluta nihil est. Eum similique neque autem ut.",
    },
    // Add more objects for additional slides
  ];


export default function Home (){
    return(

        <>
        <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <h2 data-aos="fade-up">Focus On What Matters</h2>
            <blockquote data-aos="fade-up" data-aos-delay="100">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis cum recusandae eum laboriosam voluptatem repudiandae odio, vel exercitationem officiis provident minima. </p>
            </blockquote>
            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
              <a href="#about" className="btn-get-started">Get Started</a>
              <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center">
                <i className="bi bi-play-circle"></i><span>Watch Video</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <main id='main'>
      <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Why Choose Us</h2>
          </div>
          <div className="row g-0" data-aos="fade-up" data-aos-delay="200">
            <div className="col-xl-5 img-bg" style={{ backgroundImage: "url('./src/assets/img/why-us-bg.jpg')" }}></div>
            <div className="col-xl-7 slides position-relative">
              <Carousel>
                {slides.map((slide) => (
                  <Carousel.Item key={slide.id}>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        backgroundImage: "url('./src/assets/img/your-slide-image.jpg')", // Replace with your image path
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100vh', // Adjust as needed
                      }}
                    >
                      <div className="text-center text-light">
                        <h3 className="mb-3">{slide.title}</h3>
                        <h4 className="mb-3">{slide.subtitle}</h4>
                        <p>{slide.description}</p>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </main>

    <section id="services-list" className="services-list" data-aos="fade-up">
      <div className="container">

        <div className="section-header">
          <h2>Our Services</h2>
        </div>

        <div className="row gy-5">

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="icon flex-shrink-0"><i className="bi bi-briefcase" style={{ color: '#f57813' }}></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="icon flex-shrink-0"><i className="bi bi-card-checklist" style={{ color: '#15a04a' }}></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">Dolor Sitema</a></h4>
              <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="icon flex-shrink-0"><i className="bi bi-bar-chart" style={{ color: '#d90769' }}></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="icon flex-shrink-0"><i className="bi bi-binoculars" style={{ color: '#15bfbc' }}></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
            <div className="icon flex-shrink-0"><i className="bi bi-brightness-high" style={{ color: '#f5cf13' }}></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
            <div className="icon flex-shrink-0"><i className="bi bi-calendar4-week" style={{ color: '#1335f5' }}></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">Eiusmod Tempor</a></h4>
              <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section id="call-to-action" className="call-to-action">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h3>Ut fugiat aliquam aut non</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <a className="cta-btn" href="#">Call To Action</a>
          </div>
        </div>
      </div>
    </section>

    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <h3>Powerful Features for <br />Your Business</h3>

            <div className="row gy-4">
              <FeatureItem icon="ri-store-line" color="#ffbb2c" text="Easy Cart Features" />
              <FeatureItem icon="ri-bar-chart-box-line" color="#5578ff" text="Sit amet consectetur adipisicing" />
              <FeatureItem icon="ri-calendar-todo-line" color="#e80368" text="Ipsum Rerum Explicabo" />
              <FeatureItem icon="ri-paint-brush-line" color="#e361ff" text="Easy Cart Features" />
              <FeatureItem icon="ri-database-2-line" color="#47aeff" text="Easy Cart Features" />
              <FeatureItem icon="ri-gradienter-line" color="#ffa76e" text="Sit amet consectetur adipisicing" />
              <FeatureItem icon="ri-file-list-3-line" color="#11dbcf" text="Ipsum Rerum Explicabo" />
              <FeatureItem icon="ri-base-station-line" color="#ff5828" text="Easy Cart Features" />
            </div>
          </div>
          <div className="col-lg-5 position-relative" data-aos="fade-up" data-aos-delay="200">
            <div className="phone-wrap">
              <img src="./src/assets/img/iphone.png" alt="Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="details">
        <div className="container" data-aos="fade-up" data-aos-delay="300">
          <div className="row">
            <div className="col-md-6">
              <h4>Labore Sdio Lidui<br />Bonde Naruto</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nostrum molestias doloremque quae delectus odit minima corrupti blanditiis quo animi!</p>
              <a href="#about" className="btn-get-started">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="recent-posts" className="recent-posts">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Recent Blog Posts</h2>
        </div>

        <div className="row gy-5">
          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="post-box">
              <div className="post-img">
                <img src="./src/assets/img/blog/blog-1.jpg" className="img-fluid" alt="" />
              </div>
              <div className="meta">
                <span className="post-date">Tue, December 12</span>
                <span className="post-author"> / Julia Parker</span>
              </div>
              <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>
              <p>Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni est...</p>
              <a href="blog-details.html" className="readmore stretched-link">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="post-box">
              <div className="post-img">
                <img src="./src/assets/img/blog/blog-2.jpg" className="img-fluid" alt="" />
              </div>
              <div className="meta">
                <span className="post-date">Fri, September 05</span>
                <span className="post-author"> / Mario Douglas</span>
              </div>
              <h3 className="post-title">Et repellendus molestiae qui est sed omnis</h3>
              <p>Voluptatem nesciunt omnis libero autem tempora enim ut ipsam id. Odit quia ab eum assumenda. Quisquam omnis doloribus...</p>
              <a href="blog-details.html" className="readmore stretched-link">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="post-box">
              <div className="post-img">
                <img src="./src/assets/img/blog/blog-3.jpg" className="img-fluid" alt="" />
              </div>
              <div className="meta">
                <span className="post-date">Tue, July 27</span>
                <span className="post-author"> / Lisa Hunter</span>
              </div>
              <h3 className="post-title">Quia assumenda est et veritati</h3>
              <p>Quia nam eaque omnis explicabo similique eum quaerat similique laboriosam. Quis omnis repellat sed quae consectetur magnam...</p>
              <a href="blog-details.html" className="readmore stretched-link">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="post-box">
              <div className="post-img">
                <img src="./src/assets/img/blog/blog-4.jpg" className="img-fluid" alt="" />
              </div>
              <div className="meta">
                <span className="post-date">Tue, Sep 16</span>
                <span className="post-author"> / Mario Douglas</span>
              </div>
              <h3 className="post-title">Pariatur quia facilis similique deleniti</h3>
              <p>Et consequatur eveniet nam voluptas commodi cumque ea est ex. Aut quis omnis sint ipsum earum quia eligendi...</p>
              <a href="blog-details.html" className="readmore stretched-link">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>

    </>
    );
}

const FeatureItem = ({ icon, color, text }) => (
    <div className="col-md-6">
      <div className="icon-list d-flex">
        <i className={icon} style={{ color }}></i>
        <span>{text}</span>
      </div>
    </div>
  );

  FeatureItem.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };