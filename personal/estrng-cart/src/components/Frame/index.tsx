import { formatPrice } from "../../helpers";
import { Container } from "./styles"

type Props = {
  title: string
  value: number;
  last?: boolean;
}

export function Frame({ title, value, last = false }: Props) {
  return (
    <Container last={last}>
      <h4>{title}</h4>
      <span>{formatPrice(value)}</span>
    </Container>
  )
}
