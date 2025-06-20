/*
  Warnings:

  - You are about to drop the column `boardId` on the `Cards` table. All the data in the column will be lost.
  - Added the required column `board_id` to the `Cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cards" DROP COLUMN "boardId",
ADD COLUMN     "board_id" INTEGER NOT NULL,
ALTER COLUMN "upvote" SET DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_board_id_fkey" FOREIGN KEY ("board_id") REFERENCES "Boards"("id") ON DELETE CASCADE ON UPDATE CASCADE;
