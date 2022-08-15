import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.gray[800]};
  color: ${({ theme }) => theme.colors.white};

  padding: 50px 0;

  li {
    cursor: pointer;

    transition: all linear 0.3s;

    :hover {
      color: ${({ theme }) => theme.colors.cyan[500]};
    }
  }
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

export const SubContainer = styled.div`
  max-width: 1200px;

  display: flex;
  justify-content: space-around;

  margin: 0 auto;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;

    gap: 50px;
  }
`;

export const LogoContainer = styled.div`
  span {
    font-size: 1.8rem;
  }
`;

export const Navigation = styled.div`
  display: flex;

  gap: 60px;

  ul {
    display: flex;
    flex-direction: column;

    gap: 5px;

    margin-top: 20px;

    li {
      color: ${({ theme }) => theme.colors.gray[300]};
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const SocialMedias = styled.div`
  ul {
    display: flex;

    gap: 20px;
  }
`;
