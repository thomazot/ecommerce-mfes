import { getProductsByCategory } from '@ecommerce-mfe/shared/services/products';
import { CategoryPage } from '@ecommerce-mfe/shared/containers/categoryPage';
import { notFound } from 'next/navigation';

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
  metadataBase: new URL('https://www.seuecommerce.com'),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

type PageProps = {
  params: Promise<{ category: string }>;
};

export default async function Page({ params }: PageProps) {
  const { category } = await params;
  const categoryName = decodeURIComponent(category);

  const products = categoryName && (await getProductsByCategory(categoryName));

  if (!products) notFound();

  return <CategoryPage category={categoryName} initialProducts={products} />;
}
