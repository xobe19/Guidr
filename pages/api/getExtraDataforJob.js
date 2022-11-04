import { stat } from "fs";
import clientPromise from "../../lib/mongo_connection";
export default async function getExtraDataforJob(
  { query: { jobName, limit } },
  res
) {
  const client = await clientPromise;
  const db = client.db("guidr");
  const collection = db.collection("indeed_jobs_data");
  const result = await collection
    .find({ $text: { $search: jobName } })
    .limit(limit * 1)
    .toArray();

  let salariesArray = await collection
    .find({ $text: { $search: jobName } })
    .toArray();
  salariesArray = salariesArray
    .map((ele) => ele["Salary"])
    .filter((ele) => ele != undefined);

  let averageSalary = 0;
  for (let i = 0; i < salariesArray.length; i++) {
    averageSalary += salariesArray[i];
  }
  averageSalary /= salariesArray.length;

  salariesArray.sort();

  let medianSalary = salariesArray[salariesArray.length / 2];
  let statesArray = await collection
    .find({ $text: { $search: jobName } })
    .toArray();
  statesArray = statesArray
    .map((ele) => ele["State"])
    .filter((ele) => ele != undefined && ele != "india");

  let statesMap = {};

  for (let i = 0; i < statesArray.length; i++) {
    if (statesMap[statesArray[i]]) statesMap[statesArray[i]]++;
    else statesMap[statesArray[i]] = 1;
  }

  res.json({ averageSalary, medianSalary, statesMap, result });
}
