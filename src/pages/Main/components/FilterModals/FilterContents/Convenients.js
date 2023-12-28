import React, { useState } from 'react';
import * as S from './Convenients.styled';
import Form from 'react-bootstrap/Form';

const Convenients = ({ setSelectedConvenients, handleConvenient }) => {
  const [selected, setSelected] = useState([]);

  const handleChange = (option, isChecked) => {
    const updatedSelected = isChecked
      ? [...selected, option]
      : selected.filter(item => item.id !== option.id);

    setSelected(updatedSelected);
    setSelectedConvenients(updatedSelected.map(item => item.id));
    handleConvenient(updatedSelected.map(item => item.id));
  };
  return (
    <S.Wrap>
      <S.ConvinientsTitle>편의시설</S.ConvinientsTitle>
      <S.ConvinientsContents>
        <S.OptionList>
          {CONVENIENTS_OPTION.map(option => (
            <S.StyledCheckbox key={option.id}>
              <Form.Check
                type="switch"
                label={option.name}
                onChange={e => handleChange(option, e.target.checked)}
              />
            </S.StyledCheckbox>
          ))}
        </S.OptionList>
      </S.ConvinientsContents>
    </S.Wrap>
  );
};

export default Convenients;

const CONVENIENTS_OPTION = [
  { id: 1, name: '주방' },
  { id: 2, name: '무선 인터넷' },
  { id: 3, name: '업무 전용 공간' },
  { id: 4, name: '건물 내 무료 주차' },
  { id: 5, name: 'TV' },
];
