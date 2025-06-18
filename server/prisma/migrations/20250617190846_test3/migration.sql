/*
  Warnings:

  - You are about to drop the column `message` on the `Cards` table. All the data in the column will be lost.
  - Added the required column `category` to the `Board` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "category" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Cards" DROP COLUMN "message",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "owner" TEXT;
