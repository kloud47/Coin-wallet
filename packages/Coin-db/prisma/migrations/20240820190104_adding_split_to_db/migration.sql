-- CreateEnum
CREATE TYPE "SplitStatus" AS ENUM ('pending', 'complete');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "splitPending" INTEGER,
ADD COLUMN     "splits" INTEGER[];

-- CreateTable
CREATE TABLE "Split" (
    "id" SERIAL NOT NULL,
    "splitID" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "splitHost" INTEGER NOT NULL,
    "members" TEXT[],
    "status" "SplitStatus" NOT NULL,

    CONSTRAINT "Split_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Split_splitID_key" ON "Split"("splitID");

-- AddForeignKey
ALTER TABLE "Split" ADD CONSTRAINT "Split_splitHost_fkey" FOREIGN KEY ("splitHost") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
