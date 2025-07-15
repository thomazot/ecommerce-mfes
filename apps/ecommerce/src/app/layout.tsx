import '@ecommerce-mfe/core/tailwind/globals.css';
import { Header } from '@ecommerce-mfe/shared/components/header';
import { Footer } from '@ecommerce-mfe/shared/components/footer';
import { ReactQueryProvider } from '@ecommerce-mfe/shared/utils/react-query-provider';
import { BaseProvider } from '@ecommerce-mfe/shared/context/base';
import { getCategories } from '@ecommerce-mfe/shared/services/category';
import { CartProvider } from '@ecommerce-mfe/shared/context/cart/cart';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <CartProvider>
            <BaseProvider menu={categories}>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex flex-col gap-4 my-4 flex-1 container max-w-7xl mx-auto">
                  {children}
                </main>
                <Footer />
              </div>
            </BaseProvider>
          </CartProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
