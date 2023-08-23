import styled from 'styled-components';

export const ThemeContainer = styled.div`
  .theme {
    display: flex;
    align-items: center;

    justify-content: space-between;
    background: #272838;
    width: 96px;
    margin-right: 10px;
    margin-top: 20px;
    height: 30px;
    border-radius: 20px;
    background: ${props => props.theme.colors.secundary};

    .division {
      display: flex;
      align-items: center;
    }

    .light {
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${props => props.theme.colors.buttonLight};
    }

    .dark {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 30px;
      color: ${props => props.theme.colors.buttonDark};
    }
  }
`;
