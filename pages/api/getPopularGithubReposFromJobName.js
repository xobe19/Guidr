import axios from "axios";
export default async function getPopularGithubReposFromJobName(
  { query: { jobName } },
  res
) {
  const axiosResponse = await axios.get(
    `https://api.github.com/search/repositories?q=topic:${jobName}`,
    {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json",
      },
    }
  );
  res.json(axiosResponse.data);
}
