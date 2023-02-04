import styled from 'styled-components';
import { MdLocationOn } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 143px;
  height: 38px;

  background: #EBE5F9;
  border-radius: 6px;
  color: #4B2995;;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Icon = styled(MdLocationOn).attrs({
  size: '22px',
})`
  color: #4B2995;
`;