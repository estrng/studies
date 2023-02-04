import { Container, Icon, Badge } from "./styles";
import { ButtonHTMLAttributes } from "react";
import { useCartContext } from "../../contexts/Cart/hooks/useCartContext";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  title?: string;
  hasBadge?: boolean;
}

export function Button({ title, children, hasBadge = false, ...rest }: ButtonProps) {
  const { cartState } = useCartContext();

  const hasItems = Object.keys(cartState).length > 0;

  return (
    <Container {...rest}>
      {hasBadge && hasItems && <Badge>{cartState.items.length}</Badge>}
      <Icon />
      {title ? title : children}
    </Container>
  )
}
