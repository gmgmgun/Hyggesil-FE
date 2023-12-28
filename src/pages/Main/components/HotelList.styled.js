import styled from 'styled-components';

export const FilterWrap = styled.div`
  display: flex;
  /* margin: auto; */
  width: 100%;
  height: 80px;
  /* top: 80px; */
  /* padding :  */
  z-index: 4;
  /* border-radius: 40px; */
  /* border: solid 2px black; */
  justify-content: center;
  background-color: white;
`;

export const HotelContainer = styled.div`
  display: grid;
  position: relative;
  margin: 20px auto;
  width: 70%;
  grid-template-columns: auto auto auto auto;
  /* border: solid 1px black; */
  column-gap: 20px;
`;

export const FilterDiv = styled.div`
  display: flex;
  /* width: 120px; */

  button {
    margin-right: 20px;
    margin-left: 20px;
    height: 70px;
    background-color: white;
    font-size: 20px;
    border: none;
    color: #b0b0b0;
    border-bottom: solid 3px #b0b0b0;

    &:hover {
      color: black;
      font-weight: bold;
      border-bottom: solid 3px black;
    }
  }

  .active {
    color: black;
    border-bottom: solid 3px black;
    font-weight: bold;
  }
`;

export const Icon = styled.div`
  font-size: 50px;
  text-align: center;
`;
export const FilterBtn = styled.button`
  width: 300px;
  height: 40px;
  /* border: solid 1px black; */
  border-radius: 20px;
  position: absolute;
  /* border: solid 1px rgb(221, 221, 221); */
  margin-left: 30px;
  box-shadow: 1px 3px 2px 1px gray;
  top: 15px;
  /* border-radius: 10px; */
  font-size: 13px;
  color: gray;
  background-color: white;
  cursor: pointer;
`;

export const Anim = styled.button`
  background-size: 400% 400%;
  animation: gradient1 5s ease infinite;

  @keyframes gradient1 {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes gradient2 {
    0% {
      background-position: 100% 50%;
    }
    50% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  @keyframes ring {
    0% {
      width: 30px;
      height: 30px;
      opacity: 1;
    }
    100% {
      width: 300px;
      height: 300px;
      opacity: 0;
    }
  }
`;

export const Footer = styled.div`
  /* width: ; */
  text-align: center;
  /* margin: auto; */
  /* border: solid 1px black; */
`;

export const PageBtn = styled.button`
  background-color: ${props => (props.selected ? 'black' : 'white')};
  color: ${props => (props.selected ? 'white' : 'black')};
  border: solid 1px #b0b0b0;
  padding: 10px;
  width: 50px;
  height: 35px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
`;
