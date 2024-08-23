const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    image: String
    role: String!
    password: String
  }
  
  input NewUserInput {
    name: String!
    email: String!
    image: String
    role: String!
    password: String
  }
  
  type Task {
    name: String!
    description: String
    talent: User
  }

  type Milestone {
    name: String!
    status: String
    description: String
    startDate: String!
    endDate: String!
    tasks: [Task]
    amount: Float
    contingency: Float
  }

  type Report {
    status: String
    link: String
    summary: String
    highlights: [String]
    date: String
    files: [String]
  }

  type Project {
    _id: ID!
    name: String!
    company: String!
    description: String
    status: String!
    files: [String]
    milestones: [Milestone]
    team: [User]
    report: [Report]
    allTasks: [Task]  # Aggregate of all tasks

  }

  type Query {
    users: [User]
    user(email: String!): User
    projects: [Project]
    project(company: String!): Project
    mytasks(name: String!): [Task]

  }

  type Mutation {
    createUser(input: NewUserInput!): User
    createProject(input: NewProjectInput!): Project
  }

  input NewProjectInput {
    name: String!
    company: String!
    description: String
    status: String!
    files: [String]
    milestones: [NewMilestoneInput]
    team: [NewTeamMemberInput]
    report: [NewReportInput]
  }

  input NewMilestoneInput {
    name: String!
    status: String
    description: String
    startDate: String!
    endDate: String!
    tasks: [NewTaskInput]
    amount: Float
    contingency: Float
  }

  input NewTaskInput {
    name: String!
    description: String
  }

  input NewTeamMemberInput {
    id: ID!
    name: String!
    dept: String
    email: String
    image: String
    role: String!
  }

  input NewReportInput {
    status: String
    link: String
    summary: String
    highlights: [String]
    date: String
    files: [String]
  }
`;

export default typeDefs;
