import lemonSqueezyApiInstance from "@/lib/lemon/lemonAPI";

export const dynamic = "force-dynamic";

export default async function POST(req, res) {
    try {
        const reqData = await req.body;

        console.log('hit')
        if (!reqData.productId)
            return Response.json(
                { message: "productId is required" },
                { status: 400 }
            );

        const data = {
            data: {
                type: "checkouts",
                attributes: {
                    checkout_data: {
                        email: "akanbijosephtobi@gmail.com",
                        name: "Akanbi Joseph",
                        custom: {
                            user_id: "123",
                            amount_to_pay: reqData.amount,
                            currency: "usd"
                        },
                    },
                },
                relationships: {
                    store: {
                        data: {
                            type: "stores",
                            id: process.env.LEMON_SQUEEZY_STORE_ID.toString(),
                        },
                    },
                    variant: {
                        data: {
                            type: "variants",
                            id: reqData.productId.toString(),
                        },
                    },
                },
            }
        }
        const response = await lemonSqueezyApiInstance("/checkouts", "POST", data)

        const checkoutUrl = response?.data?.attributes?.url;

        console.log(checkoutUrl);

     
        res
        .status(200)
        .json(checkoutUrl);
    } catch (error) {
        console.error(error.message);
        res
        .status(500)
        .json(error.message);
    }
}