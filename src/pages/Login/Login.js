import React from 'react';
import { useLocation } from 'react-router-dom';
import User from './components/User';

const Login = () => {
  const location = useLocation();
  const currentURL = location.pathname;
  const isSelectLogin = currentURL === '/login';
  return (
    <div>
      <User content={isSelectLogin ? LOGIN_DATA : SIGNUP_DATA} />
    </div>
  );
};

const LOGIN_DATA = {
  title: '로그인',
  url: '/signup',
  text: '계정이 없으신가요?',
  text2: '회원가입하기',
};

const SIGNUP_DATA = {
  title: '회원가입',
  url: '/login',
  text: '이미 가입하셨나요?',
  text2: '로그인하기',
};

export default Login;
