const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
    maxNetworkRetries: 2
});

const ValidateCartItems = require('use-shopping-cart/src/serverUtil')
    .ValidateCartItems

const inventory = require('../../data/products.json');

exports.handler = async (event) => {
    try {
        const cartItems = JSON.parse(event.body);

        const line_items = ValidateCartItems(inventory, cartItems);

        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            allow_promotion_codes: true,
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_address_collection: {
                allowed_countries: ['AU'],
            },
            success_url: `${process.env.URL}/success`,
            cancel_url: process.env.URL,
            line_items: [
                ...line_items,
            ],
            payment_intent_data: {
                metadata: {
                    items: JSON.stringify(
                        Object.keys(cartItems).map((sku) => ({
                            sku,
                            quantity: cartItems[sku].quantity,
                        }))
                    ),
                },
            },
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ sessionId: session.id }),
        };
    } catch (error) {
        console.log({ error });

        return {
            statusCode: 400,
            body: JSON.stringify(error),
        };
    }
};