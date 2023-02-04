import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 160px;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 98%;

  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: #272221;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }

  h4{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: #403937;
    font-stretch: 100;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    padding-top: 20px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-top: 66px;
`;

export const IconsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
`
