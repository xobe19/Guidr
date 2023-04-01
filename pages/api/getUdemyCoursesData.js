// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "../../lib/mongo_connection";
export default async function getUdemyCoursesData(
  { query: { jobName, limit } },
  res
) {
  console.log(jobName, limit);
  const client = await clientPromise;
  const db = client.db("guidr");
  const collection = db.collection("udemy");

  const res2 = await collection.aggregate(
    [
  {
    $search: {
      index: "udemy",
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

  console.log("hii");
  console.log(res2);

  // const result = await collection
  //   .find({ $text: { $search: jobName } })
  //   .limit(limit * 1)
  //   .toArray();
  res.json(res2);
}
