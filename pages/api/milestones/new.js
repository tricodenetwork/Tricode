import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("Tricode");

    // Check if any required field is missing
    const requiredFields = ["name", "startDate", "endDate", "description"];
    for (const field of requiredFields) {
      if (!req.body.milestone[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }
    const newId = new ObjectId(req.body.id);
    // Insert the new milestone into the database

    await db.collection("Projects").updateOne(
      { _id: newId },
      {
        $push: { milestones: req.body.milestone },
      }
    );

    res.status(200).json({
      message: "New milestone added successfully",
    });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({
      error: `An error occurred while processing the request:${error}`,
    });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
