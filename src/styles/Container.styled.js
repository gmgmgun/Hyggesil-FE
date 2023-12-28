import styled from 'styled-components';
import { CalendarContainer } from 'react-datepicker';

export const StyledContainer = styled.div`
  background-color: ${props => props.theme.bg.common};
`;

export const CalendarWrapperContainer = styled(StyledContainer)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
  background: #ffffff;
`;

export const CalendarFlexContainer = styled(StyledContainer)`
  position: relative;
  display: flex;
`;

export const DetailContainer = styled(StyledContainer)`
  padding: 10px 160px;
  @media (min-width: 1500px) {
    padding: 10px 320px;
  }
  .adress {
    margin-top: 25px;
  }
`;

export const ImageContainer = styled(StyledContainer)`
  display: flex;
  margin-top: 25px;
  border-radius: 10px;
`;

export const BigImageContainer = styled.div`
  width: 50%;

  @media (max-width: 800px) {
    width: 100%;
  }

  img {
    object-fit: fill;
    vertical-align: bottom;
    width: 100%;
    height: 450px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
`;

export const GridImageContainer = styled.div`
  margin: 0 10px;
  width: 50%;
  background-color: #fff;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row: auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  @media (max-width: 800px) {
    display: none;
  }
  div {
    background-color: #333;
    border-radius: 10px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-family: sans-serif;

    img {
      object-fit: fill;
      object-position: center;
      vertical-align: bottom;
      width: 100%;
      height: 220px;
    }
    .image2 {
      border-top-right-radius: 10px;
    }
    .image4 {
      border-bottom-right-radius: 10px;
    }
  }
`;

export const OptionContainer = styled(StyledContainer)`
  display: flex;
  min-height: 500px;
  margin-top: 20px;
`;

export const RoomOptionContainer = styled(StyledContainer)`
  display: flex;
`;

export const IconContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid ${props => props.theme.bg.border};
  border-radius: 15px;
  padding: 10px 40px;
  font-size: 25px;
  height: 80px;
  margin: 20px;
`;

export const MyCalendarContainer = styled(CalendarContainer)`
  padding: 30px;
`;

export const OptionUnitContainer = styled(StyledContainer)`
  width: 60%;
`;

export const HotelOptionContainer = styled(StyledContainer)`
  margin: 10px;
  min-height: 400px;
`;

export const MapContainer = styled(StyledContainer)`
  min-height: 400px;
  width: 100%;
  border: 1px solid ${props => props.theme.bg.border};
`;

export const MapWrapper = styled(StyledContainer)`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const PaymentContainer = styled(StyledContainer)`
  padding: 10px 160px;
  @media (min-width: 1500px) {
    padding: 10px 320px;
  }
`;

export const PaymentImageWrapper = styled(StyledContainer)`
  display: flex;
  height: 100px;
`;

export const PaymentImageContainer = styled(StyledContainer)`
  width: 30%;
  margin-right: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    vertical-align: bottom;
    border-radius: 10px;
  }
`;

export const PromoteContainer = styled(StyledContainer)`
  position: relative;
  border: 1px solid ${props => props.theme.bg.border};
  border-radius: 12px;
  padding: 25px;
  width: 100%;
`;
export const InfoContainer = styled(StyledContainer)`
  display: flex;
  min-height: 500px;
`;

export const LeftContainer = styled(StyledContainer)`
  width: 50%;
`;

export const BackContainer = styled(StyledContainer)`
  padding: 50px 0;
`;
