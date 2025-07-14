import { getProductsByCategory } from '@ecommerce-mfe/shared/services/products';
import { Showcase } from '@ecommerce-mfe/shared/components/showcase';

export const metadata = {
  title: 'Ecommerce | Loja de Exemplo',
  description:
    'Compre produtos incríveis na nossa loja de exemplo. Ofertas, novidades e muito mais!',
  openGraph: {
    title: 'Ecommerce | Loja de Exemplo',
    description:
      'Compre produtos incríveis na nossa loja de exemplo. Ofertas, novidades e muito mais!',
    url: 'https://www.seuecommerce.com',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ecommerce | Loja de Exemplo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce | Loja de Exemplo',
    description:
      'Compre produtos incríveis na nossa loja de exemplo. Ofertas, novidades e muito mais!',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.seuecommerce.com',
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default async function Page() {
  const products = await getProductsByCategory('jewelery');

  return (
    <>
      <Showcase title="Jewelery" products={products ?? []} />
      <Showcase title="Jewelery" products={products ?? []} />
      <Showcase title="Jewelery" products={products ?? []} />
      <Showcase title="Jewelery" products={products ?? []} />
    </>
  );
}
