import crypto from "crypto";
export const dynamic = "force-dynamic";

export default async function POST(req, res) {
  try {

    

    // Catch the event typ
    console.log(req);
     const clonedReq =JSON.stringify( await req)
    const eventType = req.headers["X-Event-Name"];
    const body = await req.body;
    // Check signature
    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SIGNATURE;
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(
      hmac.update(clonedReq).digest("hex"),"utf8");
    const signature = Buffer.from(req.headers["X-Signature"] || "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }


    // Logic according to event
    if (eventType === "order_created") {
      const userId = body.meta.custom_data.user_id;
      const isSuccessful = body.data.attributes.status === "paid";
    }

    return  res
    .status(200)
    .json({message:"Message got"});
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({message:"Message not got"});
  }
}