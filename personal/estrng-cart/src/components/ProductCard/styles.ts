import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 40px;
  background: #F3F2F2;
  border-radius: 10px;
`;

export const Ilustration = styled.img`
  object-fit: cover;
  width: 16rem;
  height: 100%;
  border-radius: 10px;

`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  margin: 4px;

  width: auto;
  height: auto;

  background: #F1E9C9;
  border-radius: 100px;

  flex: none;
  order: 0;
  flex-grow: 0;

  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;
  text-transform: uppercase;
  color: #C47F17;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
  padding: 20px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  color: #403937;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  text-align: center;
  color: #8D8686;
`;

export const Price = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  text-align: right;
  color: #574F4D;
  flex: none;
  order: 0;
  flex-grow: 0;
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

export const Add = styled.div``;

export const BuyInContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: auto;
`;