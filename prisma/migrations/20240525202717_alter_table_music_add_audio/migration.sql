/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `audio` to the `music` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `album` DROP FOREIGN KEY `album_categoryId_fkey`;

-- AlterTable
ALTER TABLE `music` ADD COLUMN `audio` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Category`;

-- CreateTable
CREATE TABLE `category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `album` ADD CONSTRAINT `album_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
