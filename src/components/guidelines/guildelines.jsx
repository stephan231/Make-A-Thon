import React, { useEffect } from "react";
import "./guidelines.css";

const guildelines = () => {
  useEffect(() => {
    document.title = "Guidelines";
  });
  return (
    <React.Fragment>
      <div className="parent-guidelines">
        <div className="guidelines-title">Guidelines</div>
        <div className="guidelines-container">
          <div className="guidelines-content">
            <div className="guidelines-1">
              1. The teams can have a minimum of 3 members and a maximum of 5
              members. 🤝👥
              <br /> <br />
              2. The last date for team registration is 20th March 2024. ⏰🗓️{" "}
              <br />
              <br />
              3. The last date for abstract submission is 20th March 2024. 📝🗓️{" "}
              <br />
              <br />
              4. The project should be unique and shouldn't have ever been
              published in any other journals or competitions. 🚀🔍 <br />
              <br />
              5. The event will have three phases of judge review. Projects will
              be evaluated every 8 hours from the beginning of the finale. 👁️‍🗨️🕒{" "}
              <br />
              <br />
              6. Code of conduct is strictly monitored, and any case of
              uncivilized behavior will result in the whole team's
              disqualification. 🚫👮‍♂️❌ <br />
              <br />
            </div>
            <div className="guidelines-2">
              7. The shortlisted/scrutinized teams for the finale of
              "HACK-A-TANK" will be announced by 4:00 pm on the 22nd of March
              2024. 📣🏁 10. The Finale round begins at 10:00 am on 5th April
              2024 and concludes at 5:00 pm on the 6th April 2024. 🏁🕙🏁
              <br />
              <br /> 11. The finale round will be offline and held at St.
              Joseph's Institute of Technology. 🏛️📍 <br />
              <br />
              8. Power outlets and worksheets will be provided to all teams
              prior to the commencement of the event. 🔌📑 <br />
              <br />
              9. All technical and physical requirements for the projects should
              be brought by the team only, and no assistance will be provided in
              this case. ⚙️🛠️🚫
              <br /> <br />
              10. Teams must present their projects in a clear and organized
              manner during the finale, ensuring effective communication of
              their ideas. 🗣️📊
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default guildelines;
