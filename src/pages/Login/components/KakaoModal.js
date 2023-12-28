import React from 'react';
import * as S from './KakaoModal.styled';

const KakaoModal = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return <S.KaKaoButton onClick={handleLogin} />;
};

export default KakaoModal;
