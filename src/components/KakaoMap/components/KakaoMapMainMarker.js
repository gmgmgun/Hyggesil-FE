import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomOverlayMap } from 'react-kakao-maps-sdk';
import Card from 'react-bootstrap/Card';

const KakaoMapMainMarker = ({
  price,
  id,
  name,
  coordinate,
  images,
  toggle,
  handleToggle,
}) => {
  const navigate = useNavigate();

  const onClickInfoWindow = () => {
    handleToggle(!toggle);
  };

  const onClickInfoCard = () => {
    navigate(`/hotels/${id}`);
  };

  return (
    <CustomOverlayMap
      key={id}
      position={{
        lat: coordinate.lat,
        lng: coordinate.lng,
      }}
    >
      <StyledInfoWindow onClick={onClickInfoWindow}>
        ₩ {Number(price).toLocaleString()}
      </StyledInfoWindow>
      {toggle && (
        <StyledInfoCard onClick={onClickInfoCard}>
          <StyledInfoImage variant="top" src={images[0]} />
          <StyledInfoBody>
            <StyledInfoTitle>{name}</StyledInfoTitle>
            <StyledInfoText>
              ₩ {Number(price).toLocaleString()} / 박
            </StyledInfoText>
          </StyledInfoBody>
        </StyledInfoCard>
      )}
    </CustomOverlayMap>
  );
};

export default KakaoMapMainMarker;

const StyledInfoWindow = styled.div`
  width: 60px;
  background-color: white;

  padding: 5px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const StyledInfoCard = styled(Card)`
  width: 200px;
  cursor: pointer;
`;

const StyledInfoImage = styled(Card.Img)``;

const StyledInfoBody = styled(Card.Body)``;

const StyledInfoTitle = styled(Card.Title)`
  font-size: 13px;
`;

const StyledInfoText = styled(Card.Text)`
  font-size: 12px;
`;
