-- CreateTable
CREATE TABLE "Technology" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "hex_color" TEXT NOT NULL,
    "official_website" TEXT NOT NULL,
    "logo_url" TEXT NOT NULL,
    "is_backend" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Technology_name_key" ON "Technology"("name");
