import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// const restApiKey = process.env.REST_API_KEY;
// const redirectUri = process.env.REDIRECT_URI;

const KakaoLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const AUTHORIZE_CODE = location.search.split('=')[1];

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${AUTHORIZE_CODE}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          postToken(data.access_token);
        } else {
          navigate('/');
        }
      });
  };

  const postToken = token => {
    fetch(`http://hyggesil.com/users/login/kakao`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
          navigate('/');
        } else {
          alert('다시 로그인 해주세요!');
          navigate('/login');
        }
      });
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, [location.search]);

  return <div>KakaoLogin !!!!!!</div>;
};

export default KakaoLogin;
