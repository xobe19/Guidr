// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "../../lib/mongo_connection";
export default async function getCourseraCoursesData(
  { query: { jobName, limit } },
  res
) {
  const client = await clientPromise;
  const db = client.db("guidr");
  const collection = db.collection("coursera");


  const res2 = await collection.aggregate(
    [
  {
    $search: {
      index: "coursera_index",
      text: {
        query: jobName,
        path: {
          wildcard: "*"
        }
      }
    }
  }
]
  ).limit(limit * 1).toArray();


  // const result = await collection
  //   .find({ $text: { $search: jobName } })
  //   .limit(limit * 1)
  //   .toArray();
  res.json(res2);
}
