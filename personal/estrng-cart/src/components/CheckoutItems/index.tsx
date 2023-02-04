import { useNavigate } from 'react-router-dom';
import { SelectedItem } from '../../@types/Operation';
import { useCartContext } from '../../contexts/Cart/hooks/useCartContext';
import { formatPrice } from '../../helpers';
import { Frame } from '../Frame';
import {
  Container,
  ItemContainer,
  Image,
  LeftContent,
  RightContent,
  Title,
  Price,
  Quantity,
  RemoveButton,
  Actions,
  Trash,
  Total,
  ConfirmButton
} from './styles';

interface CheckoutItemProps {
  items: SelectedItem[];
}

export function CheckoutItems({ items }: CheckoutItemProps) {
  const { updateCartAction, removeFromCartAction, clearCartAction } = useCartContext();
  const deliveryCost = 6.99;
  const navigate = useNavigate();

  function handleQuantityChange(item: SelectedItem, quantity: number) {
    if (quantity < 1) {
      item.quantity = 1;
      handleItemUpdate(item);
    } else {
      item.quantity = quantity;
      handleItemUpdate(item);
    }
  }

  function handleItemUpdate(item: SelectedItem) {
    updateCartAction(item);
  }

  const totalPrices = items.map(({ quantity, coffee }) => {
    return quantity * coffee.price
  })

  const total = totalPrices.reduce((acc, curr) => acc + curr, 0)

  const goToSuccess = () => {
    navigate('/success')
    clearCartAction()
  }

  return <Container>
    {
      items.map(({ operation_id, quantity, coffee }: SelectedItem) => (
        <ItemContainer key={operation_id}>
          <LeftContent>
            <Image src={coffee.ilustration} />
          </LeftContent>
          <RightContent>
            <header>
              <Title>{coffee.name}</Title>
              <Price>{formatPrice(coffee.price)}</Price>
            </header>
            <Actions>
              <Quantity>
                <button onClick={() => handleQuantityChange({ operation_id, quantity, coffee }, quantity - 1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange({ operation_id, quantity, coffee }, quantity + 1)}>+</button>
              </Quantity>
              <RemoveButton onClick={() => removeFromCartAction(operation_id)} >
                <Trash />
                REMOVER
              </RemoveButton>
            </Actions>
          </RightContent>
        </ItemContainer>
      ))
    }
    <Total>
      <Frame title='Total de itens' value={total} />
      <Frame title='Entrega' value={deliveryCost} />
      <Frame title='Total' value={total + deliveryCost} last />
    </Total>
    <ConfirmButton onClick={goToSuccess}>
      CONFIRMAR PEDIDO
    </ConfirmButton>
  </Container>;
}
