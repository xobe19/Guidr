import clientPromise from "../../lib/mongo_connection";
export default async function markCourseAsCompleted(
  { query: { email, title, provider } },
  res
) {
  const client = await clientPromise;
  const db = client.db("guidr");
  const collection = db.collection("course_history");
  await collection.deleteOne({ email, title, provider });
  await collection.insertOne({
    email,
    title,
    provider,
    completed: true,
  });
  res.json({ status: "completed" });
}
