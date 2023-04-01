import { stat } from "fs";
import clientPromise from "../../lib/mongo_connection";
export default async function getExtraDataforJob(
  { query: { jobName, limit } },
  res
) {
  const client = await clientPromise;
  const db = client.db("guidr");
  const collection = db.collection("indeed_jobs_data");
  // const result = await collection
  //   .find({ $text: { $search: jobName } })
  //   .limit(limit * 1)
  //   .toArray();

  const res2 = await collection.aggregate(
    [
  {
    $search: {
      index: "jobs_index",
      text: {
        query: jobName,
        path: {
          wildcard: "*"
        }
      }
    }
  }
]
  ).limit(10).toArray();

  res.json({res2});
}
