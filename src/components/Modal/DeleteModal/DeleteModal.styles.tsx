import styled from 'styled-components';

export const Container = styled.main`
  position: absolute;
  display: flex;
  align-items: center;
  margin-left: 830px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    width: 70px;
    height: 40px;
    border-radius: 10px;
    flex-direction: column;
    border: 1px solid #red;

    span {
      font-size: 10px;
      color: #fff;
    }

    .buttons {
      display: flex;
      gap: 5px;

      button {
        background: none;
        color: #fff;
        border: none;
        border-radius: 10px;
        display: flex;

        .icon {
          width: 20px;
          cursor: pointer;
        }

        .icon-delete {
          width: 20px;
          cursor: pointer;
          color: red;
        }
      }
    }
  }
`;
