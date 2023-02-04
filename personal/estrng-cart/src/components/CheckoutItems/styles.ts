import styled from 'styled-components';
import { FaTrash } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 8px;
  width: 448px;
  height: 498px;
  left: 832px;
  top: 182px;
  border-radius: 6px 44px;
  border: 1px solid #E6E6E6;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 20%;
  gap: 16px;
  border-bottom: 1px solid #ccc;

`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 16px;

`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
  margin-right: 16px;

  header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }


`;

export const Title = styled.h4``;

export const Price = styled.b``;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  width: 72px;
  height: 38px;
  background: #E6E5E5;
  border-radius: 6px;
  flex: none;
  order: 0;
  flex-grow: 0;
  
  span {
    background: #E6E5E5;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    text-align: center;
    color: #272221;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  button {
    background: #E6E5E5;
    border: none;
    border-radius: 6px;
    width: 38px;
    height: 38px;
    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: pointer;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    text-align: center;
    color: #4B2995;
  }
`;

export const RemoveButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    gap: 4px;
    width: 91px;
    height: 38px;
    cursor: pointer;
    border: none;
    background: #E6E5E5;
    border-radius: 6px;
    flex: none;
    flex-grow: 0;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    text-align: center;
    color: #4B2995;
`;

export const ConfirmButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 8px;
  gap: 4px;
  width: 368px;
  height: 46px;
  background: #DBAC2C;
  border-radius: 6px;
  border: none;
  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  text-transform: uppercase;
  color: #FFFFFF;
  font-stretch: 100;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #E6E5E5;
    color: #4B2995;
  }
`;

export const Trash = styled(FaTrash).attrs({
  size: '16px',
  color: '#4B2995'
})``;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 20%;
  gap: 16px;
`;