import clientPromise from "../../lib/mongo_connection";
export default async function addCourseToHistory(
  { query: { email, title, provider } },
  res
) {
  const client = await clientPromise;
  const db = client.db("guidr");
  const collection = db.collection("course_history");
  await collection.insertOne({
    email,
    title,
    provider,
    completed: false,
  });
  res.json({ status: "completed" });
}
