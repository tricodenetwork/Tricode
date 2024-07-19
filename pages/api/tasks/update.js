import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("Tricode");

    const projectId = new ObjectId(req.body.id);
    const milestone = req.body.milestone;
    const taskName = req.body.task.name;
    const updatedTask = req.body.task;
    const status = req.body.status;
    const name = req.body.task;

    if (status) {
      await db.collection("Projects").updateOne(
        {
          _id: projectId,
          "milestones.name": milestone,
          "milestones.tasks.name": name,
        },
        {
          $set: {
            "milestones.$.tasks.$[task].status": status,
          },
        },
        {
          arrayFilters: [{ "task.name": name }],
        }
      );
    } else {
      await db.collection("Projects").updateOne(
        {
          _id: projectId,
          "milestones.name": milestone,
          "milestones.tasks.name": taskName,
        },
        {
          $set: {
            "milestones.$.tasks.$[task]": updatedTask,
          },
        },
        {
          arrayFilters: [{ "task.name": taskName }],
        }
      );
    }

    res.status(200).json({
      message: "Task updated successfully",
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
