import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import KakaoMap from '../../../components/KakaoMap/KakaoMap';
import AddressInputList from './AddressInputList';

const HostSetAddress = ({ setHotelInfo }) => {
  const [addressData, setAddressData] = useState({});
  return (
    <StyledSetAddressContainer>
      <StyledMapContainer>
        <KakaoMap
          size={{ width: '400px', height: '400px' }}
          type="host"
          setHotelInfo={setHotelInfo}
          setAddressData={setAddressData}
        />
      </StyledMapContainer>
      <StyledInputContainer>
        <AddressInputList
          addressData={addressData}
          setHotelInfo={setHotelInfo}
        />
      </StyledInputContainer>
    </StyledSetAddressContainer>
  );
};

export default HostSetAddress;

const StyledSetAddressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledMapContainer = styled.div`
  margin-right: 50px;
`;

const StyledInputContainer = styled.div``;
