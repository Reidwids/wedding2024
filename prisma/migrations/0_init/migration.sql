-- CreateTable
CREATE TABLE "Guest" (
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rsvp" BOOLEAN NOT NULL DEFAULT false,
    "rspvDate" TIMESTAMP(3),
    "groupId" TEXT
);

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guest_email_key" ON "Guest"("email");

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

