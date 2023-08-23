import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useGameStore } from '../../store/games';
import { ThemeContainer } from './Theme.styles';

export const ThemePage = () => {
  const updateTheme = useGameStore(state => state.updateTheme);
  return (
    <ThemeContainer>
      <div className="theme">
        <button
          className="light"
          type="button"
          onClick={() => updateTheme('light')}
        >
          <BsFillSunFill />
        </button>
        <div className="division">|</div>

        <button
          className="dark"
          type="button"
          onClick={() => updateTheme('dark')}
        >
          <BsFillMoonStarsFill />
        </button>
      </div>
    </ThemeContainer>
  );
};
