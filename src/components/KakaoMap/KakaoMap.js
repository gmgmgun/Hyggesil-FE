import React from 'react';
import KakaoMapDetail from './components/KakaoMapDetail';
import KakaoMapHost from './components/KakaoMapHost';
import KakaoMapMain from './components/KakaoMapMain';

const KakaoMap = ({
  data,
  size,
  type,
  setHotelInfo,
  setLoadInputList,
  setAddressData,
}) => {
  const kakaoMap = {
    main: <KakaoMapMain data={data} size={size} />,
    detail: <KakaoMapDetail data={data} size={size} />,
    host: (
      <KakaoMapHost
        size={size}
        setHotelInfo={setHotelInfo}
        setLoadInputList={setLoadInputList}
        setAddressData={setAddressData}
      />
    ),
  };
  return kakaoMap[type];
};

export default KakaoMap;
