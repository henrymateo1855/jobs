// src/db/applicantsRepo.ts
import { db } from "./index";
import { applicant } from "./schema";
import { eq } from "drizzle-orm";

// ✅ Create
export async function createApplicant(data: typeof applicant.$inferInsert) {
  const [inserted] = await db.insert(applicant).values(data).returning();
  return inserted;
}

// ✅ Read (all)
export async function getAllApplicants() {
  return db.select().from(applicant);
}

// ✅ Read (by ID)
export async function getApplicantById(id: string) {
  const [record] = await db
    .select()
    .from(applicant)
    .where(eq(applicant.id, id));
  return record;
}

// ✅ Update
export async function updateApplicant(
  id: string,
  updates: Partial<typeof applicant.$inferInsert>
) {
  const [updated] = await db
    .update(applicant)
    .set(updates)
    .where(eq(applicant.id, id))
    .returning();
  return updated;
}

// ✅ Delete
export async function deleteApplicant(id: string) {
  const [deleted] = await db
    .delete(applicant)
    .where(eq(applicant.id, id))
    .returning();
  return deleted;
}
