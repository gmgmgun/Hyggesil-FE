import styled from 'styled-components';

export const Wrap = styled.div`
  position: fixed;
  top: 100px;
  right: 20px;
  /* border: solid 1px black; */
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(221, 221, 221);
`;

export const Header = styled.div`
  /* border: solid 1px black; */
  height: 40px;
  width: 220px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RecentItems = styled.div`
  width: 220px;
  /* height: 170px; */
  margin: auto;
  display: flex;
  background-color: #f8f9fa;
  flex-direction: column;
  align-items: center;
  /* border: solid 1px black; */
`;

export const Name = styled.div``;

export const Img = styled.div`
  width: 150px;

  img {
    margin: 10px auto 10px auto;
    width: 150px;
    height: 120px;
  }
`;
