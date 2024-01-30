-- CreateTable
CREATE TABLE "Inventorys" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ticket" INTEGER NOT NULL,
    "department" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "grup" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value_un" TEXT NOT NULL,
    "date_buy" DATETIME,
    "date_end" DATETIME
);
