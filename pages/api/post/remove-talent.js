import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("Tricode");

    // Check if any required field is missing
    // const requiredFields = ["status", "summary", "id"];
    // for (const field of requiredFields) {
    //   if (!req.body[field]) {
    //     return res.status(400).json({ error: `${field} is required` });
    //   }
    // }

    const newId = new ObjectId(req.body.id);
    const found = await db.collection("Projects").findOne({ _id: newId });

    // Insert the new report into the database
    console.log(req.body);

    if (found) {
      await db
        .collection("Projects")
        .updateOne(
          { _id: newId },
          { $pull: { team: { _id: req.body.talent._id } } }
        );
    } else {
      throw Error("Project does not exist");
    }

    res.status(200).json({
      message: "Talent removed successfully",
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
