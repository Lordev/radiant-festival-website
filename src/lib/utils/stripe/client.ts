import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2024-04-10",
    maxNetworkRetries: 2,
    timeout: 1000,
    host: "api.stripe.com",
    port: 443,
    telemetry: true,
    protocol: "https",
    httpAgent: null,
    appInfo: {
        name: "stripe-node",
        url: "",
        version: "",
    },
});
