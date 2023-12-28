import styled from 'styled-components';

export const StyledForm = styled.div`
  background-color: ${props => props.theme.bg.common};
`;

export const BookingForm = styled(StyledForm)`
  position: absolute;
  right: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 300px;
  min-height: ${props => (props.duration ? '400px' : '320px')};
  padding: 24px;
  border: 1px solid ${props => props.theme.bg.border};
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  @media (min-width: 1500px) {
    right: 320px;
  }
  &.fixed {
    position: fixed;
    top: 100px; /* 고정될 위치 조정 */
    right: 160px;
    width: 300px;
    min-height: ${props => (props.duration ? '400px' : '320px')};
    z-index: 100;
  }
`;

export const DateForm = styled(StyledForm)`
  min-height: 50px;
  border: 1px solid ${props => props.theme.bg.boldBorder};
  border-radius: 8px;
  border-collapse: collapse;
`;

export const CountForm = styled(StyledForm)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-height: 50px;
  margin-bottom: 5px;
  border-top: 1px solid ${props => props.theme.bg.boldBorder};
  font-size: 8px;
`;

export const CheckForm = styled(StyledForm)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  margin-top: 5px;
`;

export const CenterForm = styled(StyledForm)`
  position: absolute;
  padding: 5px;
  margin-bottom: 20px;
`;

export const PaymentForm = styled(StyledForm)`
  border: 1px solid ${props => props.theme.bg.border};
  border-radius: 12px;
  width: 450px;
  padding: 24px;
  position: absolute;
  right: 160px;
  @media (min-width: 1500px) {
    right: 320px;
  }
`;
