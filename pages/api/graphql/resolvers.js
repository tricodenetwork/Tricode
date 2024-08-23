const resolvers = {
  Query: {
    users: async (_, __, context) => {
      try {
        return await context.dataSources.users.getAllUsers();
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    },
    user: async (_, { email }, context) => {
      try {
        return await context.dataSources.users.getUser({ email });
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    },
    projects: async (_, __, context) => {
      try {
        return await context.dataSources.projects.getAllProjects();
      } catch (error) {
        throw new Error("Failed to fetch Projects", error);
      }
    },
    project: async (_, { company }, context) => {
      try {
        return await context.dataSources.projects.getProject({ company });
      } catch (error) {
        throw new Error("Failed to fetch Project", error);
      }
    },

    mytasks: async (_, { name }, context) => {
      try {
        const projects = await context.dataSources.projects.getAllProjects();

        // Filter tasks by the specific talent name
        const tasks = projects.flatMap((project) =>
          project.milestones
            ? project.milestones.flatMap((milestone) =>
                milestone.tasks
                  ? milestone.tasks.filter((task) => task.talent?.name === name)
                  : []
              )
            : []
        );

        return tasks;
      } catch (error) {
        throw new Error("Failed to fetch tasks");
      }
    },
  },
  Project: {
    allTasks: async (_, __, context) => {
      try {
        const projects = await context.dataSources.projects.getAllProjects();

        // Flatten all tasks from all projects' milestones
        return projects.flatMap((project) =>
          project.milestones
            ? project.milestones.flatMap((milestone) => milestone.tasks || [])
            : []
        );
      } catch (error) {
        throw new Error("Failed to fetch all tasks", error);
      }
    },
  },
  Mutation: {
    createUser: async (_, { input }, context) => {
      try {
        const newUser = await context.dataSources.users.createUser({ input });
        return newUser;
      } catch (error) {
        throw new Error("Failed to create user");
      }
    },
  },
};

export default resolvers;
