import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  background: ${props => props.theme.colors.secundary};
  width: 100px;
  height: 70px;

  border-radius: 10px;

  .modal {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    span {
      font-size: 12px;
      margin-top: 5px;
    }

    .buttons {
      display: flex;

      button {
        background: none;
        color: #fff;
        border-radius: 10px;
        margin-right: 10px;

        font-size: 12px;
        cursor: pointer;
      }
      .exit-button {
        color: red;
      }
    }
  }
`;
