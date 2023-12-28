import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(235, 235, 235);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PirceRangeTitle = styled.div`
  width: 100%;
  height: auto;
  font-weight: 500;
  margin: 50px 0 30px 0;
  font-size: 22px;
`;

export const PriceSlideWrap = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const PriceSlide = styled.div`
  position: relative;
  height: 4px;
  width: 600px;
  border-radius: 10px;
  background-color: #dddddd;
`;

export const PriceSlideInner = styled.div`
  position: absolute;
  left: ${props => props.rangeMinPercent}%;
  right: ${props => props.rangeMaxPercent}%;
  height: 4px;
  border-radius: 10px;
  background-color: #b0b0b0;
`;

export const PriceRangeWrap = styled.div`
  position: relative;
`;

export const MinPrice = styled.input`
  position: absolute;
  top: -4px;
  height: 7px;
  width: 100%;
  -webkit-appearance: none;
  background: none;
  &::-webkit-slider-thumb {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 2px solid #b0b0b0;
    background-color: white;
    -webkit-appearance: none;
  }
  pointer-events: none;

  &::-webkit-slider-thumb {
    pointer-events: auto;
  }
`;

export const MaxPrice = styled(MinPrice)``;

export const PriceView = styled.div`
  width: 600px;
  margin-top: 50px;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const MinPriceView = styled.div`
  width: 280px;
  height: 70px;
  font-size: 18px;
  padding: 10px;
  border: solid 2px #dddddd;
  border-radius: 10px;

  h2 {
    font-size: 12px;
    color: gray;
    margin: 6px 0;
  }
`;
export const MaxPriceView = styled(MinPriceView)``;
