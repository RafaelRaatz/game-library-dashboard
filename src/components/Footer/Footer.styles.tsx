import styled from 'styled-components';

export const FooterWrapper = styled.div`
  border-top: 1px solid ${props => props.theme.colors.secundary};
  margin-top: 150px;

  @media (max-width: 1140px) {
    margin-top: 50px;
  }
`;
export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 60px;

  .footer-content {
    display: flex;
    flex-direction: column;
    width: 1136px;


    @media (max-width: 630px) {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
      align-items:center;
    }


    .footer-information {
      display: flex;
      margin-bottom: 80px;
      justify-content: space-around;

      @media (max-width: 630px) {
        margin-bottom: 0px;
        display: flex;
        justify-content: center;
        flex-direction: column;

      }

      .information-menu{
        display: flex;
        gap: 90px;

        @media (max-width: 630px) {
          margin-top:30px;
          margin-bottom:20px;
        }

        .menu-item{
          display: flex;
          gap: 90px;

          @media (max-width: 950px) {
            flex-direction: column;
            gap: 20px;
          }
        }


        @media (max-width: 1140px) {
          justify-content: center;
          gap: 10px;

        }
      }


    }

    .information-logo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;

      @media (max-width: 1140px) {
        margin-bottom: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      p{
        color: #808080;
      }

      .footer-logo {
        span {
          color: #9370db;
        }
        h2 {
          color: ${props => props.theme.colors.text};
        }
      }
    }

    .information {
      display: flex;
      flex-direction: column;
      gap: 8px;
      text-align: center;

      span{
        font-weight: bold;
        color: #808080;
      }
    }

    }

    .social-midia {
      border-top: 1px solid #808080;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding-bottom:40px;


      span{
        color: #808080;
      }

      .icons {
        display: flex;
        align-content: center;
        justify-content: center;
        gap: 10px;
        padding-top: 80px;

        @media (max-width: 1140px) {
          padding-top: 20px;
        }



        a {
          text-decoration: none;
          padding: 8px;
          border-radius: 100%;
          border: 1px solid white;
          color: ${props => props.theme.colors.text};
        }

        .icon {
          width: 25px;
          height: 20px;
        }
      }
    }
  }
`;
