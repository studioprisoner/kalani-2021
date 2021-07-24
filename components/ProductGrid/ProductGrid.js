import products from '../../data/products.json'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';

const ProductGrid = () => {

    const { addItem, removeItem } = useShoppingCart();

    return (
        <section className="max-w-7xl mx-auto mt-12 grid gap-5 lg:items-center lg:justify-between lg:grid-cols-4 px-4">
      {products.map((product) => (
        <div key={product.sku} className="flex flex-col rounded-lg shadow-lg overflow-hidden min-h-full">
          <div className="flex-shrink-0">  
              <img className="h-full w-full object-cover" src={product.image} alt={product.name} />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between md:min-h-full">
            <div>
                <p className="text-sm font-medium text-rose-bud-500 uppercase">
                  {product.name}
                </p>
              <p className="mt-3 text-mongoose-700 font-bold">
              {formatCurrencyString({
              value: product.price,
              currency: product.currency,
              })}
              </p>
              <p className="my-3 text-base text-mongoose-500">
                {product.description}
              </p>
              <button onClick={() => addItem(product)} className="block w-full bottom-0 bg-almond-300 border border-almond-300 rounded-md py-2 text-sm font-semibold text-rose-bud-500 text-center hover:bg-almond-500 hover:border-almond-500">
                Add to Cart
              </button>
              <button onClick={() => removeItem(product.sku)} className="mt-4 block w-full bottom-0 bg-almond-300 border border-almond-300 rounded-md py-2 text-sm font-semibold text-rose-bud-500 text-center hover:bg-almond-500 hover:border-almond-500">
                Remove Item
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
    );
};

export default ProductGrid