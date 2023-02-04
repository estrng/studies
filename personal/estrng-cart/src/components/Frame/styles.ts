import styled from 'styled-components';

type Props = {
  last: boolean;
};

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 91%;
  height: 91%;
  
  h4 {
    font-style: normal;
    font-weight: ${props => props.last ? 'bold' : '400'};
    font-size: 14px;
    line-height: 130%;
    color: #574F4D;
  }
  
  span {
    font-style: normal;
    font-weight: ${props => props.last ? 'bold' : '400'};
    font-size: 14px;
    line-height: 130%;
    color: #574F4D;
  }


`;
