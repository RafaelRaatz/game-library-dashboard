import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 25px;
  background: ${props => props.theme.colors.secundary};

  @media (max-width: 1140px) {
    width: 900px;
  }

  @media (max-width: 950px) {
    width: 600px;
    text-align: center;
    flex-direction: column;
    margin-top: 20px;
  }
  @media (max-width: 630px) {
    width: 350px;
    text-align: center;
    flex-direction: column;
    margin-top: 20px;
  }

  img {
    max-width: 400px;
    max-height: 400px;
    margin-right: 20px;
    margin-left: 20px;
    border: 1px solid #4b5267;
    border-radius: 10px;

    @media (max-width: 950px) {
      margin-bottom: 10px;
    }

    @media (max-width: 630px) {
      width: 260px;
      margin-bottom: 10px;
    }
  }

  .game-information {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;

    h1 {
      font-size: 50px;
    }

    h4 {
      color: ${props => props.theme.colors.tertiary};
      margin-bottom: 25px;
    }

    p {
      margin-bottom: 80px;
      line-height: 25px;
      color: ${props => props.theme.colors.text};
    }

    button {
      width: 350px;
      height: 50px;
      background: none;
      border: none;
      background: ${props => props.theme.colors.primary};
      border-radius: 30px;
      cursor: pointer;
      color: ${props => props.theme.colors.text};

      @media (max-width: 630px) {
        width: 200px;
        text-align: center;
      }
    }
  }
`;
