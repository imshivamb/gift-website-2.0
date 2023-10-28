import { Store } from "@/types/types";

const URL = `http://localhost:3001/api`;

const getStores = async (): Promise<Store[]> => {
  const res = await fetch(URL);
  return res.json();
};

export default getStores;
