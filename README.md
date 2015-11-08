# GraphQL Experiment

Just a quick GraphQL experimentation

Install dependencies

`npm install`

`npm install --save babel`

Start the server 

`npm start`

Run the queries in a new terminal tab

`curl -XPOST -H 'Content-Type:application/graphql'  -d '{ player { firstName, lastName, dateOfBirth } }' http://localhost:3000/graphql`

`curl -XPOST -H 'Content-Type:application/graphql' -d '{ incidentList ( matchId : "1") { incidentType, incidentTime, player { firstName, lastName } } }' http://localhost:3000/graphql`
