const { ApolloServer, makeExecutableSchema } = require("apollo-server-koa");
const myGraphQLTypes = require("./schema/Types");
const myGraphQLResolvers = require("./schema/Resolvers");
const jwt = require("jsonwebtoken");

const schema = makeExecutableSchema({
  typeDefs: [myGraphQLTypes],
  resolvers: { ...myGraphQLResolvers },
});

const server = new ApolloServer({
  schema,
  //   context: ({ ctx }) => {
  //     try {
  //       const token = ctx.req.headers.authorization;
  //       const user = jwt.verify(token, process.env.TOKEN_SECRET);
  //       return {
  //         user,
  //       };
  //     } catch (error) {
  //       throw new AuthenticationError("You're are not authenticated");
  //     }
  //   },
});

module.exports = server;
