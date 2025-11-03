import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1762180279320 implements MigrationInterface {
    name = 'NewMigration1762180279320'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`network_data\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`device_id\` varchar(255) NOT NULL, \`timestamp\` varchar(255) NOT NULL, \`status\` tinyint NOT NULL DEFAULT 0, \`local_ip\` varchar(255) NULL, \`public_ip\` varchar(255) NULL, \`ssid\` varchar(255) NULL, \`wifi_status\` tinyint NOT NULL DEFAULT 0, \`lte_status\` tinyint NOT NULL DEFAULT 0, \`bluetooth_status\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`network_data\``);
    }

}
