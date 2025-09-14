import React, { Profiler } from "react";
import "./Home.css"; // Create a Home.css file for styling
import { Link } from "react-router";
import { useSelector ,useDispatch} from "react-redux"
function Home() {
  const user = useSelector(state => state.userreducer.data)
  const dispatch =useDispatch();


  const log_out =async() =>{
    dispatch({type:"LOGOUT"});
  }
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
                <li className="nav-item"><a href="/" className="nav-link">My sessions</a></li>
                <Link to="/request"><li className="nav-item"><a href="/" className="nav-link">Queryrequest</a></li></Link>
                <li className="nav-item"><a href="/" className="nav-link">Student Reviews</a></li>
                
                {user ?
                  <Link className="nav-item nav-link " to="/details">Profile</Link>
                  :
                  <Link className="nav-item nav-link" to="/login">Login</Link>}
                  
                  {user ?
                  <Link className="nav-item nav-link active" to="/">
                    <button
                    type="button"
                    onClick={log_out}>
                      Logout
                    </button>
                  </Link>
                  :
                    <></>}

                  {/*<li className="nav-item"><a href="/" className="nav-link">Support</a></li>*/}

              </ul>
            </header>
          </div>

        </div>


        <div className="initial">
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src="https://media.istockphoto.com/id/1443305526/photo/young-smiling-man-in-headphones-typing-on-laptop-keyboard.jpg?s=612x612&w=0&k=20&c=-JzAS5fjTvxyNRkYoaIlpoLfmt5AEIOcwpt6lk0D4TA=" height={"430px"} width={"530px"} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">BECOME A TUTOR!</h1>
                <p className="lead">Share Your Knowledge. Inspire Minds. Start Teaching Today!"
                  Join QueryConnect to make a difference through one-on-one guidance and earn doing what you love.</p>
                <Link to="/Login">
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" style={{ color: "white", textDecoration: "none" }}>Login</button>
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" style={{ color: "white", textDecoration: "none" }}>Sign up</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="key-featuress">
          <div className="container px-4 py-5">
            <h2 className="pb-2 border-bottom">Why become a Tutor?</h2>

            <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
              <div className="col d-flex flex-column align-items-start gap-2">
                <h2 className="fw-bold text-body-emphasis">The Professional and Personal Gains of a Teaching Career</h2>
                <p className="text-body-secondary">In addition to the satisfaction of assisting students, there are numerous advantages to teaching. Teaching also fosters continuous personal and professional development. Educators often gain improved communication, leadership, and problem-solving skills through their interactions with diverse learners. Additionally, teaching opens doors to networking opportunities, career advancement, and intellectual stimulation, as teachers are constantly learning and adapting to new trends, technologies, and educational strategies.</p>
               
              </div>

              <div className="col">
                <div className="row row-cols-1 row-cols-sm-2 g-4">
                  <div className="col d-flex flex-column gap-2">


                    <div className="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
                        <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
                      </svg></div>

                    <h4 className="fw-semibold mb-0 text-body-emphasis">Flexibility</h4>
                    <p className="text-body-secondary">Decide your own timings. Take classes whenever you want, as long as you want.</p>
                  </div>

                  <div className="col d-flex flex-column gap-2">

                    <div className="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                      </svg></div>

                    <h4 className="fw-semibold mb-0 text-body-emphasis">Incentives</h4>
                    <p className="text-body-secondary">Earn Instantly for every session you take.</p>
                  </div>

                  <div className="col d-flex flex-column gap-2">
                    <div className="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                      </svg> </div>
                    <h4 className="fw-semibold mb-0 text-body-emphasis">Global Experience</h4>
                    <p className="text-body-secondary">Teach students from all over the world.</p>
                  </div>

                  <div className="col d-flex flex-column gap-2">
                    <div className="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-clipboard-check-fill" viewBox="0 0 16 16">
                        <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                      </svg></div>
                    <h4 className="fw-semibold mb-0 text-body-emphasis">Purpose</h4>
                    <p className="text-body-secondary">Create impact in the lives of millions of students.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <section className="how-it-works">
          <h2>How to get started?</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <p>Register yourself through Email</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <p>Get verified by submitting your important details,qualification and certifications</p>
            </div>
            <div className="step">
              <div className="step-number">3
                {/* Replace with your icon */}</div>
              <p>Get requests from the students.</p>
            </div>
            <div className="step">
              <div className="step-number">4
              </div>
              <p>Respond to the requests by attending one-on-one communications with video calls to clear student queries.</p>
            </div>
          </div>
        </section>


        <div className="How it works?">
          <div className="container px-4 py-5">
            <h2 className=" text-center pb-2 border-bottom">How does it works?</h2>



            <div className="col">
              <div className="row row-cols-1 row-cols-sm-2 g-8">
                <div className="col d-flex flex-column gap-2">


                  <div className="icon-boxx">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                    </svg></div>

                  <h4 className="fw-semibold mb-0 text-body-emphasis">Get notified</h4>
                  <p className="text-body-secondary">As a tutor, you’ll receive notifications from students asking for help in understanding concepts and related questions from the topics you feel confident about.</p>
                </div>

                <div className="col d-flex flex-column gap-2">

                  <div className="icon-boxx">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                    </svg></div>

                  <h4 className="fw-semibold mb-0 text-body-emphasis">See the question</h4>
                  <p className="text-body-secondary">You will be able to see the question beforehand so that you can decide whether you want to connect or not.</p>
                </div>

                <div className="col d-flex flex-column gap-2">
                  <div className="icon-boxx">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-camera-video-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z" />
                    </svg> </div>
                  <h4 className="fw-semibold mb-0 text-body-emphasis">Get connected</h4>
                  <p className="text-body-secondary">If you choose to take a session, you will be connected to the student over an chat or video call session within seconds.</p>
                </div>

                <div className="col d-flex flex-column gap-2">
                  <div className="icon-boxx">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-person-video3" viewBox="0 0 16 16">
                      <path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2" />
                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783Q16 12.312 16 12V4a2 2 0 0 0-2-2z" />
                    </svg></div>
                  <h4 className="fw-semibold mb-0 text-body-emphasis">Start Teaching</h4>
                  <p className="text-body-secondary">It generally takes 5-10 minutes to clear a concept, but you can take a session for as long as you feel necessary.</p>
                </div>
              </div>
            </div>
          </div>
        </div>







        
        <section className="faq">
          <h2>FAQ</h2>
          <div className="faqstatement">
            
            <p>When and how will i recieve my payments from the QueryConnect?</p>
            <p className="faq-answer">payments will be sent to your account once the session is complete and the query is resolved.</p>
            <p>What should be my qualification to teach on this platform?</p>
            <p className="faq-answer">To teach on QueryConnect you need to have some experience on each of the chosen subjects (projects /teaching experiences).</p>
            <p>Do i have to spend fix number of hours in this platform?</p>
            <p className="faq-answer">You can try and help solve doubts any time  you want no need of fixing a certain day or time for it.</p>
            <p>What is the compenstation offered to tutors?</p>
            <p className="faq-answer">Tutors will be compensated with a payment for every query they solve depending upon the complexity of the problem.If they can't they will be paid a fraction of full payment for giving their efforts.</p>
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