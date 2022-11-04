import clientPromise from "../../lib/mongo_connection";
export default async function getCourseHistory({ query: { email } }, res) {
  const client = await clientPromise;
  const db = client.db("guidr");
  const collection = db.collection("course_history");
  const data = await collection.find({ email }).toArray();
  res.json({ data });
}
