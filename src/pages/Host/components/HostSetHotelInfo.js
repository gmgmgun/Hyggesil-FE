import React from 'react';
import styled from 'styled-components';

const HostSetHotelInfo = ({ hotelInfo }) => {
  const {
    name,
    address,
    price,
    bed,
    bedrooms,
    conveniences,
    guestMax,
    images,
  } = hotelInfo;

  const onSubmitInfo = async () => {
    const formData = new FormData();
    formData.append('name', name); // 데이터 추가
    formData.append('address', address); // 데이터 추가
    formData.append('price', price); // 데이터 추가
    formData.append('bed', bed); // 데이터 추가
    formData.append('bedrooms', bedrooms); // 데이터 추가
    formData.append('conveniences', conveniences); // 데이터 추가
    formData.append('guestMax', guestMax); // 데이터 추가
    formData.append('images', images); // 데이터 추가

    try {
      const response = await fetch('http://hyggesil.com:4000/hosts', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <StyledHotelInfoContainer onSubmit={onSubmitInfo}>
      <StyledInfoItem>
        <StyledLabel>호텔명</StyledLabel>
        <StyledValue>{name}</StyledValue>
      </StyledInfoItem>
      <StyledInfoItem>
        <StyledLabel>주소</StyledLabel>
        <StyledValue>{address}</StyledValue>
      </StyledInfoItem>
      <StyledInfoItem>
        <StyledLabel>1박 비용</StyledLabel>
        <StyledValue>{price}원</StyledValue>
      </StyledInfoItem>
      <StyledInfoItem>
        <StyledLabel>보유 객실 수</StyledLabel>
        <StyledValue>{bedrooms}개</StyledValue>
      </StyledInfoItem>
      <StyledInfoItem>
        <StyledLabel>객실당 침대 수</StyledLabel>
        <StyledValue>{bed}개</StyledValue>
      </StyledInfoItem>
      <StyledInfoItem>
        <StyledLabel>객실당 최대 허용 인원</StyledLabel>
        <StyledValue>{guestMax}명</StyledValue>
      </StyledInfoItem>
      <StyledButtonWrap>
        <StyledButton type="submit">완료</StyledButton>
      </StyledButtonWrap>
    </StyledHotelInfoContainer>
  );
};

const StyledHotelInfoContainer = styled.form`
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  gap: 20px;
  width: 350px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const StyledInfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const StyledLabel = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;
`;

const StyledValue = styled.span`
  font-size: 16px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin-top: 50px;
`;

const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #ff5a5f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #cc4c4f;
  }
`;

const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;

export default HostSetHotelInfo;
