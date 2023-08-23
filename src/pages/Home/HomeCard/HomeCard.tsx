import { CardContainer } from './HomeCard.styles';
import UserImage from '../../../assets/eldenring.jpeg';

interface IGames {
  name: string;
  year: number;
  console: string;
}

export function HomeCard({ name, year, console }: IGames) {
  return (
    <CardContainer>
      <div className="card-content">
        <h3>View More</h3>

        <div className="picture">
          <img src={UserImage} alt="" />
        </div>
        <div className="title">
          <h2>{name}</h2>
        </div>

        <div className="info">
          <p className="card-paragraph">{year}</p>|
          <p className="card-adress">{console} </p>
        </div>
      </div>
    </CardContainer>
  );
}
