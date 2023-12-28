import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const AddressInputList = ({ addressData, setHotelInfo }) => {
  const {
    zone_no,
    main_address_no,
    sub_address_no,
    region_2depth_name,
    region_3depth_name,
    road_name,
    main_building_no,
    sub_building_no,
  } = addressData;

  const [addressInfo, setAddressInfo] = useState({
    division: '',
    road: '',
    name: '',
  });

  const onChangeAddressInfo = e => {
    const { name, value } = e.target;
    setAddressInfo({ ...addressInfo, [name]: value });
  };

  useEffect(() => {
    if (addressData) {
      if (zone_no && !main_address_no) {
        setAddressInfo({
          division: `${region_2depth_name}`,
          road: `${road_name} ${main_building_no ? main_building_no : ''}${
            sub_building_no ? -sub_building_no : ''
          }`,
          name: `${addressInfo.name ? addressInfo.name : ''}`,
        });
      } else if (!zone_no && main_address_no) {
        setAddressInfo({
          division: `${region_2depth_name}`,
          road: `${region_3depth_name} ${
            main_address_no ? main_address_no : ''
          }${sub_address_no ? -sub_address_no : ''}`,
          name: `${addressInfo.name ? addressInfo.name : ''}`,
        });
      }
    }
  }, [addressData]);

  useEffect(() => {
    for (let i = 0; i < sortDivisions.length; i++) {
      const divisions = sortDivisions[i];
      if (divisions.includes(addressInfo.division)) {
        setHotelInfo(prev => ({ ...prev, areaId: i + 1 }));
        break;
      }
    }
    setHotelInfo(prev => ({
      ...prev,
      address: `서울 ${addressInfo.division} ${addressInfo.road}`,
      name: addressInfo.name,
    }));
  }, [addressInfo]);

  return (
    <StyledInputCnt>
      <StyledInputText>호텔명을 꼭 입력해주세요!</StyledInputText>
      <StyledInputWrap>
        <StyledInput
          name="division"
          className={addressInfo.division ? 'input-vacant' : 'input-occupied'}
          type="text"
          placeholder=" "
          onChange={onChangeAddressInfo}
          value={addressInfo.division}
        />
        <StyledLabel> ex. 강남구</StyledLabel>
      </StyledInputWrap>
      <StyledInputWrap>
        <StyledInput
          name="road"
          className={addressInfo.road ? 'input-vacant' : 'input-occupied'}
          type="text"
          placeholder=" "
          onChange={onChangeAddressInfo}
          value={addressInfo.road}
        />
        <StyledLabel> ex. 테헤란로 427 </StyledLabel>
      </StyledInputWrap>
      <StyledInputWrap>
        <StyledInput
          name="name"
          className={addressInfo.hotel ? 'input-vacant' : 'input-occupied'}
          type="text"
          placeholder=" "
          onChange={onChangeAddressInfo}
          value={addressInfo.name}
        />
        <StyledLabel> ex. 위코드 호텔</StyledLabel>
      </StyledInputWrap>
    </StyledInputCnt>
  );
};

export default AddressInputList;

const StyledInputCnt = styled.div``;

const StyledInputText = styled.div``;

const StyledInputWrap = styled.div`
  position: relative;
  margin-top: 10px;
  padding-top: 13px;
`;

const StyledInput = styled.input`
  min-width: 300px;
  height: 45px;
  padding: 0px 15px;
  -webkit-appearance: none;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  transition: all 0.1s linear;
  border: 1px solid lightgrey;
  border-radius: 5px;
  outline: none;
  font-size: 16px;

  &.input-vacant {
    border-color: #f45452;
  }

  &:focus,
  &:not(:placeholder-shown) {
    padding-top: 20px;
    border: 2px solid #95bdff;
    font-size: 15px;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: calc(50% + 2px);
  left: 15px;
  box-sizing: border-box;
  transition: all 0.1s linear;
  background-color: white;
  color: lightgray;
  font-size: 13px;
  pointer-events: none;

  ${StyledInput}.input-vacant + & {
    top: calc(50% - 5px);
    color: #f45452;
  }

  ${StyledInput}:focus + &, ${StyledInput}:not(:placeholder-shown) + & {
    top: 20px;
    color: #95bdff;
    font-size: 10px;
  }
`;

const sortDivisions = [
  ['강동구', '송파구', '광진구', '중랑구', '성북구', '성동구'],
  [
    '강서구',
    '양천구',
    '구로구',
    '금천구',
    '영등포구',
    '은평구',
    '마포구',
    '서대문구',
  ],
  ['강남구', '관악구', '서초구', '동작구'],
  ['강북구', '도봉구', '노원구', '동대문구', '용산구', '중구', '종로구'],
];
