const LEMON_SQUEEZY_ENDPOINT = "https://api.lemonsqueezy.com/v1";


/**
 * 
 * @param {string} endpoint 
 * @param {string} method 
 * @param {string} data 
 * @returns {object}
 */
const lemonSqueezyApiInstance = async (endpoint, method = "GET", data = null) => {
    const url = `${LEMON_SQUEEZY_ENDPOINT}${endpoint}`;

    console.log(url, data, method)
    // return url
    const headers = {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`,
    };

    const options = {
        method,
        headers,
    };

    if (data && method !== "GET") {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Re-throw the error for further handling
    }
};

export default lemonSqueezyApiInstance;