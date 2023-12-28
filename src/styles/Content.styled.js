import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import CalendarContainer from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const BetweenDiv = styled.div`
  display: ${props => (isNaN(props.duration) ? 'none' : 'flex')};
  justify-content: space-between;
  align-items: center;
`;

export const BetweenLine = styled(BetweenDiv)`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

export const PriceLine = styled(BetweenDiv)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Underline = styled.div`
  display: ${props => isNaN(props.duration) && 'none'};
  border-bottom: 1px solid ${props => props.theme.bg.border};
  margin: 20px 0;
`;

export const UnderlineDiv = styled(Underline)`
  display: flex;
  margin: 10px 0 20px 0;
`;

export const UnderlineMarginedDiv = styled(Underline)`
  display: flex;
  margin: 30px 0 30px 0;
`;

export const H0 = styled.span`
  font-size: 30px;
`;
export const H1 = styled.h1`
  font-size: 22px;
  font-weight: 300;
`;

export const MarginTopedH1 = styled(H1)`
  margin: 20px 0;
  font-weight: 400;
`;

export const BoldH1 = styled(H1)`
  font-weight: 400;
  margin-bottom: 55px;
`;

export const NarrowBoldH1 = styled(H1)`
  font-weight: bold;
  margin-top: 10px;
`;

export const H2 = styled.h2`
  font-size: 15px;
  line-height: 20px;
`;

export const UnderlinedH2 = styled(H2)`
  text-decoration: underline;
  text-decoration-thickness: 1px;
`;
export const BoldH2 = styled(H2)`
  font-weight: bold;
`;

export const MarginedH2 = styled(H2)`
  display: flex;
  align-items: center;
  margin: 0 0 20px 5px;
  font-size: 22px;
`;

export const MarginTopedH2 = styled(H2)`
  margin-top: 20px;
  font-weight: 600;
`;

export const InfoH2 = styled(H2)`
  margin-top: 10px;
  font-size: 15px;
`;

export const H3 = styled.h3`
  font-size: 10px;
`;

export const BoldH3 = styled(H3)`
  font-weight: bold;
`;

export const Span = styled.span`
  font-size: 12px;
`;

export const MiddleSpan = styled.p`
  font-size: 15px;
  margin-left: 15px;
  font-weight: 350;
`;

export const BigSpan = styled(Span)`
  font-size: 20px;
  font-weight: bold;
`;

export const UnderlinedSpan = styled(Span)`
  text-decoration: underline;
  cursor: pointer;
`;

export const PaymentInfoDiv = styled.h2`
  font-size: 12px;
`;

export const PaymentInfoColorDiv = styled(PaymentInfoDiv)`
  color: #717171;
  margin-bottom: 5px;
`;

export const MyDatePicker = styled(DatePicker)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  min-height: 50px;
  background-color: transparent;
  border: none;
  font-size: 12px;
  color: black;
  text-align: center;
  transform: translate(-50%, -50%);
  &:focus {
    border-radius: 8px;
    outline: 2px solid black;
    z-index: 100;
  }
`;

export const DoubleCalendarContainer = styled(CalendarContainer)`
  display: flex;
`;

export const ProtectionDiv = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  img {
    width: 45px;
    margin-bottom: 2px;
  }
`;

export const AlertDiv = styled.div`
  margin-top: 20px;
`;

export const Jewel = styled.img`
  position: absolute;
  width: 35px;
  top: 25%;
  right: 30px;
`;

export const List = styled.li`
  font-size: 12px;
  margin-top: 10px;
  text-indent: -5px; /* 점 위치 이동 */
  margin-left: 15px;
`;
