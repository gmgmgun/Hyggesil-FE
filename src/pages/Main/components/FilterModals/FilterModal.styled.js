import styled from 'styled-components';

export const FilterWrap = styled.div`
  width: 700px;
  border-radius: 20px;
  height: 800px;
  position: relative;
  background-color: white;
  display: flex;
  padding: 0 20px 20px 20px;
  flex-direction: column;
  align-items: center;
`;
export const FilterBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  z-index: 5;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const FilterClose = styled.button`
  position: absolute;
  top: 30%;
  left: 17px;
`;
export const FilterHeader = styled.div`
  height: 65px;
  width: 700px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(235, 235, 235);
`;
export const FilterBody = styled.div`
  overflow: auto;
  width: 100%;
  margin-top: 65px;
`;
export const FilterContents = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const FilterEnd = styled.div`
  height: 65px;
  width: 700px;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 20px 30px 0px 30px;
  border-top: 1px solid rgb(235, 235, 235);
`;
