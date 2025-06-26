-- DropIndex
DROP INDEX `users_lastname_idx` ON `users`;

-- CreateIndex
CREATE INDEX `users_id_idx` ON `users`(`id`);

-- CreateIndex
CREATE FULLTEXT INDEX `users_name_lastname_idx` ON `users`(`name`, `lastname`);
