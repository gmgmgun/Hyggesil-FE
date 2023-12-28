import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GrWorkshop } from 'react-icons/gr';
import { FaParking } from 'react-icons/fa';
import { TbToolsKitchen } from 'react-icons/tb';
import { RiTvLine } from 'react-icons/ri';
import { AiOutlineWifi } from 'react-icons/ai';
import HostSetDetailInput from './HostSetDetailInput';
import HostSetDetailBtn from './HostSetDetailBtn';
import HostSetDetailPrice from './HostSetDetailPrice';

const HostSetDetail = ({ hotelInfo, setHotelInfo }) => {
  return (
    <div>
      <div>
        <StyledDetailContainer>
          <StyledInputContainer>
            <StyledText> 객실 수</StyledText>
            <HostSetDetailInput setHotelInfo={setHotelInfo} unit="bedrooms" />
            <StyledText>객실 당 침대 수</StyledText>
            <HostSetDetailInput setHotelInfo={setHotelInfo} unit="bed" />
            <StyledText>최대 수용 가능 인원</StyledText>
            <HostSetDetailInput setHotelInfo={setHotelInfo} unit="guestMax" />
            <StyledText>1박 비용</StyledText>
            <HostSetDetailPrice setHotelInfo={setHotelInfo} />
          </StyledInputContainer>
          <StyledConvenientContainer>
            <StyledText>제공 편의 시설</StyledText>
            <StyledButtonContainer>
              {CONVENITENTS_DATA.map(({ id, name, img }) => (
                <HostSetDetailBtn
                  key={id}
                  name={name}
                  id={id}
                  img={img}
                  hotelInfo={hotelInfo}
                  setHotelInfo={setHotelInfo}
                />
              ))}
            </StyledButtonContainer>
          </StyledConvenientContainer>
        </StyledDetailContainer>
      </div>
    </div>
  );
};

export default HostSetDetail;

const StyledDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 150px;
`;
const StyledConvenientContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledButtonContainer = styled.div`
  margin-top: 20px;
`;

const StyledText = styled.div`
  font-weight: 600;
`;

const CONVENITENTS_DATA = [
  { id: 1, name: '주방', img: <TbToolsKitchen /> },
  { id: 2, name: '무선 인터넷', img: <AiOutlineWifi /> },
  { id: 3, name: '업무 공간', img: <GrWorkshop /> },
  { id: 4, name: '건물 내 무료 주차', img: <FaParking /> },
  { id: 5, name: '객실 내 TV', img: <RiTvLine /> },
];
