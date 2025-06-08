export default async function handler(req, res) {
  const response = await fetch("https://bored-api.appbrewery.com/random");
  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
