import styled from "styled-components";

export const Nav = styled.nav`
  background: ${(props) => props.theme.colors.background};
  height: 104px;
  width: auto;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90%;
  z-index: 1;
  width: 100%;
  padding: 24px 32px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 193px;
  height: 38px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;