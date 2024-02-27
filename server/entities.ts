export type City = {
  _id: string; // MongoDB ObjectId
  city: string;
  state_id: string;
  state_name: string;
  county_fips: number;
  county_name: string;
  lat: number;
  lng: number;
  population: number;
  density: number;
  timezone: string;
  ranking: number;
  zips: string;
  id: number;
};
