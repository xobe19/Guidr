import { MongoClient } from "mongodb";

const srv = process.env.MONGO_SRV;
let client, clientPromise;
if (!global._mongoClientPromise) {
  client = new MongoClient(srv);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
