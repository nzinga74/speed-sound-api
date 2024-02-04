-- AddForeignKey
ALTER TABLE `reserves` ADD CONSTRAINT `reserves_propertyId_fkey` FOREIGN KEY (`propertyId`) REFERENCES `properties`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
