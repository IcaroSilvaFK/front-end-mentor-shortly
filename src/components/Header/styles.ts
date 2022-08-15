import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1100px;

  margin: 0 auto;

  padding: 30px 0;

  font-weight: bold;

  @media screen and (max-width: 500px) {
    padding: 20px;

    .container__button {
      display: none;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  gap: 40px;

  h1 {
    font-size: 2rem;
  }

  nav {
    display: flex;
    align-items: center;

    gap: 30px;

    color: ${({ theme }) => theme.colors.gray[300]};

    a {
      transition: all linear 0.3s;
      :hover {
        color: ${({ theme }) => theme.colors.gray[800]};
      }
    }
  }

  @media screen and (max-width: 500px) {
    nav {
      display: none;
    }
  }
`;

export const Mobile = styled.button`
  display: none;

  background: transparent;

  @media screen and (max-width: 500px) {
    display: block;
  }
`;
