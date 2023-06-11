-- CreateTable
CREATE TABLE "courses" (
    "id" SERIAL NOT NULL,
    "courceName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "institution" TEXT,
    "institutionImage" TEXT,
    "conclusionDate" TIMESTAMP(3) NOT NULL,
    "certificate" TEXT,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "technologies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "technologies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "social_pkey" PRIMARY KEY ("id")
);
