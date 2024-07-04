/*
  Warnings:

  - A unique constraint covering the columns `[profile_url]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "contacts" (
    "id" SERIAL NOT NULL,
    "givenName" TEXT,
    "ContactPhone" TEXT NOT NULL,
    "contactName" TEXT NOT NULL,
    "contactProfile" TEXT NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_profile_url_key" ON "User"("profile_url");

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_contactName_fkey" FOREIGN KEY ("contactName") REFERENCES "User"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_ContactPhone_fkey" FOREIGN KEY ("ContactPhone") REFERENCES "User"("phone") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_contactProfile_fkey" FOREIGN KEY ("contactProfile") REFERENCES "User"("profile_url") ON DELETE RESTRICT ON UPDATE CASCADE;
