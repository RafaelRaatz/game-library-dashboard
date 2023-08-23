import styled from 'styled-components';

export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;

  @media (max-width: 1140px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const GameContainer = styled.div`
  display: flex;

  flex-direction: column;
  margin-top: 25px;

  @media (max-width: 1140px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .game-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 50px;
    color: ${props => props.theme.colors.text};

    @media (max-width: 950px) {
      margin-top: 30px;
      margin-bottom: 10px;
    }

    @media (max-width: 630px) {
      margin-top: 0px;
      margin-bottom: 20px;
    }
  }

  .related-games {
    display: flex;
    margin-top: 40px;
    align-items: center;
    padding-top: 30px;

    @media (max-width: 1140px) {
      flex-direction: column;
    }

    .title-related {
      @media (max-width: 1140px) {
        margin-bottom: 30px;
      }
    }

    a {
      color: #ffff;
      text-decoration: none;
    }

    .games {
      display: flex;
      gap: 50px;
      border-left: 1px solid ${props => props.theme.colors.tertiary};
      padding-left: 40px;

      @media (max-width: 1140px) {
        border-left: none;
        border-top: 1px solid ${props => props.theme.colors.tertiary};
        padding-left: 0;
        gap: 10px;
        padding-top: 30px;
        flex-flow: row wrap;
      }

      @media (max-width: 950px) {
        justify-content: center;
        gap: 10px;
      }
    }
  }
`;
