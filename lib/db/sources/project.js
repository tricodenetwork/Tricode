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
  // Function to fetch a single user by email
  async getProject({ company }) {
    try {
      console.log("user", company);
      const client = await clientPromise;
      const db = client.db("Tricode");
      const user = await db
        .collection("Projects")
        .findOne({ company: company });
      // console.log("user", user);
      return user;
    } catch (error) {
      throw new Error("Failed to fetch project by company name");
    }
  }
}
