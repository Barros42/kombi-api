import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1762110443505 implements MigrationInterface {
    name = 'NewMigration1762110443505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`gps_data\` DROP COLUMN \`lat\``);
        await queryRunner.query(`ALTER TABLE \`gps_data\` DROP COLUMN \`long\``);
        await queryRunner.query(`ALTER TABLE \`gps_data\` DROP COLUMN \`num_sats\``);
        await queryRunner.query(`ALTER TABLE \`gps_data\` ADD \`latitude\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`gps_data\` ADD \`longitude\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`gps_data\` ADD \`satellites_number\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`gps_data\` DROP COLUMN \`satellites_number\``);
        await queryRunner.query(`ALTER TABLE \`gps_data\` DROP COLUMN \`longitude\``);
        await queryRunner.query(`ALTER TABLE \`gps_data\` DROP COLUMN \`latitude\``);
        await queryRunner.query(`ALTER TABLE \`gps_data\` ADD \`num_sats\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`gps_data\` ADD \`long\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`gps_data\` ADD \`lat\` varchar(255) NOT NULL`);
    }

}
