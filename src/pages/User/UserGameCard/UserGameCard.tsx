import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgCloseR } from 'react-icons/cg';
import UserImage from '../../../assets/gears.jpg';
import { DeleteModal } from '../../../components';
import { CardContainer } from './UserGameCard.styles';
import { AiOutlineEdit, AiOutlineBars } from 'react-icons/ai';

interface IGames {
  name: string;
  year: string;
  consolee: string;
  game_id: string;
}

export function UserGameCard({ name, year, consolee, game_id }: IGames) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <CardContainer>
      <div className="game-image">
        <img src={UserImage} alt="" />
      </div>
      <div className="game-information">
        <h1>{name}</h1>
        <h4>
          {consolee} |<small> Year: {year}</small>
        </h4>
        <div className="buttons">
          <Link to={`../gamepage/${game_id}`}>
            <button>
              Details <AiOutlineBars className="buttons-icon" />
            </button>
          </Link>
          <Link to={`../editgame/${game_id}`}>
            <button>
              Edit <AiOutlineEdit className="buttons-icon" />
            </button>
          </Link>

          <button className="smallButton" onClick={() => setOpenModal(true)}>
            Remove
            <CgCloseR className="buttons-icon" />
          </button>
        </div>
      </div>
      <DeleteModal
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
        id={`${game_id}`}
      />
    </CardContainer>
  );
}
