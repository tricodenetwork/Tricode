import clientPromise from "@/lib/mongodb";
// import { useCors } from "@/hooks/useCors";

export default async function handler(req, res) {
  // Use the cors middleware and pass the origin you want to accept
  //   await useCors("https://bandb-ovodo.vercel.app")(req, res);vscode

  try {
    const client = await clientPromise;
    const db = client.db("Tricode");

    // Check if any required field is missing
    const requiredFields = [
      "fullName",
      "password",
      "email",
      "mobilePhone",
      "role",
    ];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // Check if the email already exists in the database
    const existingUser = await db
      .collection("users")
      .findOne({ email: req.body.email });

    if (existingUser) {
      // If the email exists, return an error message
      return res.status(200).json({ message: "Email already exists" });
    }

    // Create a new user object with the provided data
    const newUser = {
      fullName: req.body.fullName,
      password: req.body.password,
      email: req.body.email,
      mobilePhone: req.body.mobilePhone,
      role: req.body.role,
      // Add other fields as needed
    };

    // Insert the new user into the database
    await db.collection("users").insertOne(newUser);

    res.status(200).json({ message: "User registered successfully" });
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
