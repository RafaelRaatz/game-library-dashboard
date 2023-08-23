import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { UserGameCard } from '../UserGameCard';
import { ListContainer } from './UserList.styles';
import { useGameStore } from '../../../store/games';
import { UserSkeleton } from '../../../components/Loading/UserSkeleton';

export const UserList = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(6);
  const [games, setGames] = useState<any[]>([]);
  const origin = useGameStore(state => state.origin);
  const consoles = useGameStore(state => state.consoles);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [gamesFiltered, setGamesFiltered] = useState<any[]>([]);
  const updateLenght = useGameStore(state => state.updateLenght);

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
      {!removeLoading && <UserSkeleton cards={6} />}
      {gamesFiltered.slice(0, visible).map((game, key) => (
        <UserGameCard
          key={key}
          name={game.name}
          year={game.year}
          consolee={game.console}
          game_id={game.id}
        />
      ))}

      <div className="user-buttons">
        <div className="show-more">
          <button className="list-button" onClick={showMoreItems}>
            Mostrar mais
          </button>
        </div>

        <div className="add-game">
          <Link to={`../newgame`}>
            <button className="game-button">Adicionar game</button>
          </Link>
        </div>
      </div>
    </ListContainer>
  );
};
