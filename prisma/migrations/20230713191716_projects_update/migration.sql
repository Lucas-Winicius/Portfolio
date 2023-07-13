/*
  Warnings:

  - A unique constraint covering the columns `[hexCode]` on the table `projects` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hexCode` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Visibility" AS ENUM ('INVISIBLE', 'VISIBLE');

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "hexCode" TEXT NOT NULL,
ADD COLUMN     "visibility" "Visibility" NOT NULL DEFAULT 'VISIBLE';

-- CreateIndex
CREATE UNIQUE INDEX "projects_hexCode_key" ON "projects"("hexCode");
