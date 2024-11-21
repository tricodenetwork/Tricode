import { baseUrl } from "@/config/config";

const fetchGraphQLData = async (
  query,
  variables,
  network = `${baseUrl}api/graphql`
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
    // console.log(json.data);

    return json.data;
  } catch (err) {
    throw new Error(err);
  }
};

export default fetchGraphQLData;
