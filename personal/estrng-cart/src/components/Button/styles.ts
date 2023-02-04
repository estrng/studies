import styled from 'styled-components';
import { FaShoppingCart } from "react-icons/fa";

export const Container = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  border: none;
  cursor: pointer;
  border-radius: 6px;

  width: 38px;
  height: 38px;


  background: #F1E9C9;


  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Icon = styled(FaShoppingCart).attrs({
  size: 22,
  color: '#C47F17'
})``;

export const Badge = styled.span`
  top: -10px;
  right: -10px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  width: 20px;
  height: 20px;
  background: #C47F17;
  border-radius: 50px;
  color: #fff;
`;