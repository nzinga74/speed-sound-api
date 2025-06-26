-- CreateIndex
CREATE FULLTEXT INDEX `users_name_idx` ON `users`(`name`);

-- CreateIndex
CREATE FULLTEXT INDEX `users_lastname_idx` ON `users`(`lastname`);
