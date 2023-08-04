-- CreateTable
CREATE TABLE "Guest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guest_id_key" ON "Guest"("id");

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_id_fkey" FOREIGN KEY ("id") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
