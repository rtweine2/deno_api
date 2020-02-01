const env = Deno.env();
export const DB_PATH = env.DB_PATH || "./db/users.json";
export const APP_HOST = env.APP_HOST || "127.0.0.1";
export const APP_PORT = env.APP_PORT || 5000;