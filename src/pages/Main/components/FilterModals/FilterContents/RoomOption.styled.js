import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 300px;
  border-bottom: 1px solid rgb(235, 235, 235);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 95%;
  margin: 10px;
`;
export const Optiondiv = styled.div`
  display: flex;

  justify-content: space-between;
  margin: 5px 0;
`;

export const Button = styled.button`
  background-color: ${props => (props.selected ? 'black' : 'white')};
  color: ${props => (props.selected ? 'white' : 'black')};
  border: solid 1px #b0b0b0;
  padding: 10px;
  width: 50px;
  height: 35px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;

  &:first-child {
    width: 100px;
  }
`;
