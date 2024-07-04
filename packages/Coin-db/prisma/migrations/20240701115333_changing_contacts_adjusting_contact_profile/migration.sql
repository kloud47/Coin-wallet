-- DropForeignKey
ALTER TABLE "contacts" DROP CONSTRAINT "contacts_contactProfile_fkey";

-- AlterTable
ALTER TABLE "contacts" ALTER COLUMN "contactProfile" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_contactProfile_fkey" FOREIGN KEY ("contactProfile") REFERENCES "User"("profile_url") ON DELETE SET NULL ON UPDATE CASCADE;
