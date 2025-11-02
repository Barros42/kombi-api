import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1762112330290 implements MigrationInterface {
    name = 'NewMigration1762112330290'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`gps_data\` ADD \`device_id\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`gps_data\` DROP COLUMN \`device_id\``);
    }

}
