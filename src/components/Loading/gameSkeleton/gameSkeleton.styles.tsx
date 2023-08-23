import styled from 'styled-components';

export const ContainerLoading = styled.div`
  .loader-container {
    display: flex;
    width: 295px;
    height: 350px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    gap: 10px;
    background: ${props => props.theme.colors.secundary};

    .skeleton {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;

      .info {
        display: flex;
        flex-direction: column;
        gap: 30px;

        .console {
          display: flex;
          justify-content: center;
          gap: 10px;
        }
      }

      .skeleton-image {
        display: flex;
        justify-content: center;
      }
    }
  }
`;
