'use server'
import { DATABASE_NAME, DB_COLLECTIONS } from "@/utils/constants";
import getDBClient from "./db";
import { City } from "./entities";

export async function getCityByQuery(query: string) {
  if (!query) {
    return [];
  }
  try {
    const client = await getDBClient();
    console.log({ client })
    const db = client.db(DATABASE_NAME);
    const collection = db.collection<City>(DB_COLLECTIONS.CITIES);
    console.log({ db, collection})
    return collection
      .find({ city: { $regex: new RegExp(query.toLowerCase(), "i") } })
      .limit(10)
      .toArray()
  } catch (error) {
    console.error("Error fetching city by query", error);
    throw error;
  }
}
