import clientPromise from "@/lib/mongodb";
// import { useCors } from "@/hooks/useCors";

export default async function handler(req, res) {
  // Use the cors middleware and pass the origin you want to accept
  //   await useCors("https://bandb-ovodo.vercel.app")(req, res);

  try {
    // Instanting the Database client
    const client = await clientPromise;
    const db = client.db("Tricode");
    // Check if any required field is missing

    const requiredFields = ["name"];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    let projects;

    if (!req.body.name) {
      projects = await db
        .collection("Projects")
        .find({ company: req.body.name })
        .toArray();
    } else {
      projects = await db.collection("Projects").find({}).toArray();
    }

    if (!projects) {
      res.status(400).json({ error: "No Project for this company" });
    } else {
      // console.log("projec", projects);
      res
        .status(200)
        .json({ data: projects, message: "projects retrieved from database" });
    }
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
