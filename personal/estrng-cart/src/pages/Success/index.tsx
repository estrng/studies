import { Image } from "../../components/CheckoutItems/styles"
import { Container, HeaderContainer, OrderContainer, Order, OrderItem, InfoContainer } from "./styles"
import motoka from "../../assets/motoka.svg";
import { FaMapPin, FaStopwatch, FaDollarSign } from "react-icons/fa";
import { useAddressFormContext } from "../../contexts/AddressForm/hooks/useAddressFormContext";


type Props = {}


export function Success({ }: Props) {
  const { getValues } = useAddressFormContext();
  const { street, number, city, uf, payment } = getValues();

  function getPaymentType(payment: { credit: boolean, debit: boolean, money: boolean }) {
    if (payment.credit) {
      return "Cartão de crédito"
    }
    if (payment.debit) {
      return "Cartão de débito"
    }
    if (payment.money) {
      return "Dinheiro"
    }
  }

  return (
    <Container>
      <HeaderContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <h4>Agora é só aguardar que logo o café chegará até você</h4>
      </HeaderContainer>
      <OrderContainer>
        <Order>
          <OrderItem>
            <FaMapPin color="#8047F8" size={22} />
            <InfoContainer>
              <span>Entrega em <b>{street}, {number}</b></span>
              <span>{city} - {uf}, {uf}</span>
            </InfoContainer>
          </OrderItem>
          <OrderItem>
            <FaStopwatch color="#DBAC2C" size={22} />
            <InfoContainer>
              <span>Previsão de entrega</span>
              <b>20 min - 30 min</b>
            </InfoContainer>
          </OrderItem>
          <OrderItem>
            <FaDollarSign color="#C47F17" size={22} />
            <InfoContainer>
              <span>Pagamento na entrega</span>
              <b>{getPaymentType(payment)}</b>
            </InfoContainer>
          </OrderItem>
        </Order>
        <Image style={{ width: "100%", height: "100%", }} src={motoka} />
      </OrderContainer>
    </Container>
  )
}
