import React from 'react';
import { Link } from 'react-router-dom';
import HotelSlider from './HotelSlider';
import * as S from './Hotel.styled';

const Hotel = ({ hotel }) => {
  const { id, name, address, images, price } = hotel;
  return (
    <Link to={`/hotels/${id}`}>
      <S.HotelWrap key={id}>
        <S.HotelImg>
          <HotelSlider img={images} />
        </S.HotelImg>
        <S.HotelInfo>
          <S.Name>{name}</S.Name>
          <S.Distance>{address}</S.Distance>
          <S.Price> ₩ {Number(price).toLocaleString()} </S.Price>
        </S.HotelInfo>
      </S.HotelWrap>
    </Link>
  );
};

export default Hotel;
