/*
  Warnings:

  - You are about to drop the column `displayName` on the `profile` table. All the data in the column will be lost.
  - Added the required column `title` to the `profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "profile" DROP COLUMN "displayName",
ADD COLUMN     "title" TEXT NOT NULL;
