/*
  Warnings:

  - You are about to drop the column `skillId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `technologyId` on the `Skill` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_SkillToTechnology" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_SkillToTechnology_A_fkey" FOREIGN KEY ("A") REFERENCES "Skill" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_SkillToTechnology_B_fkey" FOREIGN KEY ("B") REFERENCES "Technology" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "desc_en" TEXT NOT NULL,
    "repository_url" TEXT NOT NULL,
    "deploy_url" TEXT NOT NULL,
    "thumbnail_url" TEXT NOT NULL,
    "fkCategoryId" INTEGER NOT NULL,
    CONSTRAINT "Project_fkCategoryId_fkey" FOREIGN KEY ("fkCategoryId") REFERENCES "ProjectCategory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("deploy_url", "desc", "desc_en", "fkCategoryId", "id", "name", "repository_url", "thumbnail_url") SELECT "deploy_url", "desc", "desc_en", "fkCategoryId", "id", "name", "repository_url", "thumbnail_url" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE TABLE "new_Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "name_en" TEXT NOT NULL
);
INSERT INTO "new_Skill" ("id", "name", "name_en") SELECT "id", "name", "name_en" FROM "Skill";
DROP TABLE "Skill";
ALTER TABLE "new_Skill" RENAME TO "Skill";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_SkillToTechnology_AB_unique" ON "_SkillToTechnology"("A", "B");

-- CreateIndex
CREATE INDEX "_SkillToTechnology_B_index" ON "_SkillToTechnology"("B");
