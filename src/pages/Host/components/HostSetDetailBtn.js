import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const HostSetDetailBtn = ({ name, img, id, hotelInfo, setHotelInfo }) => {
  const [btnClicked, setBtnClicked] = useState(false);
  const onClickDetailBtn = () => {
    setBtnClicked(!btnClicked);
  };

  useEffect(() => {
    if (!hotelInfo.conveniences) return;
    const updateHotelInfo = {
      ...hotelInfo,
      conveniences: btnClicked
        ? [...hotelInfo.conveniences, id]
        : hotelInfo.conveniences.filter(conv => conv !== id),
    };
    setHotelInfo(updateHotelInfo);
  }, [btnClicked]);

  return (
    <StyledDetailBtnWrap style={btnClicked ? { opacity: 1 } : { opacity: 0.2 }}>
      <StyledDetailBtn onClick={onClickDetailBtn}>{img}</StyledDetailBtn>
      <StyledDetailName>{name}</StyledDetailName>
    </StyledDetailBtnWrap>
  );
};

export default HostSetDetailBtn;

const StyledDetailBtn = styled.button`
  font-size: 40px;
  border: 1px solid;
  border-radius: 10px;
  margin: 10px;
`;

const StyledDetailName = styled.p``;

const StyledDetailBtnWrap = styled.div`
  display: flex;
  align-items: center;
`;
