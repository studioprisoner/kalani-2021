import React, { useState, useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { fetchPostJSON } from '../../utils/api-helpers';

const CartSummary = () => {
    const [loading, setLoading] = useState(false);
    const [cartEmpty, setCartEmpty] = useState(true);
    const { formattedTotalPrice, cartCount, clearCart, cartDetails, redirectToCheckout, } = useShoppingCart();
    useEffect(() => setCartEmpty(!cartCount), [cartCount]);
    const handleCheckout = async (event) => {
        event.preventDefault();
        setLoading(true);
        const response = await fetchPostJSON('/api/checkout_sessions/cart', cartDetails);
        if (response.statusCode === 500) {
            console.error(response.message);
            return;
        }
        redirectToCheckout({ sessionId: response.id });
    };
    return (
        <div className="px-4 pt-5 sm:px-6">
    <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
      <div className="ml-4 mt-4">
          <h3 className="text-lg leading-6 font-medium text-almond-900">Your Cart</h3>
          <p className="mt-1 text-sm text-mongoose-500" suppressHydrationWarning>
            <strong>Number of Items:</strong> {cartCount} <strong>Total: </strong>{formattedTotalPrice}
          </p>
      </div>
      <div className="ml-4 mt-4 flex-shrink-0">
      <form onSubmit={handleCheckout}>
        <button
          className="relative inline-flex items-center mr-4 px-4 py-2 bg-almond-300 border border-almond-300 rounded-md text-sm font-semibold text-rose-bud-500 text-center hover:bg-almond-500 hover:border-almond-500"
          type="submit"
          disabled={cartEmpty || loading}
        >
          Checkout
        </button>
        <button
          className="relative inline-flex items-center px-4 py-2 bg-almond-300 border border-almond-300 rounded-md text-sm font-semibold text-rose-bud-500 text-center hover:bg-almond-500 hover:border-almond-500"
          type="button"
          onClick={clearCart}
        >
          Clear Cart
        </button>
        </form>
      </div>
    </div>
    </div>
    );
};
export default CartSummary;