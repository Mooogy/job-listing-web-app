export async function getJobListings() {
  const apiKey = process.env.FINDWORK_API_KEY;
  const url = `https://findwork.dev/api/jobs/?search=intern`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Token ${apiKey}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch jobs: ${response.statusText}`);
  }

  const data = await response.json();
  return data.results; // Assuming `results` contains the job listings
}
