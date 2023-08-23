import { BiGame } from 'react-icons/bi';
import { api } from '../../services/api';
import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai';
import { useGameStore } from '../../store/games';
import { SidebarContainer } from './SideBar.styles';
import { FiChevronDown, FiFilter } from 'react-icons/fi';
import { ChangeEvent, useEffect, useState } from 'react';
import {
  BsController,
  BsCalendarDate,
  BsSortAlphaDownAlt,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const [show, setShow] = useState(false);
  const updateGame = useGameStore(state => state.updateGame);
  const updateOrigin = useGameStore(state => state.updateOrigin);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [platforms, setConsoles] = useState<any[]>([]);

  const handleOrder = (e: any) => {
    updateGame(e);
    updateOrigin('order');
  };

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    updateGame(e.target.value);
    updateOrigin('filter');
  };

  const getConsoles = async () => {
    try {
      const response = await api.get('/platforms');
      const data = response.data;

      setConsoles(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getConsoles();
  }, []);

  return (
    <SidebarContainer>
      <div className="sidebar-content">
        <div className="menu">
          <h2>
            <AiOutlineMenu className="icon-filter" />
            Menu
          </h2>
          <div className="buttons">
            <Link to={`/user`} className="menu-button">
              <button>
                <AiOutlineHome className="icon" />
                Home
              </button>
            </Link>
            <Link to={`/`} className="menu-button">
              <button>
                <BiGame className="icon" />
                Games
              </button>
            </Link>
          </div>
        </div>
        <div className="filter">
          <h2>
            <FiFilter className="icon-filter" />
            Filtrar
          </h2>
          <div className="buttons">
            <button>
              <BsCalendarDate className="icon" />
              Year
            </button>
            <button onClick={e => handleOrder(e)}>
              <BsSortAlphaDownAlt className="icon" />A - Z
            </button>

            <button onClick={() => setShow(!show)}>
              <BsController className="icon-consoles" />
              <span> Consoles</span>
              <FiChevronDown className="icon-consoles " />
            </button>

            {show ? (
              <>
                <p className="item-sidebar">
                  <input
                    name="console"
                    type="radio"
                    value=""
                    onChange={e => handleFilter(e)}
                  />
                  All
                </p>
                {platforms.map((console, key) => (
                  <p className="item-sidebar" key={key}>
                    <input
                      name="console"
                      type="radio"
                      value={console.platform}
                      onChange={e => handleFilter(e)}
                    />
                    <label>{console.platform}</label>
                  </p>
                ))}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </SidebarContainer>
  );
};
