import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 16px;
  gap: 16px;
  background: #F2F2F2;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 16px;
  gap: 16px;
  background: #F2F2F2;
`
export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 16px;
  gap: 16px;
  background: #F2F2F2;
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 16px;
  gap: 16px;
  
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient( #FFB800, #8047F8) 1 ;
  border-radius: 8px;
`;

export const OrderItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 16px;
  gap: 16px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: #574F4D;
  }
`;