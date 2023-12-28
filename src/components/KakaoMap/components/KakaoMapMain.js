import React, { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import KakaoMapMainMarker from './KakaoMapMainMarker';

const KakaoMapMain = ({ data, size: { width, height } }) => {
  const [toggles, setToggles] = useState([]);

  const handleToggle = index => {
    const newToggles = toggles.map((toggle, i) => {
      if (i === index) {
        return !toggle;
      } else {
        return toggles[index] === false ? false : toggle;
      }
    });

    setToggles(newToggles);
  };

  useEffect(() => {
    if (data) {
      setToggles(Array.from({ length: data.length }, () => false));
    }
  }, [data]);

  return (
    <Map
      center={{ lat: 37.5642135, lng: 127.0016985 }}
      style={{ width: width, height: height, zIndex: 0 }}
      level={5}
      disableDoubleClick={true}
    >
      {data.map(({ id, name, price, coordinate, images }, idx) => {
        return (
          <KakaoMapMainMarker
            key={id}
            id={id}
            name={name}
            price={price}
            coordinate={coordinate}
            images={images}
            toggle={toggles[idx]}
            handleToggle={() => handleToggle(idx)}
          />
        );
      })}
    </Map>
  );
};

export default KakaoMapMain;
