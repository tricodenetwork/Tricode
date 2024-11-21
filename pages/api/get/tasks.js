import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("Tricode");

    const projectId = new ObjectId(req.query.id);
    const milestoneName = req.query.milestone;

    const project = await db.collection("Projects").findOne(
      {
        _id: projectId,
        "milestones.name": milestoneName,
      },
      {
        projection: {
          "milestones.$": 1,
        },
      }
    );

    if (!project) {
      return res
        .status(404)
        .json({ message: "Project or milestone not found" });
    }

    const milestone = project.milestones[0];

    res.status(200).json(milestone.tasks);
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
