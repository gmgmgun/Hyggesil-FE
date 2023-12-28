import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as LeftArrow } from './icons/leftArrow.svg';
import { ReactComponent as RightArrow } from './icons/rightArrow.svg';
import * as S from './HotelSlider.styled';

const HotelSlider = ({ img }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <S.NextTo>
        <RightArrow />
      </S.NextTo>
    ),
    prevArrow: (
      <S.Pre>
        <LeftArrow />
      </S.Pre>
    ),
  };

  return (
    <S.SliderWrap>
      <S.StyledSlider {...settings}>
        {img.map(data => {
          return (
            <S.SilderImg key={data.id}>
              <img src={data} alt="hotel" />
            </S.SilderImg>
          );
        })}
      </S.StyledSlider>
    </S.SliderWrap>
  );
};

export default HotelSlider;
