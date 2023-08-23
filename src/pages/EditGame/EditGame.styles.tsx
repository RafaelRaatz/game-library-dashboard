import styled from 'styled-components';

export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;

  @media (max-width: 1140px) {
    width: 100%;
    display: flex;
  }
`;

export const AddGameContainer = styled.div`
  display: flex;
  width: 1140px;
  flex-direction: column;

  @media (max-width: 950px) {
    margin-top: 30px;
  }

  @media (max-width: 630px) {
    margin-top: 0px;
  }

  .title {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .form {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }

  .form-control {
    display: flex;
    background: ${props => props.theme.colors.secundary};
    border-radius: 30px;
    flex-direction: column;
    width: 700px;
    gap: 5px;

    @media (max-width: 950px) {
      width: 630px;
    }

    @media (max-width: 630px) {
      width: 370px;
    }

    label {
      margin: 10px 0 0 75px;

      @media (max-width: 630px) {
        margin: 10px 0 0 30px;
      }
    }

    .small-input {
      width: 550px;
      height: 35px;
      font-size: 20px;
      padding-left: 5px;
      margin-left: 75px;
      border: none;
      border-bottom: 2px solid #4b5267;
      outline: none;
      text-decoration: none;
      background: ${props => props.theme.colors.secundary};
      color: ${props => props.theme.colors.text};

      @media (max-width: 950px) {
        width: 500px;
      }

      @media (max-width: 630px) {
        width: 300px;
        margin-left: 30px;
      }

      .console-options {
        display: flex;
        width: 100px;
        background: ${props => props.theme.colors.secundary};
      }
    }

    .big-input {
      display: flex;
      width: 550px;
      height: 250px;
      font-size: 15px;
      padding: 5px 5px 0px 5px;
      margin: 0 0 0px 75px;
      border: 1px solid #4b5267;
      border-radius: 10px;
      background: ${props => props.theme.colors.secundary};
      color: ${props => props.theme.colors.text};
      outline: none;

      @media (max-width: 950px) {
        width: 500px;
      }

      @media (max-width: 630px) {
        width: 300px;
        margin-left: 30px;
      }
    }
  }
  .button-card {
    display: flex;
    justify-content: center;
  }
  .button-cadastro {
    width: 400px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background: ${props => props.theme.colors.primary};
    margin-top: 20px;
    color: white;
    text-decoration: none;
    margin-bottom: 30px;
    cursor: pointer;

    @media (max-width: 950px) {
      width: 280px;
    }
  }
`;
