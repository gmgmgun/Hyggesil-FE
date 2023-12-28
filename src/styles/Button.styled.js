import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
`;

export const BookingButton = styled(StyledButton)`
  width: 100%;
  padding: 14px;
  background-color: ${props => props.theme.bg.button};
  border: none;
  border-radius: 8px;
  color: ${props => props.theme.bg.common};
`;

export const CountButton = styled(StyledButton)`
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.bg.border};
  font-size: 15px;
`;

export const BackButton = styled.a`
  position: relative;
  display: inline-block;
  margin-right: 20px;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #333;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ddd;
    opacity: 0.3;
  }
`;

export const PaymentButton = styled(StyledButton)`
  margin-top: 50px;
  background-color: ${props => props.theme.bg.button};
  color: ${props => props.theme.bg.common};
  font-size: 16px;
  padding: 20px;
  border-radius: 10px;
  border: none;
  width: 130px;
`;
