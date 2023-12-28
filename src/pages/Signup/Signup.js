import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import KakaoModal from '../Login/KakaoModal';

const Signup = ({ content }) => {
  const { title, text, url } = content;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    password: '',
    phoneNumber: '',
  });

  const isValid =
    formData.name.length > 0 &&
    formData.id.includes('@') &&
    formData.password.length >= 5;
  const onChangeFormData = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
  const goToMain = () => {
    if (!isValid) return alert('다시확인해보삼');
    navigate('/');
  };

  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={goToMain}>
        {SIGNINUP_INFO_DATA.map(info => {
          const { id, name, type, placeholder } = info;
          return (
            <input
              key={id}
              onChange={onChangeFormData}
              name={name}
              type={type}
              placeholder={placeholder}
            />
          );
        })}
        <button type="submit" disabled={!isValid}>
          누르삼
        </button>
      </form>
      <Link to={url}>{text}</Link>
      <br />
      <KakaoModal />
    </>
  );
};

export default Signup;

const SIGNINUP_INFO_DATA = [
  {
    id: 0,
    name: '이름',
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
    placeholder: '비번',
  },
  {
    id: 3,
    name: 'password',
    type: 'password',
    placeholder: '비번',
  },
];
