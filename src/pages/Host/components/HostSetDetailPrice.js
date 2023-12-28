import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Prev } from 'react-bootstrap/esm/PageItem';

const HostSetDetailPrice = ({ setHotelInfo }) => {
  const [detailInfoValue, setDetailInfoValue] = useState(0);
  const onChangeInputValue = ({ target: { value } }, operator) => {
    if (operator === '+') {
      setDetailInfoValue(detailInfoValue + 1000);
    } else if (operator === '-') {
      if (detailInfoValue <= 0) return;
      setDetailInfoValue(detailInfoValue - 1000);
    } else {
      setDetailInfoValue(Number(value));
    }
  };
  const onClickBtn = (e, operator) => {
    onChangeInputValue(e, operator);
  };
  useEffect(() => {
    setHotelInfo(prev => ({ ...prev, price: detailInfoValue }));
  }, [detailInfoValue]);

  return (
    <StyledInputWrap>
      <Button onClick={e => onClickBtn(e, '-')} variant="primary">
        -
      </Button>
      <StyledInput
        value={detailInfoValue >= 0 ? detailInfoValue : 0}
        onChange={onChangeInputValue}
      />
      <Button onClick={e => onClickBtn(e, '+')} variant="primary">
        +
      </Button>
    </StyledInputWrap>
  );
};
export default HostSetDetailPrice;
const StyledInputWrap = styled.div`
  display: flex;
  align-items: center;
  & * {
    margin: 30px 5px;
  }
`;

const StyledInput = styled.input`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  text-align: center;
`;
