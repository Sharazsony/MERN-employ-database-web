import { MongoClient, ServerApiVersion } from "mongodb";

const URI = process.env.MONGO_URI || "mongodb://mongodb:27017/mydatabase";

const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
}

await connectDB();

let db = client.db("employees");
export default db;
