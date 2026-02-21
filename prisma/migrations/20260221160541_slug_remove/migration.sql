/*
  Warnings:

  - You are about to drop the `slug` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "slug" DROP CONSTRAINT "slug_handleId_fkey";

-- DropForeignKey
ALTER TABLE "slug" DROP CONSTRAINT "slug_linkId_fkey";

-- DropTable
DROP TABLE "slug";
