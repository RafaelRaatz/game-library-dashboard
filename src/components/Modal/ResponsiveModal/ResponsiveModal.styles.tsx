import styled from 'styled-components';

export const Container = styled.main`
  position: fixed;
  background: ${props => props.theme.colors.secundary};
  height: 100%;
  top: 0px;
  right: 0px;
  width: 250px;
  border-radius: 10px;
  animation: showSidebar 0.4s;

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 250px;
    }
  }

  .content {
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    gap: 10px;

    .user {
      display: flex;
      margin-left: 10px;
      gap: 10px;

      button {
        color: #fff;
        background: none;
        border: none;

        .icon {
          color: red;
          font-size: 20px;
        }

        .icon-theme {
          color: #fff;
          font-size: 20px;
        }
      }

      .user-info {
        margin-top: 5px;
        span {
          font-size: 12px;
          color: #808080;
        }
      }

      .picture {
        width: 50px;
        height: 50px;
        border: 1px solid #808080;
        border-radius: 100%;
        background-color: ${props => props.theme.colors.secundary};

        .name {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 15px;
        }
      }
    }

    .return {
      display: flex;
      margin-left: 15px;
      padding: 1px;
      border-bottom: 1px solid #808080;

      .close {
        background: none;
        border: none;
        color: #fff;
        margin-right: 20px;
      }
    }

    .sidebar {
      display: flex;
      margin-left: 15px;
      flex-direction: column;
      gap: 30px;
      margin-top: 10px;

      .menu {
        h2 {
          color: #808080;
          margin-bottom: 20px;
        }

        .icon-menu {
          font-size: 20px;
          padding-top: 2px;
        }

        .menu-buttons {
          display: flex;
          flex-direction: column;
          gap: 15px;

          a {
            text-decoration: none;
            color: ${props => props.theme.colors.text};
            font-size: 18px;
          }
          .icon {
            color: ${props => props.theme.colors.text};
            font-size: 20px;
            padding-top: 5px;
          }
        }
      }
    }
  }
`;
