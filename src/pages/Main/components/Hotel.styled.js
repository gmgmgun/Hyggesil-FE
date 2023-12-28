import styled from 'styled-components';

export const HotelWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  /* height: 600px; */
  height: 390px;
  margin: 20px auto 30px auto;
  /* border-radius: 10px; */
  /* border: solid 2px #b0b0b0; */
  /* box-shadow: 3px 3px 3px 3px gray; */
  /* transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out; */

  /* &:active { */
  /* box-shadow: none; */
  /* } */
`;

export const HotelImg = styled.div`
  width: 100%;
  height: 260px;
  /* border: solid 2px #b0b0b0; */
  /* margin-bottom: 20px; */
  /* border-radius: 10px; */

  img {
    width: 100%;
    height: 100%;
  }
`;

export const HotelInfo = styled.div`
  display: flex;
  height: 90px;
  padding: 0 2px;
  flex-direction: column;
  /* border: solid 2px #b0b0b0; */
  justify-content: space-around;
`;

export const Name = styled.div`
  font-weight: bold;
`;
export const Distance = styled.div`
  font-size: 15px;
  color: gray;
`;

export const Price = styled.div`
  font-weight: bold;
`;
