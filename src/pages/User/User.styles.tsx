import styled from 'styled-components';

export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;

  @media (max-width: 1140px) {
    width: 100%;
    display: flex;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  width: 1140px;
  flex-direction: column;

  @media (max-width: 1140px) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .main-content {
    display: flex;

    @media (max-width: 1140px) {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 0 auto;
    }

    .main-list {
      display: flex;
      align-items: center;

      @media (max-width: 1140px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 16px;
      }
    }
  }
`;
