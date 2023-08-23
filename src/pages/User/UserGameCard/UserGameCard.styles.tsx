import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
  background: ${props => props.theme.colors.secundary};

  .game-image{
    display: flex;
    justify-content: center;

    img {
      max-width: 85px;
      max-height: 85px;
      border-radius: 5px;

    }
  }


  .game-information {
    width: 880px;
    color: ${props => props.theme.colors.text};
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 1140px) {
      width: 840px;
    }

    @media (max-width: 950px) {
      width: 520px;
    }

    @media (max-width: 630px) {
      width: 250px;
      flex-direction:column;
    }

    h1 {
      font-size: 15px;
      width: 100px;
      display: flex;


      @media (max-width: 630px) {
        font-size: 10px;
        justify-content: center;
      }

    }

    h4 {
      font-size: 15px;

      color: #808080;
      small {
        color: #808080;
      }

      @media (max-width: 950px) {
        font-size: 12px;

      }

    }

    .buttons {
      display: flex;
      justify-content: end;
      gap: 5px;

      @media (max-width: 630px) {

      }

      .smallButton {
        font-size: 10px;
        gap: 5px;
        border: 1px solid red;
        color: red;
      }

      button {
        width: 70px;
        height: 40px;
        color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.primary};
        border: none;
        border-radius: 10px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media (max-width: 630px) {
          width: 40px;
          height: 30px;
          margin-left: 10px;
          font-size: 10px;

      }

      .buttons-icon {
        width: 12px;

        @media (max-width: 6300px) {
          display:none;
        }
      }
    }
  }
`;
