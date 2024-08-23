export const USERS = `query Users {
  users {
    name
    email
    image
    _id
    
  }
  }`;
export const USER = `query User($email: String!) {
  user(email: $email) {
    name
    email
    image
    role
  }
  }`;
export const PROJECTS = `query Projects {
  projects {
    id
    name
    company
    description
    status
    files
    milestones
    team
    report
    
    
    
    }
    }`;
export const PROJECT = `query Project ($company: String!) {
        project(company: $company) {
            id
            name
            company
            description
            status
            files
            milestones
            team
            report
  }
  }`;
export const MYTASKS = `query MyTasks ($company: String!) {
        project(company: $company) {
            id
            name
            company
            description
            status
            files
            milestones
            team
            report
  }
  }`;
