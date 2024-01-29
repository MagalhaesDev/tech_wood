-- CreateTable
CREATE TABLE "invetorys" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "department" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "grup" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "model" DECIMAL NOT NULL,
    "quantity" DECIMAL NOT NULL,
    "state" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value_un" TEXT NOT NULL,
    "date_buy" DATETIME,
    "date_end" DATETIME
);
