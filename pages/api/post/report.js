import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("Tricode");

    // Check if any required field is missing
    const requiredFields = ["status", "summary", "id"];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }
    // Create a new report
    const newReport = {
      status: req.body.status,
      link: req.body.link,
      summary: req.body.summary,
      highlights: req.body.highlights,
      date: req.body.date,
      files: req.body.files,
    };
    const found = await db.collection("Projects").findOne({ _id: newId });
    const newId = new ObjectId(req.body.id);

    // Insert the new report into the database

    if (found) {
      await db
        .collection("Projects")
        .updateOne(
          { _id: newId },
          { $set: { status: req.body.status }, $push: { report: newReport } }
        );
      console.log(newId, found);
    } else {
      throw Error;
    }

    res.status(200).json({
      data: result.insertedId,
      message: "Report added successfully",
    });
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
