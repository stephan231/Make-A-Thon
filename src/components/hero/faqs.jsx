import React, { useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./faqs.css";
import ReactGA from "react-ga";

const faqs = () => {
  const handleArrow = (element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "FAQs",
    });
    const elementVisible = element.currentTarget.querySelector(
      ".faqs-content-description"
    );
    const arrow = element.currentTarget.querySelector(".faqs-arrow");

    elementVisible.classList.toggle("faq-visible");
    arrow.classList.toggle("arrow-transform");
  };

  const styles = {
    container: {
      position: "relative",
      zIndex: "-1",
      fontSize: "2.5vw",
      transition: "all 0.3s linear",
      cursor: "pointer",
    },
  };

  if (window.innerWidth <= 768) {
    styles.container = {
      ...styles.container,
      fontSize: "5vw",
    };
  }

  return (
    <React.Fragment>
      <div id="faqs" className="parent-faqs">
        <h1 className="faqs-title">
          <img src="./images/rrr.webp" alt="arrow-logo" />
          FAQs
        </h1>

        <div className="faqs-section">
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is a hackathon?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              A hardware hackathon is a collaborative event where participants
              work together to innovate and create hardware-based solutions
              within a set timeframe.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is “Make-A-Thon”?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              A makeathon is a collaborative event where individuals, including
              computer programmers and enthusiasts, gather to enhance or create
              new software programs or hardware solutions based on provided
              problem statements. It's a social coding occasion aimed at
              fostering innovation and creativity in hardware development.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Who can participate?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Students from the St. Joseph's group of institutions are eligible
              to participate in the makeathon event.
            </p>
          </div>

          {/* <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              How much is the registration fee?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              After the scrutiny process, the organizing committee will release
              the shortlisted teams for the finale. The selected team must pay a
              registration fee of Rs. 1000/- per team, which includes GST. It
              contributes to goodie bags, food, and refreshments served during
              the event. The registration fee is non-refundable and
              non-transferable. Teams are advised to complete the registration
              process as soon as possible to secure their participation in the
              event. Upon successful completion of the registration, teams will
              receive further instructions from the organizing committee.
            </p>
          </div> */}

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Is the hackathon online or offline?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              The first round will be abstract submission which is completely
              done in virtual mode. Further upon registration, you will be
              contacted by our team and given a brief on the process of abstract
              submission. The shortlisted team should appear physically for the
              final.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              How to register for the hackathon?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Click the register button on the home page and you will be
              directed to the respective Google form. Kindly submit the required
              details and our organizing team will contact you as soon as
              possible.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is the prize money of the winning team?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              The event has a prize pool of Rs 20,000 for the winners.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is the team size to participate in the MAke-A-Thon?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              The teams must have a minimum of 3 members and a maximum of 5
              members.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What are the prerequisites considered for registering?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Participants may need to have knowledge and skills in areas such
              as electronics, programming, data analytics, and IoT technologies,
              depending on the theme of the hackathon. Participants must need to
              bring their own laptops, sensors, microcontrollers, and other
              necessary tools and equipment.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default faqs;
