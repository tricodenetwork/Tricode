import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("Tricode");

    const newId = new ObjectId(req.body.id);
    // Insert the new milestone into the database

    await db.collection("Projects").updateOne(
      {
        _id: newId,
        "milestones.name": req.body.milestone.initial,
      },
      {
        $set: {
          //   "milestones.$.status": "Ongoing",
          "milestones.$.name": req.body?.milestone?.name,
          "milestones.$.description": req.body?.milestone?.description,
          "milestones.$.startDate": req.body?.milestone?.startDate,
          "milestones.$.endDate": req.body?.milestone?.endDate,
        },
      }
    );

    res.status(200).json({
      message: "New milestone updated successfully",
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
