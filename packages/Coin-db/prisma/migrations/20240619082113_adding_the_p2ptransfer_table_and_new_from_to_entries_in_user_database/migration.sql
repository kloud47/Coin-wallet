/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Balance` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "p2pTransfer" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "fromUserID" INTEGER NOT NULL,
    "toUserID" INTEGER NOT NULL,

    CONSTRAINT "p2pTransfer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Balance_userId_key" ON "Balance"("userId");

-- AddForeignKey
ALTER TABLE "p2pTransfer" ADD CONSTRAINT "p2pTransfer_fromUserID_fkey" FOREIGN KEY ("fromUserID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "p2pTransfer" ADD CONSTRAINT "p2pTransfer_toUserID_fkey" FOREIGN KEY ("toUserID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
