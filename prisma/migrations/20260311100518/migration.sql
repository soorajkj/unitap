/*
  Warnings:

  - You are about to drop the column `contactEmail` on the `profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profile" DROP COLUMN "contactEmail",
ADD COLUMN     "email" TEXT;
