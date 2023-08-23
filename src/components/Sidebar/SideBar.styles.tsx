import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 200px;
  height: 100%;
  border: none;

  border-radius: 4px;

  @media (max-width: 1140px) {
    display: flex;
    width: 240px;
    display: none;
  }

  .sidebar-content {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 10px;

    @media (max-width: 1140px) {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }

    .filter {
      display: flex;
      flex-direction: column;
      margin-top: 50px;
      color: ${props => props.theme.colors.text};

      @media (max-width: 1140px) {
        display: flex;
        margin-top: 0px;
      }

      span {
        @media (max-width: 1140px) {
          display: none;
        }
      }
    }

    h2 {
      display: flex;
      margin-bottom: 5px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: ${props => props.theme.colors.tertiary};
      margin-bottom: 20px;
      gap: 10px;
    }

    .item-sidebar {
      display: flex;
      margin-left: 5px;
    }

    .icon-filter {
      font-size: 20px;
      padding: 3px 5px 0 0;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .menu-button {
      text-decoration: none;
    }

    button {
      display: flex;
      text-align: center;
      text-decoration: none;
      border: none;
      background-color: ${props => props.theme.colors.primary};
      cursor: pointer;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: ${props => props.theme.colors.text};
      margin-top: 8px;

      .icon {
        color: ${props => props.theme.colors.text};
        font-size: 20px;
        width: 25px;
        margin-right: 10px;
      }

      .icon-consoles {
        color: ${props => props.theme.colors.text};
        font-size: 20px;
        width: 25px;
        margin-right: 10px;

        @media (max-width: 1140px) {
          display: none;
        }
      }
    }

    input {
      margin-right: 5px;
      width: 12px;
      color: ${props => props.theme.colors.text};
    }

    .menu {
      flex-direction: column;

      @media (max-width: 1140px) {
        display: flex;
        width: 100px;
      }
    }
  }
`;
