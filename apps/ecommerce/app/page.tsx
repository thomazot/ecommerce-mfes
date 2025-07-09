import { Product } from '@shared/schemas';
import Image from 'next/image';

const products: Product[] = [
  {
    id: '1',
    name: 'Camiseta Básica',
    description: 'Camiseta confortável de algodão.',
    price: 59.9,
    image: 'https://via.placeholder.com/200',
    stock: 10,
  },
  {
    id: '2',
    name: 'Tênis Esportivo',
    description: 'Ideal para corridas e caminhadas.',
    price: 199.9,
    image: 'https://via.placeholder.com/200',
    stock: 5,
  },
];

export default function HomePage() {
  return (
    <main className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Produtos em destaque</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <li key={product.id} className="border rounded-lg p-4 flex flex-col items-center">
            <Image src={product.image} alt={product.name} width={128} height={128} className="w-32 h-32 object-cover mb-2" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <span className="text-lg font-bold mb-2">R$ {product.price.toFixed(2)}</span>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" tabIndex={0} aria-label={`Adicionar ${product.name} ao carrinho`}>
              Adicionar ao carrinho
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
