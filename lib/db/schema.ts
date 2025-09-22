import { pgTable, varchar, uuid, timestamp } from "drizzle-orm/pg-core";

export const applicant = pgTable("applicant", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  email: varchar("email").notNull(),
  phone: varchar("phone").notNull(),
  dob: varchar("dob").notNull(),
  location: varchar("location").notNull(),
  device: varchar("device").notNull(),
  internet: varchar("internet").notNull(),
  availability: varchar("availability").notNull(),
  experience: varchar("experience").notNull(),
  s3Url: varchar("s3_url"),
  note: varchar("note").notNull(),
});
