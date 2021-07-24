import Head from 'next/head'
import Nav from '../components/Nav'
import Cart from '../components/Cart'
import CartSummary from '../components/CartSummary'
import ProductGrid from '../components/ProductGrid'

export default function Product() {
    return (
        <div>
            <Head>
                <title>Kalani Co Flowers - Our Products</title>
            </Head>
            <div className="relative overflow-hidden">
                <Nav />
                <Cart>
                    <CartSummary />
                    <ProductGrid />
                </Cart>
            </div>
        </div>
    )
}
