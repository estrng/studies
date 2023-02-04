import { useEffect, useState } from "react";
import { Coffee } from "../../@types/Coffee";
import Hero from "../../components/Hero";
import { ProductList } from "../../components/ProductList";
import { Cafes } from "../../utils/AvailableProducts";

export function Home() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setCoffees(Cafes);
      }, 1000);
    }
    )();
  }, [])

  return (
    <>
      <Hero />
      <ProductList products={coffees} />
    </>
  );
};