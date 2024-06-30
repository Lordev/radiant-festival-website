import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: NextRequest) {
    const data = await request.json();
    const { quantity } = data.item;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price: process.env.STRIPE_PRICE_ID,
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                        maximum: 10,
                    },
                    quantity: quantity,
                },
            ],
            mode: "payment",
            success_url: `http://localhost:3000/success`,
            cancel_url: `http://localhost:3000`,
            metadata: {
                user: "user_id",
            },
        });
        return NextResponse.json({ id: session.id });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
