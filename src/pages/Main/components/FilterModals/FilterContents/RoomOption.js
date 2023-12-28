import React, { useState } from 'react';
import * as S from './RoomOption.styled';

const RoomOption = ({ setSelectedRoomOption, onRoomOptionClick }) => {
  const [selected, setSelected] = useState({});

  const handleClick = (roomId, num) => {
    setSelected(prevSelected => ({
      ...prevSelected,
      [roomId]: num === prevSelected[roomId] ? null : num,
    }));
    onRoomOptionClick(roomId, num);
  };
  setSelectedRoomOption(selected);
  return (
    <S.Wrap>
      {ROOM_OPTION.map(option => (
        <S.Container key={option.id}>
          <S.Optiondiv>{option.title}</S.Optiondiv>
          <S.Optiondiv>
            {option.EA.map(num => {
              const key = `${option.id}-${num}`;
              return (
                <S.Button
                  key={key}
                  onClick={() => handleClick(option.id, num)}
                  selected={selected[option.id] === num}
                >
                  {num}
                </S.Button>
              );
            })}
          </S.Optiondiv>
        </S.Container>
      ))}
    </S.Wrap>
  );
};
export default RoomOption;

const ROOM_OPTION = [
  {
    id: 'bedrooms',
    title: '침실',
    EA: ['상관없음', 1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 'beds',
    title: '침대',
    EA: ['상관없음', 1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 'bathrooms',
    title: '욕실',
    EA: ['상관없음', 1, 2, 3, 4, 5, 6, 7, 8],
  },
];
