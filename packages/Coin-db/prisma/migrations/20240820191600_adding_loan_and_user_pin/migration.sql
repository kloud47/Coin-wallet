-- DropForeignKey
ALTER TABLE "Split" DROP CONSTRAINT "Split_splitHost_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "loanPending" TEXT,
ADD COLUMN     "loans" INTEGER[],
ADD COLUMN     "pin" INTEGER NOT NULL DEFAULT 123;

-- CreateTable
CREATE TABLE "Loan" (
    "id" SERIAL NOT NULL,
    "loanID" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "loanTo" INTEGER NOT NULL,
    "duration" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Loan_loanID_key" ON "Loan"("loanID");

-- AddForeignKey
ALTER TABLE "Split" ADD CONSTRAINT "Split_splitID_fkey" FOREIGN KEY ("splitID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_loanID_fkey" FOREIGN KEY ("loanID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
