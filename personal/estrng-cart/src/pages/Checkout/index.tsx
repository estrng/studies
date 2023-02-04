import { CheckoutItems } from '../../components/CheckoutItems';
import { CartConsumer } from '../../contexts/Cart/CartConsumer';
import { CartContextProps } from '../../contexts/Cart/hooks/useCartContext';
import { AddressForm } from './AddressForm';

import { Container, FormContainer } from './styles';

export function Checkout() {
  return (<div>
    <CartConsumer>
      {(cart: CartContextProps) => {
        const { items } = cart.cartState
        return <Container>
          <div>
            <h4>Complete seu pedido</h4>
            <FormContainer>
              <AddressForm />
            </FormContainer>
          </div>
          <div>
            <h4>Cafés selecionados</h4>
            <CheckoutItems items={items} />
          </div>
        </Container>
      }}
    </CartConsumer>
  </div>);
}
