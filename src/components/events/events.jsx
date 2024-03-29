import React, { useEffect, useState } from "react";
import "./events.css";
import ReactGA from "react-ga";

const Events = () => {
  const [currentStage, setCurrentStage] = useState(1);

  const handleEventTracking = (label) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: label,
    });
  };

  const handleAbstractDownload = () => {
    handleEventTracking("Abstract Reference Download");
    window.open("/docs/Abstract_Reference_Hackathon.pdf");
  };

  const handleStageChange = (stage) => {
    handleEventTracking(`Events Stage-${stage}`);
    setCurrentStage(stage);
  };

  useEffect(() => {
    document.title = "Stages";
  }, []);

  const stagesContent = {
    1: {
      title: "Registration",
      content: (
        <>
          <h1>Registration</h1>
          <p>
            🔗 Scan the QR in the poster or search www.hackatank.tech and
            register for the event.
            <br /> <br />
            1️⃣ It will redirect you to the respective Google forms. Kindly
            fill in the requested details.
            <br /> <br />
            2️⃣Our registration team will contact you further upon
            registration.
            <br /> <br />
            3️⃣For any queries/issues, kindly check the contacts column for
            Point of Contact (POC).
            <br /> <br />
            4️⃣Last date for registration is on or before the 25th of August
            2023.
            <br /> <br />
            5️⃣The first round is free for all the teams that register for
            the event.
          </p>
        </>
      ),
    },
    2: {
      title: "Abstract Submission",
      content: (
        <>
          <h1>
            Abstract Submission
            <span className="stage2-reference" onClick={handleAbstractDownload}>
              <span>click here to download -</span>
              ABSTRACT SUBMISSION REFERENCE
            </span>
          </h1>
          <p>
            📋 The problem statements are available on the home page, and it is
            provided at the bottom of this page as a PDF for downloading.
            <br /> <br />
            📥 We also accept your own/inspired problem statements for review.
            Kindly submit it as an abstract and the registration team will
            contact you.
            <br /> <br />
            📝 The abstract format is given at the top right of this page as a
            PDF for downloading. Kindly download and use it for reference.
            <br /> <br />
            📄 Abstract of the project must be submitted only in PDF file
            format.
            <br /> <br />⏰ The last date for abstract submission is on or
            before the 28th of August 2023.
          </p>
        </>
      ),
    },
    3: {
      title: "Scrutinization",
      content: (
        <>
          <h1>Scrutinization</h1>
          <p>
            🔍 The teams will be shortlisted by the judging panel on various
            criteria which includes the scope of the project, execution
            ideology, etc.
            <br /> <br />
            📢 The scrutinized/shortlisted teams for the final round of
            "HACK-A-TANK" will be announced on the 30th of August 2023.
            <br /> <br />
            💰 The Shortlisted team should proceed with their registration by
            completing the payment of Rs 999/- per team on or before 3rd
            September 2023.
            <br /> <br />
            🔄 After the completion of payment, the registration team will
            assess you for the further procedures of the final round.
          </p>
        </>
      ),
    },
    4: {
      title: "The Grand Finale",
      content: (
        <>
          <h1>The Grand Finale</h1>
          <p>
            🎉 The commencement of the inaugural function is scheduled at 10:00
            am on the 8th of September 2023.
            <br /> <br />
            ⏱️ The "HACK-A-TANK" event will begin at 1:00 pm on the 8th of
            September 2023 and will wrap up at 1:00 pm on the 9th of September
            2023.
            <br /> <br />
            🍔🍕 The lunch and dinner for the 8th of September will be provided
            by the organizing committee to the participants.
            <br /> <br />
            🍳🍔 The breakfast and lunch for the 9th of September will be
            provided by the organizing committee to the participants.
            <br /> <br />
            🍪 Refreshments will be provided to all the participating teams at
            all feasible times by the organizing committee.
            <br /> <br />
            🏆 The event will be concluded with the announcement of the cash
            prize winners of the "HACK-A-TANK" event on the 9th of September
            2023 by 4:00 pm.
          </p>
        </>
      ),
    },
  };

  return (
    <div className="parent-events">
      <div className="events-progress-bar">
        <ul>
          {[1, 2, 3, 4].map((stage) => (
            <li key={stage} onClick={() => handleStageChange(stage)}>
              Stage {stage}
            </li>
          ))}
        </ul>
        <div id="line">
          <div
            id="line-progress"
            style={{ width: `${(currentStage - 1) * 25}%` }}
          ></div>
        </div>
      </div>

      <div className="events-container">
        {Object.keys(stagesContent).map((stage) => (
          <div
            key={stage}
            className={`section-content stage${stage}-content ${
              currentStage == stage ? "active" : ""
            }`}
          >
            <div className="section-format">{stagesContent[stage].content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
