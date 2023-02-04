import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  width: 100%;
  height: 100%;
  gap: 16px;
  padding: 80px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 640px;
  height: auto;
  left: 160px;
  top: 182px;
`;