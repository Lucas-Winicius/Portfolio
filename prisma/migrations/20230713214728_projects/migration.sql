/*
  Warnings:

  - You are about to drop the `_projectsTotechnologies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_projectsTotechnologies" DROP CONSTRAINT "_projectsTotechnologies_A_fkey";

-- DropForeignKey
ALTER TABLE "_projectsTotechnologies" DROP CONSTRAINT "_projectsTotechnologies_B_fkey";

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "technologies" TEXT[];

-- DropTable
DROP TABLE "_projectsTotechnologies";
