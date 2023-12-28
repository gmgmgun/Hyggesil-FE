import React from 'react';
import * as S from './PriceRange.styled';

const PriceRange = ({
  rangeMinValue,
  rangeMaxValue,
  onRangeChange,
  fixedMaxPrice,
  fixedMinPrice,
}) => {
  const priceGap = 0;

  const prcieRangeMinValueHandler = e => {
    const minValue = parseInt(e.target.value);
    if (minValue <= rangeMaxValue - priceGap) {
      onRangeChange(minValue, rangeMaxValue);
    }
  };

  const prcieRangeMaxValueHandler = e => {
    const maxValue = parseInt(e.target.value);
    if (maxValue >= rangeMinValue + priceGap) {
      onRangeChange(rangeMinValue, maxValue);
    }
  };

  const rangeMinPercent = (rangeMinValue / fixedMaxPrice) * 100;
  const rangeMaxPercent = 100 - (rangeMaxValue / fixedMaxPrice) * 100;

  return (
    <S.Wrap>
      <S.PirceRangeTitle>가격범위</S.PirceRangeTitle>
      <S.PriceSlideWrap>
        <S.PriceSlide>
          <S.PriceSlideInner
            rangeMinPercent={rangeMinPercent}
            rangeMaxPercent={rangeMaxPercent}
          />
          <S.PriceRangeWrap>
            <S.MinPrice
              type="range"
              min={fixedMinPrice}
              max={fixedMaxPrice - priceGap}
              step="1000"
              value={rangeMinValue}
              onChange={e => {
                prcieRangeMinValueHandler(e);
              }}
            />
            <S.MaxPrice
              type="range"
              min={fixedMinPrice + priceGap}
              max={fixedMaxPrice}
              step="1000"
              value={rangeMaxValue}
              onChange={e => {
                prcieRangeMaxValueHandler(e);
              }}
            />
          </S.PriceRangeWrap>
        </S.PriceSlide>
        <S.PriceView>
          <S.MinPriceView>
            <h2>최저요금</h2>₩ {Number(rangeMinValue).toLocaleString()}
          </S.MinPriceView>
          -
          <S.MaxPriceView>
            <h2>최고요금</h2>₩ {Number(rangeMaxValue).toLocaleString()}
          </S.MaxPriceView>
        </S.PriceView>
      </S.PriceSlideWrap>
    </S.Wrap>
  );
};

export default PriceRange;
