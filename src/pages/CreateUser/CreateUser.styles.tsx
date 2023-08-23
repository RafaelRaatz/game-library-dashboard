import styled from 'styled-components';

export const ContainerBox = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primary};

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
    height: 28em;
    background: ${props => props.theme.colors.secundary};
    border-radius: 10px;
  }

  @media (max-width: 650px) {
    width: 22em;
  }

  h2 {
    font-size: 16px;
    margin-bottom: 15px;
    color: #fff;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
  h3 {
    font-size: 32px;
    margin-bottom: 15px;
    color: #fff;
    text-align: center;
  }
  .inputbox {
    margin: 2em 0;
    widht: 19em;
    border-bottom: 2px solid #fff;

    svg {
      position: absolute;
      font-size: 1.2em;
      color: #fff;
      margin: 0.8em 11.5em;
    }

    input {
      width: 100%;
      height: 3em;
      background: transparent;
      border: none;
      outline: none;
      font-size: 1em;
      padding: 0 2em 0 5px;
      color: #fff;
    }
  }
  .forget {
    margin: -1em 0 1em;
    font-size: 0.9em;

    a {
      text-decoration: none;
      color: #fff;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  button {
    width: 100%;
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
    font-seiz: 1em;
    color: #fff;
    text-align: center;
    margin: 25px 0 10px;

    a {
      text-decoration: none;
      color: #fff;
      font-weight: 600;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;
