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
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
