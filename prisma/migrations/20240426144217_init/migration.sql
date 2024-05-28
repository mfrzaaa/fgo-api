/*
  Warnings:

  - The primary key for the `Illustrator` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Servant` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Servant" DROP CONSTRAINT "Servant_illustratorId_fkey";

-- AlterTable
ALTER TABLE "Illustrator" DROP CONSTRAINT "Illustrator_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Illustrator_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Illustrator_id_seq";

-- AlterTable
ALTER TABLE "Servant" DROP CONSTRAINT "Servant_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "illustratorId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Servant_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Servant_id_seq";

-- AddForeignKey
ALTER TABLE "Servant" ADD CONSTRAINT "Servant_illustratorId_fkey" FOREIGN KEY ("illustratorId") REFERENCES "Illustrator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
