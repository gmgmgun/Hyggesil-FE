import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const KakaoMapHost = ({
  size: { width, height },
  setHotelInfo,
  setAddressData,
}) => {
  const { kakao } = window;
  const defaultCoord = [37.506320759000715, 127.05368251210247];

  const [mapCoord, setMapCoord] = useState({
    lat: defaultCoord[0],
    lng: defaultCoord[1],
  });

  const [markerCoord, setMarkerCoord] = useState({
    lat: defaultCoord[0],
    lng: defaultCoord[1],
  });

  const [divData, setDivData] = useState('');
  const [divDataList, setDivDataList] = useState([]);

  const startPoint = useRef({ x: 0, y: 0 });
  const overlayPoint = useRef();
  const mapRef = useRef();
  const target = useRef(null);

  const geocoder = new kakao.maps.services.Geocoder();

  const searchAddrFromCoords = ({ lng, lat }, callback) => {
    geocoder.coord2Address(lng, lat, callback);
  };

  const onClickBtn = () => {
    searchAddrFromCoords(markerCoord, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setAddressData(
          result[0].road_address ? result[0].road_address : result[0].address
        );
      }
    });
  };

  const onMouseMove = useCallback(e => {
    e.preventDefault();
    const map = mapRef.current;
    const proj = map.getProjection();
    const deltaX = startPoint.current.x - e.clientX;
    const deltaY = startPoint.current.y - e.clientY;
    const newPoint = new kakao.maps.Point(
      overlayPoint.current.x - deltaX,
      overlayPoint.current.y - deltaY
    );
    const newPos = proj.coordsFromContainerPoint(newPoint);

    setMarkerCoord({ lat: newPos.getLat(), lng: newPos.getLng() });
  }, []);

  const onMouseUp = useCallback(() => {
    document.removeEventListener('mousemove', onMouseMove);
  }, [onMouseMove]);

  const onMouseDown = useCallback(
    e => {
      e.preventDefault();
      const map = mapRef.current;
      const proj = map.getProjection();
      kakao.maps.event.preventMap();
      startPoint.current.x = e.clientX;
      startPoint.current.y = e.clientY;

      overlayPoint.current = proj.containerPointFromCoords(
        new kakao.maps.LatLng(markerCoord.lat, markerCoord.lng)
      );

      document.addEventListener('mousemove', onMouseMove);
    },
    [onMouseMove, markerCoord.lat, markerCoord.lng]
  );

  const onChangeInput = ({ target: { value } }) => {
    setDivData(value);
  };

  useEffect(() => {
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseUp, onMouseDown]);

  useEffect(() => {
    fetch('/data/divisionInfo.json')
      .then(res => res.json())
      .then(({ divisions }) => {
        setDivDataList(divisions);
      });
  }, []);

  useEffect(() => {
    const found = divDataList.find(el => divData === el.division);

    if (found) {
      const { latitude, longitude } = found;
      setMapCoord({ lat: latitude, lng: longitude });
      setMarkerCoord({ lat: latitude, lng: longitude });
    }
  }, [divData]);

  useEffect(() => {
    const coordinate = { ...markerCoord };
    setHotelInfo(prev => ({ ...prev, coordinate }));
  }, [markerCoord]);

  return (
    <Map
      id="map"
      center={{
        lat: mapCoord.lat,
        lng: mapCoord.lng,
      }}
      style={{
        width: width,
        height: height,
        borderRadius: '10px',
        border: '1px solid #ddd',
      }}
      level={6}
      disableDoubleClick={true}
      ref={mapRef}
    >
      <StyledMapForm>
        <CustomOverlayMap
          position={{
            lat: markerCoord.lat,
            lng: markerCoord.lng,
          }}
        >
          <StyledInfo onMouseDown={onMouseDown} />
        </CustomOverlayMap>
        <StyledMapInput
          placeholder="호텔이 위치한 행정구를 입력해주세요."
          onChange={onChangeInput}
        />
        <StyledMapButtonWrap>
          <StyledMapBtn variant="primary" onClick={onClickBtn} ref={target}>
            확인
          </StyledMapBtn>
        </StyledMapButtonWrap>
      </StyledMapForm>
    </Map>
  );
};

export default KakaoMapHost;

const StyledMapForm = styled.form`
  display: flex;
  z-index: 10;
  padding-top: 30px;
`;

const StyledMapInput = styled.input`
  position: relative;
  padding: 8px;
  margin-right: 60px;
  width: 340px;
  height: 38px;
  type: text;
  border: 0;
  border-radius: 10px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  font-size: 14px;
  ::placeholder {
    color: #666;
    font-size: 14px;
  }
`;

const StyledMapButtonWrap = styled.div`
  position: absolute;
  right: 350px;
`;

const StyledMapBtn = styled(Button)`
  padding: 5px;
  z-index: 10;
  type: text;
`;

const StyledInfo = styled.img.attrs({
  src: 'https://cdn-icons-png.flaticon.com/512/727/727590.png',
  width: '30px',
  height: '30px',
})``;
