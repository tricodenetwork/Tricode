// MongoDB Data Source for Users
import { MongoDataSource } from "apollo-datasource-mongodb";
import clientPromise from "@/lib/mongodb";

export default class Users extends MongoDataSource {
  // Function to fetch all users
  async getAllUsers() {
    try {
      const client = await clientPromise;
      const db = client.db("Tricode");
      const users = await db.collection("users").find({}).toArray();
      return users;
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }
  // Function to fetch a single user by email
  async getUser({ email }) {
    try {
      const client = await clientPromise;
      const db = client.db("Tricode");
      const user = await db.collection("users").findOne({ email: email });
      return user;
    } catch (error) {
      throw new Error("Failed to fetch user by email");
    }
  }

  // Function to create a new user
  async createUser({ _input }) {
    try {
      return "";
    } catch (error) {
      throw new Error("Failed to create user");
    }
  }
}
