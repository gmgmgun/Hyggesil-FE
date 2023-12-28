import React from 'react';
import * as S from './RecentlyViewd.styled';

const RecentlyViewd = () => {
  const recentItems = JSON.parse(localStorage.getItem('recentItems')) || [];

  return (
    <S.Wrap>
      <S.Header>최근 본 상품</S.Header>
      {recentItems.map(item => (
        <S.RecentItems>
          <S.Img>
            <img src={item.images[0]} />
          </S.Img>
          <S.Name>{item.name}</S.Name>
        </S.RecentItems>
      ))}
    </S.Wrap>
  );
};

export default RecentlyViewd;
