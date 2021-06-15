import ApolloClient from "apollo-boost";
export const getClient = (token) => {
  return new ApolloClient({
    uri: `${process.env.BASE_URL}/graphql`,
    request: (operation) => {
      if (token) {
        operation.setContext({
          headers: {
            Authorization: `${token}`,
          },
        });
      }
    },
    onError: (e) => {
      // console.log(e);
    },
  });
};
