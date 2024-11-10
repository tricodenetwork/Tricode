export const USERS = `query Users {
  users {
    _id
    name
    email
    image
    dept
    role
    
  }
  }`;
export const USER = `query User($email: String!) {
  user(email: $email) {
  _id  
  name
    dept
    email
    image
    role
  }
  }`;
export const PROJECTS = `query Projects {
  projects {
       _id
            name
            company
            description
            status
            files
            milestones {
              name
              status
              description
              startDate
              endDate
              tasks {
                name
                description
                talent {
                  _id
                  name 
                  email 
                  image
                  dept
                  role 
                  password
                }
              }
              amount
              contingency
            }
            team {
              _id
              name 
              email 
              image
              dept
              role 
              password
            }
    }
    }`;
export const PROJECT = `query Project ($company: String!) {
        project(company: $company) {
            _id
            name
            company
            description
            status
            files
            milestones {
              name
              status
              description
              startDate
              endDate
              tasks {
                name
                description
                talent
              }
              amount
              contingency
            }
            team {
              id
              name 
              email 
              image
              role 
              password
            }
            report
  }
  }`;
export const TASKS = `query TASKS {
        allTasks {
          name
  }
  }`;
export const MYTASKS = `query MyTasks ($company: String!) {
        project(company: $company) {
            _id
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
