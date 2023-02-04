import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Coffee } from '../../@types/Coffee';
import { SelectedItem } from '../../@types/Operation';
import { useCartContext } from '../../contexts/Cart/hooks/useCartContext';
import { formatPrice } from '../../helpers';
import { Button } from '../Button';
import {
  Container,
  Ilustration,
  Title,
  Description,
  Price,
  Quantity,
  Tag,
  TextContainer,
  TagContainer,
  BuyInContainer
} from './styles';

interface ProductCardProps extends Coffee { }

export function ProductCard({ id, ilustration, description, tag, name, price }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [priceToShow, setPriceToShow] = useState(price);
  const { addToCartAction } = useCartContext();

  function handleQuantityChange(value: number) {
    if (value < 1) {
      setQuantity(1);
    } else { setQuantity(value) }
  }

  function handleAddToCart() {
    addToCartAction({
      operation_id: uuidv4(),
      quantity,
      coffee: {
        name,
        price,
        ilustration,
        tag,
        description,
        id
      }
    } as SelectedItem);
    setQuantity(1);
  }

  useEffect(() => {
    setPriceToShow(price * quantity);
  }, [quantity]);

  return <Container>
    <Ilustration src={ilustration} />
    <TagContainer>
      {tag && tag.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </TagContainer>

    <TextContainer>
      <Title>{name}</Title>
      <Description>{description}</Description>
    </TextContainer>

    <BuyInContainer>
      <Price>{formatPrice(priceToShow)}</Price>
      <Quantity>
        <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
      </Quantity>
      <Button onClick={handleAddToCart} />
    </BuyInContainer>
  </Container>;
}

