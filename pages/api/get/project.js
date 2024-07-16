import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("Tricode");

    // Check if the email already exists in the database
    const newId = new ObjectId(req.body.id);

    const project = await db.collection("Projects").findOne({ _id: newId });
    // console.log(project);

    // if (!project) {
    //   res.status(400).json({ error: "No Project found" });
    // } else {
    res.status(200).json(project);
    // }
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
