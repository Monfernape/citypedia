export const DATABASE_NAME = "citypedia";
export const DB_COLLECTIONS = {
  CITIES: "cities",
} as const;
export const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}`;
export const DB_OPTIONS = {};