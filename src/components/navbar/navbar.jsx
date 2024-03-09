import React from "react";
import "./navbar.css";
import {
  InstagramOutlined,
  InstagramFilled,
  FacebookFilled,
} from "@ant-design/icons";
import { SocialIcon } from "react-social-icons";
import { ReactComponent as Grid } from "../../assets/navgrid.svg";
import ReactGA from "react-ga";
import guidelines from "../guidelines/guildelines";
const Navbar = () => {
  const handleInsta = () => {
    ReactGA.event({
      category: "Social Icon",
      action: "click",
      label: "Instagram",
    });
    window.open("https://www.instagram.com/eee_sjce");
    window.open("https://www.instagram.com/eee_sjce");
  };
  const handleFb = () => {
    ReactGA.event({
      category: "Social Icon",
      action: "click",
      label: "Facebook",
    });
    window.open("https://www.facebook.com/eeesjce");
    // window.open("https://www.facebook.com/@whitehatians");
  };
  const handleYt = () => {
    ReactGA.event({
      category: "Social Icon",
      action: "click",
      label: "Youtube",
    });
    window.open("https://www.youtube.com/@stjosephseeewebsite3828");
    // window.open("https://www.youtube.com/@whitehatians");
  };

  const handleDiscord = () => {
    ReactGA.event({
      category: "Social Icon",
      action: "click",
      label: "Youtube",
    });

    window.open("https://www.linkedin.com/in/eee-stjosephs-197a87280");
  };
  const handleRegisterClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "register",
    });
    window.open("https://forms.gle/JxS4MyFuCCF6fgjB9");
  };
  const handleScroll = (id) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `${id} - Navbar`,
    });
    if (window.location.pathname != "/") {
      window.open(`/${id}`, "_self");
    }
    setTimeout(() => {
      document.querySelector(id).scrollIntoView({ behaviour: "smooth" });
    }, 200);
  };
  if (window.location.hash) handleScroll(window.location.hash);

  const handleNavMenuClick = () => {
    ReactGA.event({
      category: "Menu",
      action: "click",
      label: `Mobile Menu Grid`,
    });
    const NavVisiblility = document.querySelector(".parent-navbar-mobile");
    NavVisiblility.classList.toggle("navbar-open-mobile");

    const NavDropVisibility = document.querySelector(".navbar-open");
    NavDropVisibility.classList.toggle("navbar-close-mobile");
  };
  return (
    <React.Fragment>
      <div className="parent">
        <div className="components">
          <div className="title" onClick={() => window.open("/", "_self")}>
            <img src="./images/diamond.webp" className="logo" alt="Logo" />
            MAKE-A-THON
            <div className="socials">
              <div className="insta">
                <SocialIcon
                  onClick={handleInsta}
                  network="instagram"
                  style={{
                    height: "3vw",
                    width: "3vw",
                  }}
                />
              </div>
              <div className="fb">
                <SocialIcon
                  onClick={handleFb}
                  network="facebook"
                  style={{
                    height: "3vw",
                    width: "3vw",
                  }}
                />
              </div>

              <div className="yt">
                <SocialIcon
                  onClick={handleYt}
                  network="youtube"
                  style={{
                    height: "3vw",
                    width: "3vw",
                  }}
                />
              </div>
              <div className="discord-icon">
                <SocialIcon
                  onClick={handleDiscord}
                  network="discord"
                  style={{
                    height: "3vw",
                    width: "3vw",
                  }}
                />
              </div>
            </div>
          </div>

          <ul>
            <li>
              <p onClick={() => window.open("/", "_self")}>Home</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#agenda")}>Agenda</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#schedule")}>Schedule</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#faqs")}>FAQs</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#contact")}>Contact</p>
            </li>
            <li>
              {/* <p>
                <a href="./guidelines">Guidelines</a>
              </p> */}
            </li>
          </ul>
          <div className="last">
            <div className="last">
              <h2 className="register">
                <p onClick={handleRegisterClick}> Register</p>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="main-navbar-mobile">
        <div className="parent-navbar-mobile">
          <div className="components-mobile">
            <div
              className="title-mobile"
              onClick={() => window.open("/", "_self")}
            >
              <img src="./images/diamond.webp" width="30vw" alt="logo" />
              Hackathon
            </div>
            <div className="last-mobile">
              <h2 className="register-mobile">
                <a href="https://forms.gle/mqHSf1kpoTUiMURH6" target="_blank">
                  Register
                </a>
              </h2>
            </div>
            <Grid
              className="navbar-menu-mobile "
              onClick={handleNavMenuClick}
            />
          </div>
          <div className="navbar-open navbar-close-mobile">
            <ul>
              <li>
                <p onClick={() => window.open("/", "_self")}>Home</p>
              </li>
              <li>
                <p onClick={() => handleScroll("#agenda")}>Agenda</p>
              </li>
              <li>
                <p onClick={() => handleScroll("#schedule")}>Schedule</p>
              </li>
              <li>
                <p onClick={() => handleScroll("#faqs")}>FAQs</p>
              </li>
              <li>
                <p onClick={() => handleScroll("#contact")}>Contact</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
