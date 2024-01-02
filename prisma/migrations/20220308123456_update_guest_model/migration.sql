-- prisma/migrations/20220308123456_update_guest_model.sql

-- Drop index on email (if it exists)
DROP INDEX IF EXISTS "Guest_email_key";

-- Add unique constraint on email and name
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_email_name_unique" UNIQUE ("email", "name");
