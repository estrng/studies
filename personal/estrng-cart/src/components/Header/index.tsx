import { Actions, Nav, NavContainer } from "./styles";
import estrngLogo from "../../assets/logo.svg";
import { Button } from "../Button";
import { Logo } from "../Logo";
import { Location } from "../Location";
import { Link } from "react-router-dom";

export function Header() {

  function handleGoToCheckoutame() {

  }

  return (
    <>
      <Nav>
        <NavContainer>
          <Link to="/">
            <Logo src={estrngLogo} />
          </Link>
          <Actions>
            <Location city="São Paulo" />
            <Link to='/checkout'>
              <Button hasBadge={true} />
            </Link>
          </Actions>
        </NavContainer>
      </Nav>
    </>
  );
};

// TODO: get geo location and show city name in header