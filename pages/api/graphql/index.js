import Users from "@/lib/db/sources";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import Projects from "@/lib/db/sources/project";
import clientPromise from "@/lib/mongodb";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: '*', // You may want to restrict this to specific domains in production
    credentials: true,
  },
});

export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => {
    const client = await clientPromise;
    const db = client.db("Tricode");
    const ProjectModel = await db.collection("Projects");
    const UserModel = await db.collection("users");

    return {
      req,
      res,
      dataSources: {
        users: new Users({ modelOrCollection: UserModel }),
        projects: new Projects({ modelOrCollection: ProjectModel }),
      },
    };
  },
});
