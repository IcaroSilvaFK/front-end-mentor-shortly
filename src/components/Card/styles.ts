import styled from 'styled-components';

type ContainerProps = { mt?: string | number };

export const Cotnainer = styled.div<ContainerProps>`
  background: ${({ theme }) => theme.colors.white};

  padding: 70px 40px 30px;

  border-radius: 10px;

  position: relative;

  margin-top: ${({ mt }) => mt && mt};

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 500px) {
    text-align: center;

    max-width: 300px;

    margin-top: 0;
  }
`;

export const SectionHeader = styled.div`
  padding: 20px 0;

  span {
    font-size: 1.4rem;
    font-weight: bold;
  }

  @media screen and (max-width: 500px) {
    padding: 10px 0;
  }
`;

export const SectionContent = styled.div`
  max-width: 310px;
  text-align: left;

  padding: 10px 0;

  margin: 0 auto;

  font-weight: 400;

  p {
    color: ${({ theme }) => theme.colors.gray[300]};
  }

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

export const BoxImage = styled.div`
  background: ${({ theme }) => theme.colors.violet[800]};

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -20px;
  left: 40px;

  padding: 20px;

  img {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 500px) {
    left: 50%;
    transform: translate(-50%);

    top: -40px;
  }
`;
