import { useState } from "react";
import { FaCreditCard, FaPiggyBank, FaMoneyCheck } from "react-icons/fa";
import { useAddressFormContext } from "../../../contexts/AddressForm/hooks/useAddressFormContext"
import ViaCep from "../../../services/apis/ViaCep";
import {
  Container,
  MapIcon,
  Text,
  Header,
  Footer,
  Dollar,
  Actions,
  Fileds,
  Up,
  Cep,
  Street,
  Number,
  Complement,
  City,
  State,
  StateSign,
  NumberContainer,
  CityContainer,
  SelectButton
} from "./styles"


type Props = {}

export function AddressForm({ }: Props) {
  const [selected, setSelected] = useState({
    credit: false,
    debit: false,
    money: false
  })
  const { getValues, register, handleSubmit, watch, setValue } = useAddressFormContext();

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const onSelect = (paymentType: string) => {
    const seletedObject = {
      credit: paymentType === "credit",
      debit: paymentType === "debit",
      money: paymentType === "money",
    }
    setSelected(seletedObject)
    setValue("payment", seletedObject)
  }

  const selectedStyles = {
    border: '1px solid #8047F8',
    background: '#EBE5F9'
  }

  watch((data, { name, type }) => {
    if (name === "cep" && type === "change") {
      if (data.cep.length === 8) {
        ViaCep.getAddress(data.cep).then(response => {
          if (response.erro) {
            alert("CEP inválido")
          } else {
            setValue("street", response.logradouro)
            setValue("city", response.localidade)
            setValue("complement", response.complemento)
            setValue("state", response.uf)
            setValue("uf", response.uf)
          }
        }).catch(error => {
          console.log(error)
        }).finally(() => {
          console.log("finally")
        })
      }
    }
  })

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Header>
          <MapIcon />
          <Text>
            <h4>Endereço de Entrega</h4>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </Text>
        </Header>
        <Fileds>
          <Cep
            id="cep"
            placeholder="Cep"
            type="number"
            {...register('cep', {
              required: "Campo obrigatório",
              minLength: {
                value: 8,
                message: "Cep inválido"
              }
            })
            }
          />
          <Street
            id="street"
            placeholder="Rua"
            type='text'
            {...register('street', {
              required: "Campo obrigatório"
            })
            }
          />
          <NumberContainer>
            <Number
              id="number"
              placeholder="Número"
              type="number"
              {...register('number', {
                required: "Campo obrigatório"
              })
              }
            />
            <Complement
              id="complement"
              placeholder="Complemento"
              type="text"
              {...register('complement')}
            />
          </NumberContainer>
          <CityContainer>
            <City
              id="city"
              placeholder="Cidade"
              type="text"
              {...register('city', {
                required: "Campo obrigatório"
              })
              }
            />
            <State
              id="state"
              placeholder="Estado"
              type="text"
              {...register('state', {
                required: "Campo obrigatório"
              })
              }
            />
            <StateSign
              id="uf"
              placeholder="UF"
              type="text"
              {...register('uf', {
                required: "Campo obrigatório"
              })
              }
            />
          </CityContainer>
        </Fileds>
        <Footer>
          <Up>
            <Dollar />
            <Text>
              <h4>Formas de Pagamento</h4>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </Text>
          </Up>
          <Actions>
            <SelectButton
              type="button"
              style={selected.credit ? selectedStyles : {}}
              onClick={() => onSelect('credit')}
            >
              <FaCreditCard />
              CARTÃO DE CRÉDITO
            </SelectButton>
            <SelectButton
              type="button"
              style={selected.debit ? selectedStyles : {}}
              onClick={() => onSelect('debit')}
            >
              <FaMoneyCheck />
              CARTÃO DE DÉBITO
            </SelectButton>
            <SelectButton
              type="button"
              style={selected.money ? selectedStyles : {}}
              onClick={() => onSelect('money')}
            >
              <FaPiggyBank />
              DINHEIRO
            </SelectButton>
          </Actions>
        </Footer>
      </form>
    </Container>
  )
}


