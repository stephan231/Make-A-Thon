import "./schedule.css";
import React, { useEffect } from "react";

const schedule = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("timelineAnimation");
          document
            .querySelectorAll(".container, .container-mobile")
            .forEach((container) =>
              container.classList.add("timelineAnimationContainer")
            );
        }
      });
    };

    const options = {
      threshold: 0.2,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll("#timeline");
    divs.forEach((div) => observer.observe(div));
  });
  return (
    <React.Fragment>
      <div className="mainSchedule" id="schedule">
        <div className="parent-schedule">
          <div className="schedule-title">
            <img src="./images/rrr.webp" alt="arrow-logo" />
            Schedule
          </div>
          <div className="timeline" id="timeline">
            <div className="container" id="timeline-container">
              <h2 className="date">
                <div>
                  March
                  <div>
                    <div> 11</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Registration opens</h2>
              <p className="container-description">
                Join our hardware hackathon! Registration is open to all
                enthusiasts, developers, and problem solvers. Experience 24
                hours of hands-on hacking, collaboration, and competition.
                Tackle real-world challenges and pioneer cutting-edge solutions
                with like-minded innovators. Whether you're seasoned or new,
                showcase your skills and make an impact. Be part of a vibrant
                community dedicated to pushing technology boundaries. Secure
                your spot now and revolutionize hardware with us!
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="container-title">Abstract Submission</h2>
              <h1 className="date">
                <div>
                  March
                  <div>
                    <div>11</div> <div>th</div>
                  </div>
                  -March
                  <div>
                    <div>20</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                Submit your abstracts and be a part of the forefront of
                innovation! We invite you to share your groundbreaking ideas and
                research at our esteemed hackathon event. This is your
                opportunity to present your unique insights and solutions 🚀👩‍💻
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h1 className="date">
                <div>
                  March
                  <div>
                    <div>20</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <h2 className="container-title">Registration Closes</h2>
              <p className="container-description">
                Last call for registration! Time is running out to be a part of
                our extraordinary hackathon event. Don't miss this incredible
                opportunity to join a community of tech enthusiasts, developers,
                and innovators from around the world. Registration will close
                soon, so act fast and secure your spot
              </p>

              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="container-title">
                Shortlisted Teams Announcements
              </h2>
              <h1 className="date">
                <div>
                  March
                  <div>
                    <div>22</div> <div>nd</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                Step into the limelight – the moment we've all been waiting for
                is here! We're thrilled to announce the shortlisted teams of our
                highly competitive hackathon event. After meticulous evaluation
                and deliberation, we've handpicked the most promising and
                innovative teams to move forward to the final round
              </p>
              <span className="circle"></span>
            </div>

            <div className="container ">
              <h2 className="container-title">Hackathon Finale</h2> <br />
              <h1 className="date">
                <div>
                  April
                  <div>
                    <div>5</div> <div>th</div>
                  </div>
                  - April
                  <div>
                    <div>6</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                Get ready for the moment of triumph – the Hackathon Finale is
                just around the corner! After an intense and exhilarating
                journey, we've arrived at the grand finale, where the most
                ingenious minds will showcase their remarkable solutions.
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="container-title">Award Ceremony</h2>
              <h1 className="date">
                <div>
                  April
                  <div>
                    <div>6</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                The judges deliberate, and winners are announced in various
                categories, celebrating outstanding projects, creativity, and
                teamwork. The successful conclusion of the hackathon is
                commemorated with an awards ceremony and well-deserved
                celebrations.
              </p>
              <span className="circle"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="mainSchedule" id="schedule">
        <div className="parent-schedule-mobile">
          <div className="schedule-title-mobile">
            <img src="./images/rrr.webp" alt="arrow-logo" />
            Schedule
          </div>
          <div className="timeline-mobile" id="timeline">
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Registration opens</h2>{" "}
              <h2 className="date-mobile">
                <div>
                  MARCH
                  <div>
                    <div>11</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                Join our hardware hackathon! Registration is open to all
                enthusiasts, developers, and problem solvers. Experience 24
                hours of hands-on hacking, collaboration, and competition.
                Tackle real-world challenges and pioneer cutting-edge solutions
                with like-minded innovators. Whether you're seasoned or new,
                showcase your skills and make an impact. Be part of a vibrant
                community dedicated to pushing technology boundaries. Secure
                your spot now and revolutionize hardware with us!
              </p>
              <span className="circle-mobile"></span>
            </div>

            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Abstract Submission</h2>{" "}
              <h1 className="date-mobile">
                <div>
                  MARCH
                  <div>
                    <div>11</div>
                  </div>
                  -MARCH
                  <div>
                    <div>20</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                Submit your abstracts and be a part of the forefront of
                innovation! We invite you to share your groundbreaking ideas and
                research at our esteemed hackathon event. This is your
                opportunity to present your unique insights and solutions 🚀👩‍💻
              </p>
              <span className="circle-mobile "></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Registration Closes</h2>
              <h1 className="date-mobile">
                <div>
                  MARCH
                  <div>
                    <div>20</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                Last call for registration! Time is running out to be a part of
                our extraordinary hackathon event. Don't miss this incredible
                opportunity to join a community of tech enthusiasts, developers,
                and innovators from around the world. Registration will close
                soon, so act fast and secure your spot
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile">
              <h2 className="container-title-mobile">
                Shortlisted Team Announcements
              </h2>
              <h1 className="date-mobile">
                <div>
                  MARCH
                  <div>
                    <div>22</div> <div>nd</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                Step into the limelight – the moment we've all been waiting for
                is here! We're thrilled to announce the shortlisted teams of our
                highly competitive hackathon event. After meticulous evaluation
                and deliberation, we've handpicked the most promising and
                innovative teams to move forward to the final round
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Hackathon Finale</h2>{" "}
              <br />
              <h1 className="date-mobile">
                <div>
                  APRIL
                  <div>
                    <div>5</div> <div>th</div>
                  </div>
                  - APRIL
                  <div>
                    <div>6</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                Get ready for the moment of triumph – the Hackathon Finale is
                just around the corner! After an intense and exhilarating
                journey, we've arrived at the grand finale, where the most
                ingenious minds will showcase their remarkable solutions.
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Award Ceremony</h2>
              <h1 className="date-mobile">
                <div>
                  APRIL
                  <div>
                    <div>6</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                The judges deliberate, and winners are announced in various
                categories, celebrating outstanding projects, creativity, and
                teamwork. The successful conclusion of the hackathon is
                commemorated with an awards ceremony and well-deserved
                celebrations.
              </p>
              <span className="circle-mobile"></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default schedule;
