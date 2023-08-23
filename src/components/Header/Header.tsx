import { LogoutModal, ThemePage } from '../';
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { SiGamejolt } from 'react-icons/si';
import { Container } from './Header.styles';
import { ChangeEvent, useEffect, useState } from 'react';
import { useGameStore } from '../../store/games';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineLightBulb, HiMenu } from 'react-icons/hi';
import { ThemeModal } from '../Modal/ThemeModal';
import { ResponsiveModal } from '../Modal/ResponsiveModal';

export function Header() {
  const updateOrigin = useGameStore(state => state.updateOrigin);
  const updateGame = useGameStore(state => state.updateGame);
  const [openModal, setOpenModal] = useState(false);
  const [openModalTheme, setOpenModalTheme] = useState(false);
  const [openModalResponsive, setOpenModalResponsive] = useState(false);

  const [email, setEmail] = useState<any>();

  const getEmail = () => {
    const response = localStorage.getItem('email');
    return setEmail(response);
  };

  useEffect(() => {
    getEmail();
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    updateGame(e.target.value);
    updateOrigin('search');
  };

  return (
    <Container>
      <div className="header-content">
        <div className="header-logo">
          <Link to={`/`} className="logo">
            <SiGamejolt />
            <span>.</span>GameLibrary
          </Link>
        </div>

        <div className="responsive-input">
          <div className="header-input">
            <div>
              <AiOutlineSearch className="search-icon" />
            </div>
            <input
              type="text"
              placeholder="Pesquisar aqui"
              onChange={e => handleSearch(e)}
            />
          </div>

          <div>
            <ResponsiveModal
              isOpen={openModalResponsive}
              setOpenModalResponsive={() =>
                setOpenModalResponsive(!openModalResponsive)
              }
            />
            <button className="responsive-menu">
              <HiMenu
                className="icon-responsive"
                onClick={() => setOpenModalResponsive(true)}
              />
            </button>
          </div>
        </div>

        <div className="avatar">
          <div className="theme">
            <ThemeModal
              isOpen={openModalTheme}
              setOpenModalTheme={() => setOpenModalTheme(!openModalTheme)}
            />
            <button>
              <HiOutlineLightBulb
                className="icon-theme"
                onClick={() => setOpenModalTheme(true)}
              />
            </button>
          </div>
          <div className="logout">
            <LogoutModal
              isOpen={openModal}
              setModalOpen={() => setOpenModal(!openModal)}
            />

            <button type="button" onClick={() => setOpenModal(true)}>
              <BiLogOut className="icon" />
            </button>
          </div>
          <div className="user-info">
            <h3>Rafael Raatz</h3>
            <p className="email">{email}</p>
          </div>

          <div className="picture">
            <span className="name">RR</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
