export async function queryFetch(query, queryVar) {
  const graphqlAPI = import.meta.env.STRAPI_API + "/graphql";
  const response = await fetch(graphqlAPI, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables: queryVar
    }),
  });
  return await response.json();
}
