import clientPromise from "@/lib/mongodb";
// import { useCors } from "@/hooks/useCors";

export default async function handler(req, res) {
  // Use the cors middleware and pass the origin you want to accept
  //   await useCors("https://bandb-ovodo.vercel.app")(req, res);

  try {
    const client = await clientPromise;
    const db = client.db("Tricode");

    // Check if the email already exists in the database
    const existingUser = await db
      .collection("users")
      .findOne({ email: req.body.email });

    if (existingUser) {
      // If the user exists, update the role if it's not already set
      if (existingUser.role) {
        return res.status(200).json({ message: "Email already exists" });
      } else {
        await db.collection("users").updateOne(
          { email: req.body.email },
          {
            $set: {
              role: req.body.role,
              // Add other fields to update as needed
            },
          }
        );
        return res
          .status(200)
          .json({ message: "User role updated successfully" });
      }
    }

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
    // If the user does not exist, create a new user object with the provided data
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
