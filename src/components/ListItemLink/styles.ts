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

      z-index: -1;
      opacity: 0;

      :selected {
        background: transparent;
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
`;
