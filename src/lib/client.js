import { Account, Client, TablesDB } from "appwrite";

export const appwriteConfig = {
  apiKey: import.meta.env.VITE_APPWRITE_API_KEY,
  devKey: import.meta.env.VITE_APPWRITE_DEV_KEY,
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  usersTableId: import.meta.env.VITE_APPWRITE_USERS_TABLE_ID,
  booksTableId: import.meta.env.VITE_APPWRITE_BOOKS_TABLE_ID,
};

export const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setDevKey(appwriteConfig.devKey);

export const account = new Account(client);
export const tableDB = new TablesDB(client);
