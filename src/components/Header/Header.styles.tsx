import styled from 'styled-components';

export const Container = styled.header`
  height: 96px;
  background: ${props => props.theme.colors.primary};

  @media (max-width: 950px) {
    height: 70px;
    display: flex;
    justify-content: center;
    padding-top: 25px;
  }

  @media (max-width: 630px) {
    height: 150px;
    display: flex;
    gap:20px;
    padding-top: 0px;

  }

  .header-content {
    max-width: 1136px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;

    @media (max-width: 1140px) {
      width: 950px;
    }

    @media (max-width: 950px) {
      width: 630px;
    }

    @media (max-width: 630px) {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .header-logo {
      display: flex;

      @media (max-width: 1140px) {


      }


      span {
        color: #9370db;
      }
      .logo {
        color: ${props => props.theme.colors.text};
        text-decoration: none;
        font-size: 30px;
        font-weight: bold;


      }
    }

    .responsive-input{


      @media (max-width: 1140px) {
        display: flex;
        width: 650px;
        justify-content: space-between;
        align-items: center;
        margin-left:80px;


      }

      @media (max-width: 950px) {
        width: 340px;
        margin-left:60px;
      }

      @media (max-width: 630px) {
        justify-content: space-between;
        margin-left:0px;
        width: 300px;
      }

    }

    .header-input {

      display: flex;
      justify-content: end;



      input {
        width: 400px;
        height: 48px;
        text-align: center;
        background:${props => props.theme.colors.secundary};
        border:none;
        border-radius: 32px;
        padding: 20px;
        outline: none;

      }

      .search-icon {
        border: none;
        position: absolute;

        margin: 16px 0 0 10px;
        background:${props => props.theme.colors.secundary};
        color: #808080;

        @media (max-width: 950px) {
          border: none;
          display: none;
          background: ${props => props.theme.colors.secundary};
        }
      }

      @media (max-width: 950px) {
        width: 224px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }


    .header-button {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 10px;

      .theme{
        display: flex;
        .icon-theme {
          font-size: 22px;
          color: ${props => props.theme.colors.text};
        }
      }

      .logout{
        display: flex;
        justify-content: end;

      .icon {
        font-size: 22px;
        color: red;
      }
      }

      button {
        border: none;
        background: none;
        cursor: pointer;
      }
    }

    .responsive-menu{
      display:none;
      background:none;
      border:none;

      @media (max-width: 1140px) {
        display: flex;
        justify-content: flex-end;

      }

      @media (max-width: 950px) {
        width: 130px;
      }

      @media (max-width: 6300px) {
        width: 30px;
      }

      .icon-responsive{
        font-size:25px;
        color: #fff;

      }
    }

    .avatar{
      display: flex;
      justify-content: end;
      gap: 10px;

      .theme{
        display: flex;
        justify-content: end;

        .icon-theme {
          font-size: 22px;
          color: ${props => props.theme.colors.text};
        }
      }

      .logout{
        display: flex;
        justify-content: end;

      .icon {
        font-size: 22px;
        color: red;
      }
      }

      button {
        border: none;
        background: none;
        cursor: pointer;


        @media (max-width: 1140px) {
          width: 100px;
          display: none;
        }
      }

      .user-info{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        @media (max-width: 1140px) {
          display: none;
        }
        .email {
          font-size:12px;
          color: #808080;
        }
      }

      .picture{
        width: 70px;
        height: 70px;
        border: 1px solid #808080;
        border-radius: 100%;
        background-color: ${props => props.theme.colors.secundary};
        margin-right: 15px;

        @media (max-width: 1140px) {
          display: none;
        }

        .name{
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 15px;
          font-size: 30px;
        }
      }
    }

    }
  }
`;
