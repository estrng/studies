import { FaMapPin, FaDollarSign } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;

`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const Up = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const Text = styled.div``;

export const MapIcon = styled(FaMapPin).attrs({
  size: '22px',
  color: '#C47F17',
})`
  margin-right: 16px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 560px;
  height: 216px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const Dollar = styled(FaDollarSign).attrs({
  size: '22px',
  color: '#8047F8',
})`
  margin-right: 16px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 16px;
  margin: 16px;
  padding: 4px;
`;

export const Fileds = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin: 16px;
  gap: 16px;
`;

export const Cep = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  width: 200px;
  height: 42px;

  /* Base/Input */

  background: #EEEDED;
  /* Base/Button */

  border: 1px solid #E6E5E5;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  flex-grow: 0;
`;

export const Street = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  width: 560px;
  height: 42px;

  /* Base/Input */

  background: #EEEDED;
  /* Base/Button */

  border: 1px solid #E6E5E5;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;

export const Number = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  width: 200px;
  height: 42px;

  /* Base/Input */

  background: #EEEDED;
  /* Base/Button */

  border: 1px solid #E6E5E5;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  flex-grow: 0;
`;

export const NumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  height: 100%;
  gap: 12px;

`;

export const Complement = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  width: 348px;
  height: 42px;

  /* Base/Input */

  background: #EEEDED;
  /* Base/Button */

  border: 1px solid #E6E5E5;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  flex-grow: 1;
`;

export const City = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  width: 200px;
  height: 42px;

  /* Base/Input */

  background: #EEEDED;
  /* Base/Button */

  border: 1px solid #E6E5E5;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  flex-grow: 0;
`;

export const State = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  width: 276px;
  height: 42px;

  /* Base/Input */

  background: #EEEDED;
  /* Base/Button */

  border: 1px solid #E6E5E5;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  flex-grow: 1;
`;

export const StateSign = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  width: 60px;
  height: 42px;

  /* Base/Input */

  background: #EEEDED;
  /* Base/Button */

  border: 1px solid #E6E5E5;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  flex-grow: 0;
`;

export const CityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  height: 100%;
  gap: 12px;
`;

export const SelectButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: baseline;
  padding: 14px;
  gap: 8px;
  width: 100%;
  height: 51px;
  background: #E6E5E5;
  border-radius: 6px;
  border: 1px solid #E6E5E5;
  cursor: pointer;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  text-transform: uppercase;
  color: #574F4D;
  transform: background-color 0.2s ease-in-out;

  &:hover {
    background: #E6E5E5;
    border: 1px solid #E6E5E5;
  }
`;