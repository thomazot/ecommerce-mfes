import '@ecommerce-mfe/core/tailwind/globals.css';
import { Header } from '@ecommerce-mfe/shared/components/header';
import { ReactQueryProvider } from '@ecommerce-mfe/shared/utils/react-query-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <div className="flex flex-col min-h-screen">
            <Header minimal />
            <main className="flex flex-col gap-4 my-4 flex-1 container max-w-7xl mx-auto">
              {children}
            </main>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
