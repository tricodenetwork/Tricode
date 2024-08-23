const fetchGraphQLData = async (
  query,
  variables,
  network = "http://localhost:3000/api/graphql"
) => {
  try {
    const res = await fetch(network, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      redirect: "follow",

      body: JSON.stringify({ query, variables }),
    });
    const json = await res.json();
    if (json.errors) {
      throw new Error(json.errors[0].message);
    }
    return json.data;
  } catch (err) {
    throw err;
  }
};

export default fetchGraphQLData;
