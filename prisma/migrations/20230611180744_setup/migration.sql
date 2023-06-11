-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "githubLink" TEXT NOT NULL,
    "projectLink" TEXT,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_projectsTotechnologies" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_projectsTotechnologies_AB_unique" ON "_projectsTotechnologies"("A", "B");

-- CreateIndex
CREATE INDEX "_projectsTotechnologies_B_index" ON "_projectsTotechnologies"("B");

-- AddForeignKey
ALTER TABLE "_projectsTotechnologies" ADD CONSTRAINT "_projectsTotechnologies_A_fkey" FOREIGN KEY ("A") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_projectsTotechnologies" ADD CONSTRAINT "_projectsTotechnologies_B_fkey" FOREIGN KEY ("B") REFERENCES "technologies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
