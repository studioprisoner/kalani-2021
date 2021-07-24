import React, { useState } from 'react';

import { useShoppingCart } from 'use-shopping-cart';

const CartSummary = () => {
  const [loading, setLoading] = useState(false);
  const {
    totalPrice,
    formattedTotalPrice,
    cartCount,
    clearCart,
    cartDetails,
    redirectToCheckout,
  } = useShoppingCart();

  const handleCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { sessionId } = await fetch(
      'api/crate-checkout-session',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartDetails),
      }
    )
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
    redirectToCheckout({ sessionId });
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
        <button
          className="relative inline-flex items-center mr-4 px-4 py-2 bg-almond-300 border border-almond-300 rounded-md text-sm font-semibold text-rose-bud-500 text-center hover:bg-almond-500 hover:border-almond-500"
          disabled={!cartCount || loading}
          onClick={handleCheckout}
        >
          Checkout
        </button>
        <button
          className="relative inline-flex items-center px-4 py-2 bg-almond-300 border border-almond-300 rounded-md text-sm font-semibold text-rose-bud-500 text-center hover:bg-almond-500 hover:border-almond-500"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
    </div>
    );
};
export default CartSummary;