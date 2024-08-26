-- DropForeignKey
ALTER TABLE "Split" DROP CONSTRAINT "Split_splitID_fkey";

-- CreateTable
CREATE TABLE "Members" (
    "id" SERIAL NOT NULL,
    "splitID" INTEGER NOT NULL,
    "contactName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "status" "SplitStatus" NOT NULL,
    "amountOwed" INTEGER NOT NULL,

    CONSTRAINT "Members_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Members_phone_key" ON "Members"("phone");

-- AddForeignKey
ALTER TABLE "Members" ADD CONSTRAINT "Members_splitID_fkey" FOREIGN KEY ("splitID") REFERENCES "Split"("splitID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Split" ADD CONSTRAINT "Split_splitHost_fkey" FOREIGN KEY ("splitHost") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
