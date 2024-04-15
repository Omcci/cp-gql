import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";

const startApolloServer = async () => {
  const schema = await buildSchema({
    resolvers: [],
    validate: true,
  });
  const server = new ApolloServer({ schema });
};
