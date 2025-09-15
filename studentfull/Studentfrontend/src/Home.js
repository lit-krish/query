import React from "react";
import "./Home.css"; // Create a Home.css file for styling
import { Link } from "react-router";
import { useSelector } from "react-redux"
function Home() {
  const user = useSelector(state => state.userreducer.data)
 
  
  return (
    <>
      <div className="container">
        <div className="Navbar">
          <div className="container">
            <header className="d-flex flex-wrap justify-content-start py-3 mb-4 border-bottom">
              <a href="/" className="d-flex align-items-start mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-4 " style={{ marginRight: "350px", marginLeft: "50px" }}>QueryConnect</span>
              </a>



            
                
                

              <ul className="nav nav-pills">
                <li className="nav-item"><a href="/" className="nav-link active" aria-current="page">Home</a></li>
                <li className="nav-item"><a href="/" className="nav-link"><Link to="/Query" style={{ color: "black", textDecoration: "none" }}>Find Experts</Link></a></li>
                <li className="nav-item"><a href="/" className="nav-link">My sessions</a></li>
                <li className="nav-item"><a href="/" className="nav-link">Payment History</a></li>
                <li className="nav-item"><a href="/" className="nav-link">Reviews</a></li>
                {user ?
                  <Link to="/Profile" className="nav-item nav-link">Profile</Link>
                  :
                  <Link className="nav-item nav-link" to="/Login">Login</Link>}
                <li><a href="#" className="menu-button"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg></a></li>
              </ul>
            </header>
          </div>

        </div>


        <div className="initial">
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src="https://eduww.net/wp-content/uploads/2022/01/student-teacher-interaction.jpg" height={"430px"} width={"530px"} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Get Expert Guidance in Real-Time!</h1>
                <p className="lead">Connect with experts through instant one-on-one video guidance.</p>
                <Link to="/Login">
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" style={{ color: "white", textDecoration: "none" }}>Join now</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="key-featuress">
          <div className="container px-4 py-5">
            <h2 className="pb-2 border-bottom">key Features</h2>

            <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
              <div className="col d-flex flex-column align-items-start gap-2">
                <h2 className="fw-bold text-body-emphasis">Solution to all your Tech Queries just few clicks away</h2>
                <p className="text-body-secondary">Get Expert guidance for Conceptual queries ,bug fixes or solutions to your doubts with One-on-One Video calls</p>
                <Link to="/Query" style={{ color: "white", textDecoration: "none" }} className="btn btn-primary btn-lg">Find an Expert</Link>
              </div>

              <div className="col">
                <div className="row row-cols-1 row-cols-sm-2 g-4">
                  <div className="col d-flex flex-column gap-2">


                    <div className="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="28" fill="currentColor" className="bi bi-camera-video-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z" />
                      </svg></div>

                    <h4 className="fw-semibold mb-0 text-body-emphasis">One-on-one Video Calls</h4>
                    <p className="text-body-secondary">Connect instantly with skilled experts.</p>
                  </div>

                  <div className="col d-flex flex-column gap-2">

                    <div className="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="28" fill="currentColor" className="bi bi-calendar-week" viewBox="0 0 16 16">
                        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                      </svg></div>

                    <h4 className="fw-semibold mb-0 text-body-emphasis">Quick Fixes</h4>
                    <p className="text-body-secondary">Our platform provides a seamless solution for resolving technical issues efficiently.</p>
                  </div>

                  <div className="col d-flex flex-column gap-2">
                    <div className="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                      </svg> </div>
                    <h4 className="fw-semibold mb-0 text-body-emphasis">Expert Reviews & Ratings</h4>
                    <p className="text-body-secondary">Choose best experts based on student reviews.</p>
                  </div>

                  <div className="col d-flex flex-column gap-2">
                    <div className="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-file-lock2" viewBox="0 0 16 16">
                        <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1m2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224" />
                        <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" />
                      </svg></div>
                    <h4 className="fw-semibold mb-0 text-body-emphasis">Secure Payments</h4>
                    <p className="text-body-secondary">Transact through secure transactions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <p>Search for an expert</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <p>Book a session</p>
            </div>
            <div className="step">
              <div className="Video-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="28" fill="currentColor" className="bi bi-camera-video-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z" />
                </svg> {/* Replace with your icon */}</div>
              <p>Join a live video call</p>
            </div>
            <div className="step">
              <div className="Credit-card">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card-fill" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1" />
                </svg></div>
              <p>Pay & rate your experience</p>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <h2>Testimonials</h2>
          <p className="testimonial-text">
            The platform has proven to be exceptionally useful, providing a seamless and efficient way to access expert guidance. I was highly impressed by the depth of knowledge and professionalism demonstrated by the expert, who offered me comprehensive, well-explained, and insightful assistance. Their thorough approach not only helped me understand the subject better but also gave me confidence in applying the knowledge effectively.
          </p>
          <p className="testimonial-author">- Sristi</p>
        </section>

        <section className="faq">
          <h2>FAQ</h2>
          <div className="faqstatement">
            <p>How do I pay for a session?</p>
            <p className="faq-answer">Payments are made through our secure online system.</p>
            <p>What subjects are covered?</p>
            <p className="faq-answer">We cover a wide range of subjects, from math, coding, DSA and science to humanities.</p>
          </div>
        </section>

        <footer className="footer">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>📞 +1 123-456-7890</p>
            <p>📧 info@queryconnect.com</p>
          </div>
          <div className="social-media">
            <h3>Social Media</h3>
            <div className="social-icons">
              <a href="/" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg> {/* Replace with your icon */}
              </a>
              <a href="/" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                </svg>{/* Replace with your icon */}
              </a>
              <a href="/" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg> {/* Replace with your icon */}
              </a>
            </div>
          </div>

        </footer>

      </div>

    </>
  );
}

export default Home;