import UserImage from '../../../assets/eldenring.jpeg';
import { CardContainer } from './GameCard.styles';

interface IGames {
  name: string;
  year: string;
  console: string;
  description: string;
}

export function GameCard({ name, year, console, description }: IGames) {
  return (
    <CardContainer>
      <div className="game-image">
        <img src={UserImage} alt="" />
      </div>
      <div className="game-information">
        <h1>{name}</h1>

        <h4>
          <span>{console}</span> |<small> {year}</small>
        </h4>

        <p> {description}</p>
        <button>Add Game</button>
      </div>
    </CardContainer>
  );
}
