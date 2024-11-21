const resolvers = {
  Query: {
    users: async (_, __, { dataSources }) => {
      return handleRequest(
        () => dataSources.users.getAllUsers(),
        "Failed to fetch users"
      );
    },
    user: async (_, { email }, { dataSources }) => {
      return handleRequest(
        () => dataSources.users.getUser({ email }),
        "Failed to fetch user"
      );
    },
    projects: async (_, __, { dataSources }) => {
      return handleRequest(
        () => dataSources.projects.getAllProjects(),
        "Failed to fetch projects"
      );
    },
    project: async (_, { company }, { dataSources }) => {
      return handleRequest(
        () => dataSources.projects.getProject({ company }),
        "Failed to fetch project"
      );
    },
    projectsByTalent: async (_, { email }, { dataSources }) => {
      return handleRequest(
        () => dataSources.projects.getTalentsProjects({ email }),
        "Failed to fetch projects by talent"
      );
    },
    mytasks: async (_, { name, id }, { dataSources }) => {
      return handleRequest(async () => {
        const projects = await dataSources.projects.getTasks({ name, id });
        return extractTasksByTalent(projects, name);
      }, "Failed to fetch tasks");
    },
  },
  Project: {
    allTasks: async (project, __, { dataSources }) => {
      return handleRequest(async () => {
        const projects = await dataSources.projects.getAllProjects();
        return extractAllTasks(projects);
      }, "Failed to fetch all tasks");
    },
  },
  Mutation: {
    createUser: async (_, { input }, { dataSources }) => {
      return handleRequest(
        () => dataSources.users.createUser({ input }),
        "Failed to create user"
      );
    },
  },
};

// Utility Functions

const handleRequest = async (fn, errorMessage) => {
  try {
    return await fn();
  } catch (error) {
    console.error(`${errorMessage}:`, error);
    throw new Error(errorMessage);
  }
};

const extractTasksByTalent = (project, talentName) => {
  return (
    project.milestones?.flatMap(
      (milestone) =>
        milestone.tasks
          ?.filter((task) => task.talent?.name === talentName)
          .map((task) => {
            return { milestone: milestone.name, ...task };
          }) || []
    ) || []
  );
};

const extractAllTasks = (projects) => {
  return projects.flatMap(
    (project) =>
      project.milestones?.flatMap((milestone) => milestone.tasks || []) || []
  );
};

export default resolvers;
