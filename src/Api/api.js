// api.js
import axios from "axios";

const URL = "https://bored-api.appbrewery.com/random"; // Original URL

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
    throw err; // Re-throw the error for handling in the component
  }
};
