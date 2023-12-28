import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const HostSetDetailInput = ({ setHotelInfo, unit }) => {
  const [detailInfo, setDetailInfo] = useState({ [unit]: 0 });
  const [detailInfoValue, setDetailInfoValue] = useState(0);

  const onChangeInputValue = ({ target: { value } }, operator) => {
    if (operator === '+') {
      setDetailInfoValue(detailInfoValue + 1);
    } else if (operator === '-') {
      if (detailInfoValue <= 0) return;
      setDetailInfoValue(detailInfoValue - 1);
    } else {
      setDetailInfoValue(Number(value));
    }
  };

  const onClickBtn = (e, operator) => {
    onChangeInputValue(e, operator);
  };

  useEffect(() => {
    setDetailInfo({ ...detailInfo, [unit]: detailInfoValue });
  }, [detailInfoValue]);

  useEffect(() => {
    setHotelInfo(prev => ({ ...prev, ...detailInfo }));
  }, [detailInfo]);

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
export default HostSetDetailInput;

const StyledInputWrap = styled.div`
  display: flex;
  align-items: center;
  & * {
    margin: 30px 5px;
  }
`;

const StyledInput = styled.input`
  width: 40px;
  height: 40px;
  border-radius: 20%;
  text-align: center;
`;
