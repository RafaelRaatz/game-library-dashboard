import { HomeCard } from '../HomeCard';
import { Link } from 'react-router-dom';
import { api } from '../../../services/api';
import { useEffect, useState } from 'react';
import { ListContainer } from './HomeList.styles';
import { GameSkeleton } from '../../../components';
import { useGameStore } from '../../../store/games';

import 'react-loading-skeleton/dist/skeleton.css';

export const HomeList = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(9);
  const origin = useGameStore(state => state.origin);
  const consoles = useGameStore(state => state.consoles);
  const [removeLoading, setRemoveLoading] = useState(false);
  const updateLenght = useGameStore(state => state.updateLenght);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [gamesFiltered, setGamesFiltered] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [games, setGames] = useState<any[]>([]);

  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 9);
  };

  const getGames = async () => {
    setRemoveLoading(true);
    try {
      const response = await api.get('/games');
      const data = response.data;
      setGames(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getGames();
    }, 1500);
  }, []);

  useEffect(() => {
    if (consoles === '') {
      setGamesFiltered(games);
      return;
    }

    if (origin === 'filter') {
      const filtered = games.filter(games => games.console.includes(consoles));
      return setGamesFiltered(filtered);
    }

    if (origin === 'search') {
      const filtered = games.filter(games =>
        games.name.toLowerCase().includes(consoles),
      );
      return setGamesFiltered(filtered);
    }
    if (origin === 'order') {
      const ordain = games.sort((a, b) => a.name.localeCompare(b.name));
      return setGamesFiltered(ordain);
    }
  }, [consoles, games]);

  updateLenght(gamesFiltered);

  return (
    <ListContainer>
      <div className="list">
        {!removeLoading && <GameSkeleton cards={9} />}

        {gamesFiltered.slice(0, visible).map((game, key) => (
          // eslint-disable-next-line react/jsx-key
          <Link to={`gamepage/${game.id}`}>
            <HomeCard
              key={key}
              name={game.name}
              year={game.year}
              console={game.console}
            />
          </Link>
        ))}
      </div>

      <div className="show-more">
        <button className="list-button" onClick={showMoreItems}>
          Mostrar mais
        </button>
      </div>
    </ListContainer>
  );
};

// const filtered = data.filter((data: any) =>
// data.hour.includes())
