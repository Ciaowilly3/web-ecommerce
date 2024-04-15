import { ProductsList } from '@/components';

export default function Home() {
  return (
    <main className="px-16">
      <h1 className="text-2xl text-center my-8">Ecommerce</h1>
      <div className="flex border-2 rounded bg-primary justify-center items-center mb-8 h-16  border-red-300">
        <h3 className="text-xl">searchbar</h3>
      </div>
      <div className="flex border-2 rounded bg-secondary justify-center items-center mb-8 h-32  border-orange-300">
        <h3 className="text-xl">categories</h3>
      </div>
      <div className=" border-2 rounded bg-secondary mb-8 h-32  border-blue-300">
        <h3 className="text-xl">products</h3>
        <div className="flex justify-between items-stretch h-full gap-x-3 flex-wrap">
          <ProductsList />
        </div>
      </div>
    </main>
  );
}
