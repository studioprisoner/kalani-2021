import Head from 'next/head'
import { CartProvider } from 'use-shopping-cart';
import { loadStripe } from '@stripe/stripe-js';

import Nav from '../components/Nav'
import CartSummary from '../components/CartSummary'
import ProductGrid from '../components/ProductGrid'

const stripePromise = loadStripe(process.env.NEXT_APP_STRIPE_PUBLISHABLE_KEY);

export default function Product() {
    return (
        <div>
            <Head>
                <title>Kalani Co Flowers - Our Products</title>
            </Head>
            <div className="relative overflow-hidden">
                <Nav />
                <CartProvider mode="checkout-session" stripe={stripePromise}>
                    <CartSummary />
                    <ProductGrid />
                </CartProvider>
            </div>
        </div>
    )
}
