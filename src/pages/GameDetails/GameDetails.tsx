import { GameCard } from './GameCard';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { Footer, Header } from '../../components';
import { Container, GameContainer } from './GameDetails.styles';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import { HomeCard } from '../Home/HomeCard';
import { Link } from 'react-router-dom';

export function GameDetailsPage() {
  const [games, setGames] = useState<any>([]);
  const [allGames, setAllGames] = useState<any[]>([]);
  const [visible, setVisible] = useState(3);

  const getGames = async (id: string) => {
    try {
      const response = api.get(`games/${id}`);
      const data = (await response).data;
      setGames(data);
    } catch (error) {
      error;
    }
  };

  const getAllGames = async () => {
    try {
      const response = await api.get('/games');
      const data = response.data;
      setAllGames(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const id = window.location.pathname.split('/')[2];
    setTimeout(() => {
      getAllGames();
      getGames(id);
    }, 1500);
  }, [games]);
  return (
    <>
      <Header />
      <Container>
        <GameContainer>
          <div className="game-card">
            <div className="title">
              <h1>| Game Details |</h1>
            </div>
            <SkeletonTheme
              baseColor="#202020"
              highlightColor="#444"
              width="550px"
              borderRadius="5px"
            >
              <GameCard
                name={games.name || <Skeleton />}
                year={games.year || <Skeleton width={120} />}
                console={games.console}
                description={games.description || <Skeleton count={4} />}
              />
            </SkeletonTheme>
          </div>
          <div className="related-games">
            <h2 className="title-related">Related games</h2>
            <div className="games">
              {allGames.slice(0, visible).map((game, key) => (
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
          </div>
        </GameContainer>
      </Container>
      <Footer />
    </>
  );
}
