import Users from "@/lib/db/sources";
import UserModel from "@/lib/db/model/user";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import Projects from "@/lib/db/sources/project";
import clientPromise from "@/lib/mongodb";

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => {
    const client = await clientPromise;
    const db = client.db("Tricode");
    const ProjectModel = await db.collection("Projects");

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
