import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1762196674019 implements MigrationInterface {
    name = 'NewMigration1762196674019'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`network_data\` DROP COLUMN \`timestamp\``);
        await queryRunner.query(`ALTER TABLE \`network_data\` ADD \`wifi_signal_strength\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`network_data\` CHANGE \`status\` \`status\` tinyint NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`network_data\` CHANGE \`status\` \`status\` tinyint NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`network_data\` DROP COLUMN \`wifi_signal_strength\``);
        await queryRunner.query(`ALTER TABLE \`network_data\` ADD \`timestamp\` varchar(255) NOT NULL`);
    }

}
