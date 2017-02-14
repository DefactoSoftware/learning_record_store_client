import gql from 'graphql-tag';

export const allStatements = gql`
 query allStatements {
   statements {
     id
     actor {
       mbox
     }
     verb {
       id
     }
     object {
       id
     }
   }
 }
`
