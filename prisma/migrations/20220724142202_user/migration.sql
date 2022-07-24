-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'EMPLOYEE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "experience" INTEGER NOT NULL,
    "priceList" TEXT[],
    "description" TEXT NOT NULL,
    "availability" TEXT[],
    "employeeRatingId" INTEGER NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeRating" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "EmployeeRating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_employeeRatingId_key" ON "Employee"("employeeRatingId");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_employeeRatingId_fkey" FOREIGN KEY ("employeeRatingId") REFERENCES "EmployeeRating"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
