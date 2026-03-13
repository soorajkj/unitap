/*
  Warnings:

  - You are about to drop the column `userId` on the `handle` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `link` table. All the data in the column will be lost.
  - You are about to drop the column `displayUsername` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profileId,platformId]` on the table `handle` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profileId` to the `handle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `link` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "handle" DROP CONSTRAINT "handle_userId_fkey";

-- DropForeignKey
ALTER TABLE "link" DROP CONSTRAINT "link_userId_fkey";

-- DropIndex
DROP INDEX "handle_platformId_userId_key";

-- DropIndex
DROP INDEX "handle_userId_order_idx";

-- DropIndex
DROP INDEX "link_userId_order_idx";

-- DropIndex
DROP INDEX "profile_userId_key";

-- DropIndex
DROP INDEX "user_username_key";

-- AlterTable
ALTER TABLE "handle" DROP COLUMN "userId",
ADD COLUMN     "profileId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "link" DROP COLUMN "userId",
ADD COLUMN     "profileId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "displayUsername",
DROP COLUMN "username";

-- CreateIndex
CREATE INDEX "handle_profileId_order_idx" ON "handle"("profileId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "handle_profileId_platformId_key" ON "handle"("profileId", "platformId");

-- CreateIndex
CREATE INDEX "link_profileId_order_idx" ON "link"("profileId", "order");

-- AddForeignKey
ALTER TABLE "handle" ADD CONSTRAINT "handle_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "link" ADD CONSTRAINT "link_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
