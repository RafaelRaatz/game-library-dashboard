import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  height: 60px;
  .pagination-content {
    display: flex;
    width: 850px;
    justify-content: space-between;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    background: ${props => props.theme.colors.secundary};

    @media (max-width: 1140px) {
      width: 310px;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: ${props => props.theme.colors.text};

      @media (max-width: 1140px) {
        font-size: 10px;
      }
    }
  }
`;
export const DropDown = styled.div`
  list-style: none;
  display: flex;
  p {
    padding-right: 8px;
  }
  label {
    background: none;
    color: ${props => props.theme.colors.text};
    margin-left: 5px;
  }
  li {
    position: relative;

    button {
      color: ${props => props.theme.colors.text};
      background: ${props => props.theme.colors.secundary};
      border: none;

      padding-top: 4px;
      padding-bottom: 5px;
      font-size: 16px;

      @media (max-width: 1140px) {
        font-size: 12px;
      }

      :hover {
        text-shadow: 0px 0px 5px ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.secundary};
      }
    }
  }

  ul {
    position: absolute;
    background-color: ${props => props.theme.colors.secundary};
    display: none;

    li {
      color: ${props => props.theme.colors.text};
      border-top: 1px solid #4b5267;
      border-bottom: 1px solid ${props => props.theme.colors.primary};
      display: flex;
      width: 150px;
      font-size: 14px;
      gap: 4px;
      padding: 5px;
    }
  }
  li:hover ul,
  .menu li.over ul {
    display: block;
    z-index: 1;
  }
  .icon {
    width: 20px;
    padding-top: 3px;
    color: ${props => props.theme.colors.text};
  }
`;
