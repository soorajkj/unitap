/*
  Warnings:

  - Made the column `icon` on table `platform` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "link" ADD COLUMN     "favorite" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "platform" ALTER COLUMN "icon" SET NOT NULL;
