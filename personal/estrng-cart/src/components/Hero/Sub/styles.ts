import styled from 'styled-components';
import { FaShoppingCart } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;  
`;

export const CircleContainer = styled.div`
  background: lightblue;
  border-radius: 50%;
  width: 60px;
  height: 30px;

  svg {
    width: 50%;
    height: 50%;
  }
`

export const Icon = styled(FaShoppingCart)``;