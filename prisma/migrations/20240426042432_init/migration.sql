-- CreateTable
CREATE TABLE "Servant" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "class" VARCHAR(255) NOT NULL,
    "npType" VARCHAR(255) NOT NULL,
    "illustratorId" INTEGER NOT NULL,

    CONSTRAINT "Servant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Illustrator" (
    "id" SERIAL NOT NULL,
    "fullname" VARCHAR(255) NOT NULL,

    CONSTRAINT "Illustrator_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Servant" ADD CONSTRAINT "Servant_illustratorId_fkey" FOREIGN KEY ("illustratorId") REFERENCES "Illustrator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
