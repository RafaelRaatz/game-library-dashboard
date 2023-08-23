import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;

  a {
    color: #ffff;
    text-decoration: none;
  }

  @media (max-width: 1140px) {
    display: flex;
    flex-direction: column;
    width: 950px;
    justify-content: center;
    flex-flow: row wrap;
  }

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    width: 650px;
    justify-content: center;
    flex-flow: row wrap;
  }

  @media (max-width: 630px) {
    display: flex;
    flex-direction: column;
    width: 375px;
    justify-content: center;
    flex-flow: row wrap;
  }

  .user-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .show-more {
    display: flex;
    justify-content: center;
    padding-top: 40px;

    @media (max-width: 1140px) {
      display: flex;
      width: 300px;
    }

    .list-button {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 200px;
      height: 50px;
      background: ${props => props.theme.colors.secundary};
      color: ${props => props.theme.colors.text};
      border-radius: 8px;
      border: none;
    }
  }

  .add-game {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;

    @media (max-width: 1140px) {
      display: flex;
    }

    .game-button {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 350px;
      height: 50px;
      background: ${props => props.theme.colors.secundary};
      color: ${props => props.theme.colors.text};
      border-radius: 8px;
      border: none;

      @media (max-width: 630px) {
        width: 250px;
      }
    }
  }

  .Loading {
    display: flex;
    justify-content: center;
  }
`;
