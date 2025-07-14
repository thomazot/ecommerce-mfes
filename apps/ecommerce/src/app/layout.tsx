import '@ecommerce-mfe/core/tailwind/globals.css';
import { Header } from '@ecommerce-mfe/shared/components/header';
import { Footer } from '@ecommerce-mfe/shared/components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex flex-col gap-4 my-4 flex-1 container max-w-7xl mx-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
