import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("Tricode");

    const projectId = new ObjectId(req.body.id);
    const milestone = req.body.milestone;
    const newTask = req.body.task;
    console.log(req.body);

    await db.collection("Projects").updateOne(
      {
        _id: projectId,
        "milestones.name": milestone,
      },
      {
        $push: {
          "milestones.$.tasks": newTask,
        },
      }
    );

    res.status(200).json({
      message: "New task added successfully",
    });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({
      error: `An error occurred while processing the request: ${error}`,
    });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
