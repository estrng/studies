import { Coffee } from '../../@types/Coffee';
import { ProductCard } from '../ProductCard';
import { Container, ProductsListContainer } from './styles';

interface ProductListProps {
  products: Coffee[];
}

export function ProductList({ products }: ProductListProps) {
  return <Container>
    <h1>Nossos cafés</h1>
    <ProductsListContainer>
      {products.map(product => <ProductCard key={product.id} {...product} />)}
    </ProductsListContainer>
  </Container>
}

