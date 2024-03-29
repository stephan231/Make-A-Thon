import React, { useEffect } from "react";
import "./guidelines.css";

const Guidelines = () => {
  useEffect(() => {
    document.title = "Guidelines";
  }, []);

  const guidelines = [
    {
      id: 1,
      text: "The teams can have a minimum of 3 members and a maximum of 5 members. 🤝👥",
    },
    {
      id: 2,
      text: "The last date for team registration is 20th March 2024. ⏰🗓️",
    },
    {
      id: 3,
      text: "The last date for abstract submission is 20th March 2024. 📝🗓️",
    },
    {
      id: 4,
      text: "The project should be unique and shouldn't have ever been published in any other journals or competitions. 🚀🔍",
    },
    {
      id: 5,
      text: "The event will have three phases of judge review. Projects will be evaluated every 8 hours from the beginning of the finale. 👁️‍🗨️🕒",
    },
    {
      id: 6,
      text: "Code of conduct is strictly monitored, and any case of uncivilized behavior will result in the whole team's disqualification. 🚫👮‍♂️❌",
    },
    {
      id: 7,
      text: "The shortlisted/scrutinized teams for the finale of 'HACK-A-TANK' will be announced by 4:00 pm on the 22nd of March 2024. 📣🏁",
    },
    {
      id: 8,
      text: "The Finale round begins at 10:00 am on 5th April 2024 and concludes at 5:00 pm on the 6th April 2024. 🏁🕙🏁",
    },
    {
      id: 9,
      text: "The finale round will be offline and held at St. Joseph's Institute of Technology. 🏛️📍",
    },
    {
      id: 10,
      text: "Power outlets and worksheets will be provided to all teams prior to the commencement of the event. 🔌📑",
    },
    {
      id: 11,
      text: "All technical and physical requirements for the projects should be brought by the team only, and no assistance will be provided in this case. ⚙️🛠️🚫",
    },
    {
      id: 12,
      text: "Teams must present their projects in a clear and organized manner during the finale, ensuring effective communication of their ideas. 🗣️📊",
    },
  ];

  return (
    <div className="parent-guidelines">
      <div className="guidelines-title">Guidelines</div>
      <div className="guidelines-container">
        <div className="guidelines-content">
          {guidelines.map((guideline) => (
            <div key={guideline.id} className="guideline">
              {guideline.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
