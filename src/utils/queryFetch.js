export async function queryFetch(query) {
  const graphqlAPI = import.meta.env.STRAPI_API + "/graphql";
  const response = await fetch(graphqlAPI, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
    }),
  });
  const data = await response.json();
  return data;
}
