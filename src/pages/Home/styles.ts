import styled, { css } from 'styled-components';

type SeparatorProps = {
  left?: string | number;
  right?: string | number;
  top?: string | number;
  bottom?: string | number;
  leftMobie?: string | number;
  rightMobile?: string | number;
  topMobile?: string | number;
  bottomMobile?: string | number;
};

type IFormProps = {
  hasError: boolean;
};

export const Container = styled.div``;

export const SectionContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;

  max-width: 1100px;

  margin: 0 auto;

  img {
    margin-right: -150px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;

    flex-direction: column-reverse;
    align-items: center;

    img {
      margin: 0;
      width: 350px;
    }
  }
`;

export const Heading = styled.h2`
  font-size: 3.4rem;

  line-height: 120%;

  @media screen and (max-width: 500px) {
    font-size: 2rem;

    text-align: center;
  }
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    padding: 5px;
  }

  @media screen and (max-width: 500px) {
    align-items: center;

    margin-top: 40px;

    button {
      width: 180px;

      height: 50px;
    }
  }
`;

export const Content = styled.div`
  max-width: 400px;

  padding: 12px 0;

  color: ${({ theme }) => theme.colors.gray[300]};

  @media screen and (max-width: 500px) {
    width: 100%;

    padding: 10px;
    text-align: center;

    margin-bottom: 10px;
  }
`;

export const Form = styled.form<IFormProps>`
  background-image: url('assets/bg-boost-desktop.svg');
  background-color: ${({ theme }) => theme.colors.violet[800]};

  max-width: 1000px;
  width: 100%;

  margin: 40px auto;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  gap: 10px;

  padding: 40px 20px;

  border-radius: 10px;

  position: relative;

  input {
    width: 650px;
    height: 50px;

    padding: 8px;

    font-size: 1.4rem;

    border-radius: 5px;

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray[300]};
    }
  }

  ${({ hasError }) =>
    hasError &&
    css`
      input {
        outline: 1px solid ${({ theme }) => theme.colors.red[500]};

        ::placeholder {
          color: ${({ theme }) => theme.colors.red[500]};
        }
      }
    `}

  @media screen and (max-width: 500px) {
    background-image: url('assets/bg-boost-mobile.svg');
    background-position: left;

    flex-direction: column;
    align-items: center;

    gap: 40px;

    padding: 20px 10px;

    width: 90%;

    input {
      width: 100%;

      text-align: center;
    }

    button {
      width: 90%;
    }
  }
`;

export const SectionStatistics = styled.section`
  background: ${({ theme }) => theme.colors.gray[50]};

  margin-top: -100px;
  padding: 90px 0;

  .SectionStatistics__header {
    text-align: center;

    padding: 40px 0;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 10px;

    h3 {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.gray[800]};
    }
    div {
      max-width: 450px;
      padding: 0;
      p {
        font-weight: 500;

        color: ${({ theme }) => theme.colors.gray[300]};
      }
    }
  }

  @media screen and (max-width: 500px) {
    .SectionStatistics__header {
      h3 {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.gray[800]};
      }
      div {
        max-width: 300px;
      }
    }
  }
`;

export const SectionCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  gap: 30px;

  padding: 30px 0;

  max-width: 1300px;

  margin: 0 auto;

  position: relative;

  @media screen and (max-width: 500px) {
    flex-direction: column;

    gap: 80px;
  }
`;

export const Separator = styled.div<SeparatorProps>`
  width: 55px;
  height: 10px;

  background: ${({ theme }) => theme.colors.cyan[500]};

  position: absolute;

  top: ${({ top }) => top && top};
  bottom: ${({ bottom }) => bottom && bottom};
  left: ${({ left }) => left && left};
  right: ${({ right }) => right && right};

  @media screen and (max-width: 500px) {
    top: ${({ topMobile }) => topMobile && topMobile};
    bottom: ${({ bottomMobile }) => bottomMobile && bottomMobile};
    left: ${({ leftMobie }) => leftMobie && leftMobie};
    right: ${({ rightMobile }) => rightMobile && rightMobile};

    transform: rotateZ(90deg);
  }
`;

export const BoostSection = styled.section`
  background-image: url('assets/bg-boost-desktop.svg');
  background-color: ${({ theme }) => theme.colors.violet[800]};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 15px;

  padding: 80px 0;

  h3 {
    color: ${({ theme }) => theme.colors.white};

    font-size: 1.8rem;
  }

  @media screen and (max-width: 500px) {
    h3 {
      font-size: 1.6rem;
    }
  }
`;

export const ColumnForm = styled.div`
  display: flex;
  flex-direction: column;

  span {
    padding: 10px 0;

    position: absolute;

    bottom: 0;
    left: 120px;

    color: ${({ theme }) => theme.colors.red[500]};
  }

  @media screen and (max-width: 500px) {
    padding: 0;

    span {
      top: 68px;
      left: 105px;
    }
  }
`;
