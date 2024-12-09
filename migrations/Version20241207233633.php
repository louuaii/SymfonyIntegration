<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241207233633 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add avatar for user and change skills to string';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE users ADD avatar LONGTEXT DEFAULT NULL NULL AFTER email, CHANGE skills skills VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `users` DROP avatar, CHANGE skills skills JSON DEFAULT NULL');
    }
}
