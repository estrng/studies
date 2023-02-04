import { Container, LeftContent, RightContent, TextContent, IconsContainer, IconsContent } from './styles';
import logo from "../../assets/logo.svg";
import bigCup from "../../assets/bigCup.png";
import { Sub } from './Sub';

export function Hero() {
  return <Container>
    <LeftContent>
      <TextContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>
      </TextContent>
      <IconsContainer>
        <IconsContent>
          <Sub text="Compra simples e segura" />
          <Sub text="Entrega rápida e rastreada" />
        </IconsContent>
        <IconsContent>
          <Sub text='Embalagem mantém o café intacto' />
          <Sub text='O café chega fresquinho até você' />
        </IconsContent>
      </IconsContainer>
    </LeftContent>
    <RightContent>
      <img src={bigCup} alt="" />
    </RightContent>
  </Container>;
}

export default Hero;