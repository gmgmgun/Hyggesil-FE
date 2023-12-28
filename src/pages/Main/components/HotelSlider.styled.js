import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const StyledSlider = styled(Slider)`
  height: 250px;
  width: 100%;
  margin: auto;
  position: relative;
  /* border-radius: 10px; */

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-dots {
    bottom: 10px;
  }
  .slick-dots li.slick-active button:before {
    color: White;
  }
`;
export const SilderImg = styled.div`
  height: 250px;
  position: relative;
  text-align: center;

  img {
    height: 100%;
    width: 100%;
    /* border-radius: 10px; */
  }
`;

export const Pre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 1%;
  opacity: 0;
  z-index: 3;
`;

export const NextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 1;
  opacity: 0;
  right: 1%;
`;

export const SliderWrap = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  &:hover ${Pre}, &:hover ${NextTo} {
    opacity: 1;
  }
`;
