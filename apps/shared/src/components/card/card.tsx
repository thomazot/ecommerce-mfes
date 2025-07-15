import { Product } from '../../schemas/products';
import { card } from './card.variants';
import Image from 'next/image';
import { Link } from '../../commons/link';
import { Button } from '../../commons/button';
import { useCart } from '../../context/cart';
import { useState } from 'react';

const S = card();

type CardProps = Product;

export const Card = ({ id, title, image, price }: CardProps) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);

  const link = `/product/${id}`;
  const { addToCart, isLoading } = useCart();
  const [adding, setAdding] = useState(false);

  const handleAddToCart = async () => {
    setAdding(true);
    await addToCart(id, 1);
    setAdding(false);
  };

  return (
    <article className={S.base()}>
      <Link href={link}>
        <Image
          className={S.image()}
          src={image}
          width={200}
          height={200}
          alt={title}
        />
      </Link>
      <Link href={link} className={S.title()} itemType="">
        {title}
      </Link>
      <p className={S.price()}>{formattedPrice}</p>
      <Button
        onClick={() => {
          void handleAddToCart();
        }}
        disabled={isLoading || adding}
        aria-label="Adicionar ao carrinho"
      >
        {adding ? 'Adicionando...' : 'Adicionar ao carrinho'}
      </Button>
    </article>
  );
};
