import { FooterContainer, FooterWrapper } from './Footer.styles';
import { SiGamejolt } from 'react-icons/si';
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsGoogle,
  BsTwitter,
} from 'react-icons/bs';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <div className="footer-content">
          <div className="footer-information">
            <div className="information-logo">
              <h2 className="footer-logo">
                <SiGamejolt />
                <span>.</span>GameLibrary
              </h2>
              <p>A maior library de games.</p>
            </div>

            <div className="information-menu">
              <div className="menu-item">
                <div className="information">
                  <span>Services</span>
                  <p>Edit your Games</p>
                  <p>Add Your Games</p>
                </div>

                <div className="information">
                  <span>Social</span>
                  <p>Instagram </p>
                  <p>Twitter</p>
                </div>
              </div>

              <div className="menu-item">
                <div className="information">
                  <span>More</span>
                  <p>Privacy Policy</p>
                  <p>Terms Of Service</p>
                </div>

                <div className="information">
                  <span>About Us</span>
                  <p>Resources</p>
                  <p>Contact Us</p>
                </div>
              </div>
            </div>
          </div>

          <div className="social-midia">
            <div className="icons">
              <a href="http://">
                <BsFacebook className="icon" />
              </a>
              <a href="http://">
                <BsInstagram className="icon" />
              </a>
              <a href="http://">
                <BsLinkedin className="icon" />
              </a>
              <a href="http://">
                <BsGoogle className="icon" />
              </a>
              <a href="http://">
                <BsTwitter className="icon" />
              </a>
            </div>
            <span>©Copyright. All rights reserved.</span>
          </div>
        </div>
      </FooterContainer>
    </FooterWrapper>
  );
};
