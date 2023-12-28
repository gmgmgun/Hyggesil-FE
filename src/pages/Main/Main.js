import React, { useState } from 'react';
import styled from 'styled-components';
import TopNav from '../../components/TopNav/TopNav';
import HotelList from './components/HotelList';

const Main = () => {
  const [isMapView, setIsMapView] = useState(false);
  return (
    <HotelListWrap>
      {/* <HotelList /> */}
      {isMapView ? <TopNav /> : <HotelList />}
      <MapBtn onClick={() => setIsMapView(prevState => !prevState)}>
        {isMapView ? '리스트보기' : '지도보기'}
      </MapBtn>
    </HotelListWrap>
  );
};

export default Main;

const HotelListWrap = styled.div`
  margin: 10px auto;
`;
export const MapBtn = styled.button`
  background-color: black;
  position: fixed;
  color: white;
  bottom: 250px;
  left: 47%;
  /* border: solid 1px #b0b0b0; */
  padding: 10px;
  width: 100px;
  height: 35px;
  z-index: 1;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
`;
