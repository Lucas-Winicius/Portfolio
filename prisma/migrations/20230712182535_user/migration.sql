-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "nick" TEXT NOT NULL,
    "pass" TEXT NOT NULL,
    "hex" TEXT NOT NULL,
    "appetizer" INTEGER NOT NULL,
    "tempUser" BOOLEAN NOT NULL,
    "uses" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_nick_key" ON "user"("nick");

-- CreateIndex
CREATE UNIQUE INDEX "user_hex_key" ON "user"("hex");
