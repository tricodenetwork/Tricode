// MongoDB Data Source for Users
import { MongoDataSource } from "apollo-datasource-mongodb";
import clientPromise from "@/lib/mongodb";

export default class Projects extends MongoDataSource {
  // Function to fetch all users
  async getAllProjects() {
    try {
      const client = await clientPromise;
      const db = client.db("Tricode");
      const projects = await db.collection("Projects").find({}).toArray();
      // console.log("projects", projects);
      return projects;
    } catch (error) {
      throw new Error("Failed to fetch Projects");
    }
  }
  // Function to fetch projects by company
  async getProject({ company }) {
    try {
      // console.log("company", company);
      const client = await clientPromise;
      const db = client.db("Tricode");
      const user = await db
        .collection("Projects")
        .find({ company: company })
        .toArray();
      // console.log("projects", user);
      return user;
    } catch (error) {
      throw new Error("Failed to fetch project by company name");
    }
  }
  // Function to fetch projects by talent (user ID)
  async getTalentsProjects({ email }) {
    try {
      const client = await clientPromise;
      const db = client.db("Tricode");
      console.log("talentID", email);

      // Fetch projects where the user's ID is part of the team
      const projects = await db
        .collection("Projects")
        .find({ "team.email": email })
        .toArray();

      return projects;
    } catch (error) {
      throw new Error("Failed to fetch projects by talent ID");
    }
  }
}
