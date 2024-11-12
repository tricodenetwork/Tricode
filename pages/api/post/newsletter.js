import clientPromise from "@/lib/mongodb";
// import { useCors } from "@/hooks/useCors";

export default async function handler(req, res) {
  // Use the cors middleware and pass the origin you want to accept
  //   await useCors("https://bandb-ovodo.vercel.app")(req, res);

  try {
    const client = await clientPromise;
    const db = client.db("Tricode");

    // Check if any required field is missing
    const requiredFields = ["email"];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // Insert the new user into the database
    await db.collection("subscribe").insertOne({ email: req.body.email });

    res.status(200).json({ message: "email added successfully" });
  } catch (error) {
    console.error("API Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request" });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
