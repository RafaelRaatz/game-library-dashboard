import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  width: 300px;
  height: 350px;
  color: ${props => props.theme.colors.text};
  border: none;
  border-radius: 10px;

  justify-content: center;
  background: ${props => props.theme.colors.secundary};

  @media (max-width: 1140px) {
    display: flex;
    width: 100%;
  }

  .card-content:hover h3 {
    opacity: 1;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 310px;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 60px;
    }

    .picture {
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }

    img {
      display: flex;
      height: 230px;
      border-radius: 10px;
      width: 260px;
    }

    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      margin-bottom: 10px;
    }

    p.card-paragraph {
      font-size: 14px;
    }

    p.card-adress {
      font-family: 'Roboto';
      font-size: 12px;
    }

    h3 {
      opacity: 0;
      width: 300px;
      height: 350px;
      display: flex;
      color: #fff;
      font-size: 30px;
      position: absolute;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      background-color: rgb(0, 0, 0, 0.6);
      transition: opacity 0.5s;
    }
  }
`;
