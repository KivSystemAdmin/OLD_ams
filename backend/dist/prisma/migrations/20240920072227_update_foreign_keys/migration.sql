/*
  Warnings:

  - Made the column `recurringClassId` on table `Class` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_recurringClassId_fkey";

-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "recurringClassId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_recurringClassId_fkey" FOREIGN KEY ("recurringClassId") REFERENCES "RecurringClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
