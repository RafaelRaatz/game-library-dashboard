import styled from 'styled-components';

export const ContainerLoading = styled.div`
  .loader-container {
    display: flex;
    padding: 10px;
    width: 910px;
    border-radius: 10px;
    gap: 50px;
    margin-top: 12px;
    margin-bottom: 15px;
    background: ${props => props.theme.colors.secundary};

    @media (max-width: 950px) {
      width: 530px;
    }

    @media (max-width: 630px) {
      width: 270px;
      flex-direction:column;
    }

    .skeleton {
      display: flex;
      justify-content: space-evenly;
      gap: 10px;
      width: 900px;

      @media (max-width: 950px) {
        width: 530px;
      }

      @media (max-width: 630px) {
        width: 270px;
        flex-direction:column;
      }

      .info {
        display: flex;
        align-items: center;
        width: 450px;
        justify-content: space-between;
        margin-left: 20px;

        @media (max-width: 950px) {
          width: 10px;
        }
      }

      .menu {
        display: flex;
        gap: 30px;


        .console {
          display: flex;
          justify-content: center;
          gap: 5px;
          color: #808080;
        }
      }

      .buttons{
        display flex;
        justify-content: end;
        align-items: center;
        gap:10px;
        margin-left:50px;
      }

      .skeleton-image {
        display: flex;

        justify-content: center;
      }
    }
  }
`;
