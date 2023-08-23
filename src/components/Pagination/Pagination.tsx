import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useGameStore } from '../../store/games';
import { DropDown, PaginationContainer } from './Pagination.styles';

export const Pagination = () => {
  const updateGame = useGameStore(state => state.updateGame);
  const GamesLenght = useGameStore(state => state.GamesLenght);
  const updateOrigin = useGameStore(state => state.updateOrigin);

  const handleOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateGame(e.target.value);
    updateOrigin('order');
  };

  return (
    <PaginationContainer>
      <div className="pagination-content">
        <p>Exibindo {GamesLenght.length} Games </p>

        <DropDown>
          <p>Ordenar por:</p>
          <li>
            <button>
              <label htmlFor="">Ordem Alfabética</label>
              <FiChevronDown className="icon" />
            </button>

            <ul>
              <li>
                <input name="all" type="radio" onChange={e => handleOrder(e)} />
                <label htmlFor="">Ordem Alfabética</label>
              </li>
              <li>
                <input name="all" type="radio" />
                <label htmlFor="">Ano de Lançamento</label>
              </li>
            </ul>
          </li>
        </DropDown>
      </div>
    </PaginationContainer>
  );
};
