import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { getDataSource } from "./database";
import { CountryResolver } from "./resolver/countryResolver";
import { startStandaloneServer } from "@apollo/server/standalone";

const PORT = 4000;
const startApolloServer = async () => {

  const schema = await buildSchema({
    resolvers: [CountryResolver],
    validate: true,
  });
  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen : { port: PORT },
  });

  await getDataSource();
  console.log(`Server ready at ${url} 🚀`)
};

startApolloServer();
