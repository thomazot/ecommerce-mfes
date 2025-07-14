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

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryName = decodeURIComponent(category);
  const products = categoryName
    ? await getProductsByCategory(categoryName)
    : [];

  return (
    <>
      <Showcase title={`Categoria ${categoryName}`} products={products} />
    </>
  );
}
