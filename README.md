# Learn GraphQL In 40 Minutes

[https://www.youtube.com/watch?v=ZQL7tL2S0oQ](https://www.youtube.com/watch?v=ZQL7tL2S0oQ)

```bash
npm init
npm i express express-graphql graphql
npm i nodemon #This will create our server running, and reload when changed
```

```jsx
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const app = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "HelloQueryName",
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => "HelloMessage",
            },
            address: {
                type: GraphQLString,
                resolve: () => "hello@gmail.com",
            },
        }),
    }),
});

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
);

app.listen(5000, () => console.log("Server running"));
```
