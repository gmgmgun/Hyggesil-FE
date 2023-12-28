import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStyle from '../../../styles/GlobalStyle';
import KakaoModal from './KakaoModal';
import * as S from './User.styled';

const User = ({ content: { title, text, url, text2 } }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    name: '',
    number: '',
    checkpassword: '',
  });

  // 유효성 검사 정규식
  const emailRegex = new RegExp(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
  );
  const passwordRegex = new RegExp(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/
  );

  // 로그인 회원가입 폼 구분
  const isLogin = title === '로그인';

  // 입력된 데이터 유효성 검사
  const isValid = isLogin
    ? emailRegex.test(formData.id) && formData.password.length >= 5
    : formData.name.length > 0 &&
      emailRegex.test(formData.id) &&
      formData.number.length > 0 &&
      passwordRegex.test(formData.password);

  // 입력되는 데이터 변경시
  const onChangeFormData = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //로그인 회원가입하기로 이동하기 클릭시
  const handleUrlClick = () => {
    setFormData({
      id: '',
      password: '',
      name: '',
      number: '',
      checkpassword: '',
    });
    navigate('/login');
    alert('입력하신 정보가 초기화되었습니다.');
  };

  // 폼 제출
  const onSubmit = e => {
    e.preventDefault();
    // 로그인 API 호출
    if (isLogin) {
      fetch('http://hyggesil.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          email: formData.id,
          password: formData.password,
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.accessToken) {
            localStorage.setItem('token', data.accessToken);
            navigate('/');
          } else {
            alert('다시 로그인 해주세요.');
            navigate('/login');
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      // 회원가입 API 호출
      if (formData.password !== formData.checkpassword) {
        alert('비밀번호와 확인비밀번호가 일치하지 않습니다.');
        return;
      }
      fetch('http://10.58.52.82:3000/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          email: formData.id,
          name: formData.name,
          password: formData.password,
          phoneNumber: formData.number,
        }),
      })
        .then(response => response.json())
        .then(data => {
          alert('회원가입이 성공적으로 완료되었습니다.');
          navigate('/login');
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  return (
    <S.LoginModal>
      <GlobalStyle />
      <S.LoginBox>
        <S.LoginTitle>{title}</S.LoginTitle>
        <S.Greet>휘게실에 오신 것을 환영합니다.</S.Greet>
        <S.Form onSubmit={onSubmit}>
          {(title === '로그인' ? LOGIN_INFO_DATA : SIGNUP_INFO_DATA).map(
            ({ id, name, type, placeholder }) => {
              return (
                <S.Input
                  key={id}
                  onChange={onChangeFormData}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  value={formData[name]}
                />
              );
            }
          )}
          <S.NextBtn type="submit" disabled={!isValid}>
            {title}
          </S.NextBtn>
        </S.Form>
        <S.UrlLink to={url} onClick={handleUrlClick}>
          {text} <span>{text2} </span>
        </S.UrlLink>
        <S.OrLine>
          <S.Before />
          <S.OrLineText>또는</S.OrLineText>
          <S.After />
        </S.OrLine>
        <KakaoModal />
      </S.LoginBox>
    </S.LoginModal>
  );
};

export default User;

const LOGIN_INFO_DATA = [
  {
    id: 0,
    name: 'id',
    type: 'email',
    placeholder: '이메일',
  },
  {
    id: 1,
    name: 'password',
    type: 'password',
    placeholder: '비밀번호',
  },
];

const SIGNUP_INFO_DATA = [
  {
    id: 0,
    name: 'name',
    type: 'text',
    placeholder: '이름',
  },
  {
    id: 1,
    name: 'id',
    type: 'email',
    placeholder: '이메일',
  },
  {
    id: 2,
    name: 'password',
    type: 'password',
    placeholder: '비밀번호',
  },
  {
    id: 3,
    name: 'checkpassword',
    type: 'password',
    placeholder: '비밀번호를 한번 더 입력해주세요.',
  },
  {
    id: 4,
    name: 'number',
    type: 'text',
    placeholder: '전화번호',
  },
];
