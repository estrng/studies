import { Tags } from "../@types/Tags";
import { Coffee } from "../@types/Coffee";

export const Cafes = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
    ilustration: 'https://picsum.photos/200/300',
    tag: [Tags.TRAD, Tags.ALCOH],

  }, {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
    ilustration: 'https://picsum.photos/200/300',
    tag: [Tags.TRAD, Tags.ALCOH],
  }, {
    id: 3,
    name: 'Expresso Cappuccino',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
    ilustration: 'https://picsum.photos/200/300',
    tag: [Tags.TRAD, Tags.ALCOH],
  }, {
    id: 4,
    name: 'Expresso Cappuccino',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
    ilustration: 'https://picsum.photos/200/300',
    tag: [Tags.TRAD, Tags.ALCOH],
  }
] as Coffee[]