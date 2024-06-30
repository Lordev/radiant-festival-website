import { NextResponse } from "next/server";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-04-10",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
    const payload = await req.text();
    const signature = req.headers.get("stripe-signature");
    let event: Stripe.Event | null = null;

    try {
        event = stripe.webhooks.constructEvent(payload, signature!, webhookSecret);
        switch (event?.type) {
            case "payment_intent.succeeded":
                const paymentIntent = event.data.object as Stripe.PaymentIntent;
                if (!paymentIntent) {
                    return NextResponse.json(
                        { error: "unable to handle payment_intent.succeeded" },
                        { status: 400 }
                    );
                }
            case "charge.succeeded": {
                const charge = event.data.object as Stripe.Charge;
                if (!charge) {
                    return NextResponse.json(
                        { error: "unable to handle charge.updated" },
                        { status: 400 }
                    );
                }
            }
            case "customer.created":
                {
                    const customer = event.data.object as Stripe.Customer;

                    if (!customer) {
                        return NextResponse.json(
                            { error: "unable to handle customer.created" },
                            { status: 400 }
                        );
                    }
                }
                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            return NextResponse.json({ message: err.message }, { status: 400 });
        }
    }

    return NextResponse.json({ received: true });
}
