import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

export const Wrap = styled.div`
  width: 100%;
  height: 300px;
  border-bottom: 1px solid rgb(235, 235, 235);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ConvinientsTitle = styled.div`
  width: 100%;
  font-weight: 500;
  margin: 30px 0;
  font-size: 22px;
`;

export const ConvinientsContents = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 10px 30px 0 40px;
  display: flex;
  align-items: space-between;
`;

export const OptionList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 80%;
`;

export const StyledCheckbox = styled(Form.Check)`
  .form-check-input:checked {
    background-color: black;
    border-color: black;
  }
  .form-check-label {
    color: black;
  }
`;
