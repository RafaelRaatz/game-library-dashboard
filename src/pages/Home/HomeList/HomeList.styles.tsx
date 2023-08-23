import styled from 'styled-components';

export const ListContainer = styled.div`
  .list {
    display: flex;
    width: 930px;
    flex-flow: row wrap;
    gap: 10px;
    margin-top: 16px;
    background: ${props => props.theme.colors.primary};

    a {
      color: #ffff;
      text-decoration: none;
    }

    @media (max-width: 1140px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      flex-flow: row wrap;
      gap: 10px;
      margin-top: 0px;
    }

    @media (max-width: 630px) {
      margin-top: 0px;
      gap: 20px;
    }
  }
  .show-more {
    display: flex;
    justify-content: center;
    padding-top: 50px;

    @media (max-width: 1140px) {
      display: flex;
      justify-content: center;
    }

    .list-button {
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
      padding: 8px 0;

      @media (max-width: 630px) {
        display: flex;
        width: 250px;
      }
    }
  }
`;
