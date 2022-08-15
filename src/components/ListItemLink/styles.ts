import { transparentize } from 'polished';
import styled from 'styled-components';

type IButtonProps = {
  status: boolean;
};

export const Container = styled.li`
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 18px;

  border-radius: 5px;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  font-weight: 500;

  p {
    color: ${({ theme }) => theme.colors.gray[800]};

    max-width: 400px;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;
  }

  div {
    margin-left: 20px;
    span {
      color: ${({ theme }) => theme.colors.cyan[500]};
      text-align: center;
      font-weight: 500;
      font-size: 1rem;
    }

    input {
      background: transparent;

      opacity: 0;

      :selected {
        background: transparent;
      }
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;

    padding: 0;

    max-width: 350px;
    width: 100%;

    margin: 0 auto;

    padding: 4px;

    p {
      max-width: 250px;

      padding: 8px;
    }

    div {
      border-top: 1px solid
        ${({ theme }) => transparentize(0.8, theme.colors.gray[600])};

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      max-width: 350px;
      width: 100%;

      span {
        text-align: left;
        flex: 1;

        padding: 6px;
      }
    }
  }
`;

export const Button = styled.button<IButtonProps>`
  background: ${({ status, theme }) =>
    status ? theme.colors.violet[800] : theme.colors.cyan[500]};

  font-weight: 500;

  padding: 8px 16px;

  color: ${({ theme }) => theme.colors.white};

  font-size: 1rem;

  border-radius: 6px;

  margin-left: 12px;

  letter-spacing: 1px;

  @media screen and (max-width: 500px) {
    width: 100%;
    max-width: 300px;

    margin: 6px auto;
  }
`;
