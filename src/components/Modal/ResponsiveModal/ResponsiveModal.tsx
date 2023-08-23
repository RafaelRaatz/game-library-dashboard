import { AiOutlineClose, AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { Container } from './ResponsiveModal.styles';
import { BiGame, BiLogOut } from 'react-icons/bi';
import { HiMenu, HiOutlineLightBulb } from 'react-icons/hi';
import { FiFilter } from 'react-icons/fi';
import {
  BsCalendarDate,
  BsController,
  BsSortAlphaDownAlt,
} from 'react-icons/bs';

export function ResponsiveModal({ isOpen, setOpenModalResponsive }: any) {
  if (isOpen) {
    return (
      <Container>
        <div className="content">
          <div className="return">
            <button className="close" onClick={setOpenModalResponsive}>
              <h1>X</h1>
            </button>
          </div>
          <div className="user">
            <div className="picture">
              <span className="name">RR</span>
            </div>
            <div className="user-info">
              <h3>Rafael Raatz</h3>
              <span>rafael@gmail.com</span>
            </div>

            <button>
              <BiLogOut className="icon" />
            </button>
            <button>
              <HiOutlineLightBulb className="icon-theme" />
            </button>
          </div>
          <div className="sidebar">
            <div className="menu">
              <h2>
                <HiMenu className="icon-menu" /> Menu
              </h2>
              <div className="menu-buttons">
                <a href="">
                  <AiOutlineHome className="icon" /> Home
                </a>

                <a href="">
                  <BiGame className="icon" /> Games
                </a>
              </div>
            </div>

            <div className="menu">
              <h2>
                <FiFilter className="icon-menu" /> Filter
              </h2>
              <div className="menu-buttons">
                <a href="">
                  <BsCalendarDate className="icon" /> Year
                </a>

                <a href="">
                  <BsSortAlphaDownAlt className="icon" /> A - Z
                </a>

                <a href="">
                  <BsController className="icon" /> Consoles
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
