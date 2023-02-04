import { CircleContainer, Container, Icon } from './styles';

interface SubProps {
  text: string;
}

export function Sub({ text }: SubProps) {
  return <Container>
    <CircleContainer>
      <Icon />
    </CircleContainer>
    <p>{text}</p>
  </Container>;
}
