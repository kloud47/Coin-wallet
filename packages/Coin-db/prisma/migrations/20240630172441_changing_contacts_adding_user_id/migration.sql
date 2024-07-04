/*
  Warnings:

  - A unique constraint covering the columns `[userID]` on the table `contacts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userID` to the `contacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contacts" ADD COLUMN     "userID" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "contacts_userID_key" ON "contacts"("userID");
