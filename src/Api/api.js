import axios from "axios";

const URL =
  import.meta.env.MODE === "development"
    ? "https://bored-api.appbrewery.com/random"
    : "/api/bored";

export const getBoredData = async () => {
  try {
    const response = await axios.get(URL);
    const data = response.data;
    return {
      ...data,
      kidFriendlyStatus: data.kidFriendly ? "Friendly" : "NotFriendly",
    };
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};
