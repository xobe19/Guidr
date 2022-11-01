// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "../../lib/mongo_connection";
export default async function getUdemyCoursesData(
  { query: { jobName, limit } },
  res
) {
  const client = await clientPromise;
  const db = client.db("guidr");
  const collection = db.collection("codecademy");
  const result = await collection
    .find({ $text: { $search: jobName } })
    .limit(limit * 1)
    .toArray();
  res.json(result);
}
