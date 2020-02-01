import { DB_PATH } from "../config.ts";
import { User } from "../models/user.ts";

export const fetchData = async (): Promise<User[]> => {
  const data = await Deno.readFile(DB_PATH);

  const decoder = new TextDecoder();
  const decodedData = decoder.decode(data);

  return JSON.parse(decodedData);
};