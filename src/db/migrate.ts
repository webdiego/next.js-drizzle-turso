import { migrate } from "drizzle-orm/libsql/migrator";
import { client, db } from "./index";

await migrate(db, { migrationsFolder: "drizzle" });

client.close();
