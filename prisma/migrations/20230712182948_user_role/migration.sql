-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'TESTER');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'TESTER';
