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
