import styled from 'styled-components';
import kakaoLogin from '../images/kakaologin1.png';

export const KaKaoButton = styled.button`
  width: 90%;
  height: 60px;
  border-radius: 10px;
  background-image: url(${kakaoLogin});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 30px auto 50px auto;
  border: none;
`;
