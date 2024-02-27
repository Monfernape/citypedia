'use server'
import { DB_OPTIONS, MONGO_URI } from '@/utils/constants';
import { MongoClient } from 'mongodb'

if (!process.env.MONGO_CLUSTER) {
    throw new Error('Invalid/Missing environment variable: "MONGO_CLUSTER"');
  }

let client: MongoClient;
let DBClient: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(MONGO_URI, DB_OPTIONS);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  DBClient = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(MONGO_URI, DB_OPTIONS);
  DBClient = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default async function getDBClient() {
  return DBClient;
}