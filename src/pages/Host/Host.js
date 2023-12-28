import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import HostSetAddress from './components/HostSetAddress';
import HostSetDetail from './components/HostSetDetail';
import HostSetHotelInfo from './components/HostSetHotelInfo';
import HostSetImages from './components/HostSetImages';

const Host = () => {
  const [hotelInfo, setHotelInfo] = useState({ conveniences: [] });
  const swiperRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);

  const onClickPrevBtn = () => {
    swiperRef.current.slidePrev();
    setCurrentPage(prev => prev - 1);
  };

  const onClickNextBtn = () => {
    swiperRef.current.slideNext();
    setCurrentPage(prev => prev + 1);
  };

  return (
    <StyledSwiper
      onSwiper={swiper => (swiperRef.current = swiper)}
      allowTouchMove={false}
    >
      <StyledSlide
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledAddressTitle>주소 입력하기</StyledAddressTitle>
        <HostSetAddress setHotelInfo={setHotelInfo} />
      </StyledSlide>
      <StyledSlide
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledDetailTitle>세부 정보 입력하기</StyledDetailTitle>
        <HostSetDetail hotelInfo={hotelInfo} setHotelInfo={setHotelInfo} />
      </StyledSlide>
      <StyledSlide
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledImagesTitle>호텔 사진 추가하기</StyledImagesTitle>
        <HostSetImages
          setCurrentPage={setCurrentPage}
          setHotelInfo={setHotelInfo}
        />
      </StyledSlide>
      <StyledSlide
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledAddressTitle>입력 정보 확인</StyledAddressTitle>
        <HostSetHotelInfo hotelInfo={hotelInfo} />
      </StyledSlide>
      {currentPage !== 1 ? (
        <StyledPrevBtn onClick={onClickPrevBtn}>이전</StyledPrevBtn>
      ) : null}
      {currentPage !== 4 ? (
        <StyledNextBtn onClick={onClickNextBtn}>다음</StyledNextBtn>
      ) : null}
    </StyledSwiper>
  );
};

export default Host;

const StyledSwiper = styled(Swiper)`
  position: relative;
  height: 100vh;
  background-color: rgb(250, 250, 250);
`;

const StyledSlide = styled(SwiperSlide)`
  position: relative;
  height: inherit;
`;

const StyledPrevBtn = styled.button`
  position: absolute;
  bottom: 10px;
  left: 0;
  transform: translateY(-50%);
  width: 200px;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 50%;
  z-index: 100;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  border: none;
`;

const StyledNextBtn = styled.button`
  position: absolute;
  bottom: 10px;
  right: 0;
  transform: translateY(-50%);
  width: 200px;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 50%;
  z-index: 100;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  border: none;
`;

const StyledImagesTitle = styled.div`
  font-size: 40px;
  margin-bottom: 100px;
`;

const StyledAddressTitle = styled.div`
  font-size: 40px;
  margin-bottom: 600px;
`;

const StyledDetailTitle = styled.div`
  font-size: 40px;
  margin-bottom: 100px;
`;
