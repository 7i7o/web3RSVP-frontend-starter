import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api.thegraph.com/subgraphs/name/7i7o/wbw3-web3rsvp",
    cache: new InMemoryCache(),
});

export default client;