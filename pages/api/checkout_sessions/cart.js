/*
 * Product data can be loaded from anywhere. In this case, we’re loading it from
 * a local JSON file, but this could also come from an async call to your
 * inventory management service, a database query, or some other API call.
 *
 * The important thing is that the product info is loaded from somewhere trusted
 * so you know the pricing information is accurate.
 */
import inventory from '../../../data/products.json';
import Stripe from 'stripe';

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`);

const validateCartItems = require('use-shopping-cart/utilities')
  .validateCartItems

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Validate the cart details that were sent from the client.
            const cartItems = req.body;
            const line_items = validateCartItems(inventory, cartItems);
            // Create Checkout Sessions from body params.
            const params = {
                submit_type: 'pay',
                allow_promotion_codes: true,
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_address_collection: {
                    allowed_countries: ['AU'],
                },
                line_items,
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/products`,
            };
            const checkoutSession = await stripe.checkout.sessions.create(params);
            res.status(200).json(checkoutSession);
        }
        catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message });
        }
    }
    else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
