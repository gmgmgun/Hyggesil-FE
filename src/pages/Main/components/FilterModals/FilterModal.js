import React, { useState } from 'react';
import PriceRange from './FilterContents/PriceRange';
import Convenients from './FilterContents/Convenients';
import * as S from './FilterModal.styled';
import CloseButton from 'react-bootstrap/CloseButton';
import RoomOption from './FilterContents/RoomOption';
import Button from 'react-bootstrap/Button';

const FilterModal = ({
  searchParams,
  setSearchParams,
  setIsFilterModalOpen,
  setSelectedFilters,
}) => {
  const fixedMaxPrice = 1000000;
  const fixedMinPrice = 0;
  const [rangeMinValue, setRangeMinValue] = useState(fixedMinPrice);
  const [rangeMaxValue, setRangeMaxValue] = useState(fixedMaxPrice);
  const [selectedConvenients, setSelectedConvenients] = useState([]);
  const [selectedRoomOption, setSelectedRoomOption] = useState({});

  console.log('최저가격', rangeMinValue);
  console.log('최고가격:', rangeMaxValue);
  console.log('편의시설', selectedConvenients);
  console.log('룸옵션', selectedRoomOption);

  const handleRangeChange = (min, max) => {
    setRangeMinValue(min);
    setRangeMaxValue(max);
    searchParams.set('price_max', max);
    searchParams.set('price_min', min);
  };

  const handleCloseModal = () => {
    setIsFilterModalOpen(false);
  };

  const handleConvenient = data => {
    searchParams.delete('convenients');
    data.forEach(list => {
      searchParams.append('convenients', list);
    });
  };

  const handleRoomOptionClick = (id, value) => {
    setSelectedRoomOption({
      ...selectedRoomOption,
      [id]: value,
    });
    if (id === 'beds') {
      searchParams.set('beds', value);
    } else if (id === 'bedrooms') {
      searchParams.set('bedrooms', value);
    } else if (id === 'bathrooms') {
      searchParams.set('bathrooms', value);
    }
  };

  const handleApplyFilters = () => {
    setSelectedFilters({
      price_min: rangeMinValue,
      price_max: rangeMaxValue,
      bedrooms: selectedRoomOption.bedrooms,
      beds: selectedRoomOption.beds,
      bathrooms: selectedRoomOption.bathrooms,
      area_id: selectedRoomOption.area_id,
      convenients: selectedConvenients,
    });
    setIsFilterModalOpen(false);
    setSearchParams(searchParams);
  };
  return (
    <S.FilterBackground>
      <S.FilterWrap>
        <S.FilterHeader>
          <S.FilterClose>
            <CloseButton onClick={handleCloseModal} />
          </S.FilterClose>
          필터{' '}
        </S.FilterHeader>
        <S.FilterBody>
          <S.FilterContents>
            <PriceRange
              rangeMinValue={rangeMinValue}
              rangeMaxValue={rangeMaxValue}
              fixedMaxPrice={fixedMaxPrice}
              fixedMinPrice={fixedMinPrice}
              onRangeChange={handleRangeChange}
            />
            <Convenients
              setSelectedConvenients={setSelectedConvenients}
              handleConvenient={handleConvenient}
            />
            <RoomOption
              setSelectedRoomOption={setSelectedRoomOption}
              onRoomOptionClick={handleRoomOptionClick}
            />
          </S.FilterContents>
        </S.FilterBody>
        <S.FilterEnd>
          <Button variant="dark" onClick={handleApplyFilters}>
            필터적용
          </Button>
        </S.FilterEnd>
      </S.FilterWrap>
    </S.FilterBackground>
  );
};
export default FilterModal;
