-- CreateTable
CREATE TABLE "Actives" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "category" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "date_buy" TEXT NOT NULL,
    "value_buy" TEXT NOT NULL,
    "nf" DECIMAL NOT NULL,
    "rate" DECIMAL NOT NULL,
    "description" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "life_util" TEXT NOT NULL
);
