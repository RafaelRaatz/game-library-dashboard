import styled from 'styled-components';

export const ContainerBox = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  gap: 50px;

  @media (max-width: 650px) {
    flex-direction: column;
  }

  .logo {
    span {
      color: #9370db;
    }
    h2 {
      color: #fff;
    }
  }

  .form-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25em;
    height: 25em;
    background: ${props => props.theme.colors.secundary};
    border-radius: 10px;

    @media (max-width: 650px) {
      width: 22em;
    }
  }

  h2 {
    font-size: 32px;
    color: #fff;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .inputbox {
    display: flex;
    margin: 16px 0;
    flex-direction: column;

    .icon {
      position: fixed;
      margin-left: 280px;
      margin-top: 8px;
    }

    input {
      width: 300px;
      height: 32px;
      background: transparent;
      border: none;
      outline: none;
      font-size: 1em;
      padding: 0 2em 0 5px;
      color: #fff;
      border-bottom: 2px solid #fff;
    }
  }
  .forget {
    font-size: 14px;
    margin-top: 10px;

    a {
      text-decoration: none;
      color: #fff;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .buttons {
    display: flex;
    justify-content: center;
  }
  button {
    width: 200px;
    height: 2.5em;
    border-radius: 2.5em;
    background: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
  }
  .register {
    font-size: 16px;
    color: #fff;
    text-align: center;
    margin: 40px 0 10px;

    a {
      text-decoration: none;
      color: #808080;
      font-weight: 600;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;
