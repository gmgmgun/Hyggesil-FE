import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginModal = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
export const LoginBox = styled.div`
  z-index: 10;
  width: 500px;
  height: auto;
  border-radius: 20px;
  border: solid 1px rgb(221, 221, 221);
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  form [type='submit']:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const LoginTitle = styled.div`
  border-bottom: solid 1px rgb(221, 221, 221);
  height: 80px;
  width: 100%;
  font-weight: bold;
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Greet = styled.div`
  font-weight: bold;
  text-align: left;
  width: 90%;
  margin-top: 10px;
  height: 30px;
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  input:focus {
    outline: 3px solid #e9224f;
  }
`;

export const Input = styled.input`
  width: 90%;
  height: 60px;
  margin-top: 10px;
  border: solid 1px rgb(221, 221, 221);
  padding: 10px;
  border-radius: 10px;
`;

export const CheckPw = styled.h2`
  margin-top: 20px;
`;

export const NextBtn = styled.button`
  width: 90%;
  height: 60px;
  margin: 10px auto 10px auto;
  background-color: #e9224f;
  color: white;
  border-radius: 10px;
  font-size: 17px;
  border: none;
  cursor: pointer;
`;
export const UrlLink = styled(Link)`
  margin: 30px auto 10px auto;
  color: rgb(140, 140, 140);
  text-decoration: none;

  span {
    color: #e9224f;
    font-weight: bold;
  }
`;
export const OrLine = styled.div`
  display: flex;
  width: 90%;
  margin: 30px auto 10px auto;
  align-items: center;
  -webkit-box-align: center;
`;

export const OrLineText = styled.div`
  width: 80px;
  color: rgb(140, 140, 140);
`;

export const Before = styled.div`
  width: 100%;
  height: 1px;
  display: block;
  margin-right: 15px;
  background-color: rgb(221, 221, 221);
`;

export const After = styled.div`
  width: 100%;
  height: 1px;
  display: block;
  margin-left: 15px;
  background-color: rgb(221, 221, 221);
`;
