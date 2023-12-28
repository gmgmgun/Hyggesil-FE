import React from 'react';
import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

const KakaoMapDetail = ({ data: { coordinate }, size: { width, height } }) => {
  if (!coordinate) return;
  return (
    <Map
      center={{ lat: coordinate.lat, lng: coordinate.lng }}
      style={{ width: width, height: height }}
      level={5}
      disableDoubleClick={true}
    >
      <CustomOverlayMap
        position={{
          lat: coordinate.lat,
          lng: coordinate.lng,
        }}
      >
        <StyledInfo />
      </CustomOverlayMap>
    </Map>
  );
};

export default KakaoMapDetail;

const StyledInfo = styled.img.attrs({
  src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
  width: '28px',
  height: '25px',
})``;
