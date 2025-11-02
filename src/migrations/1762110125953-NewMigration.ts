import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1762110125953 implements MigrationInterface {
    name = 'NewMigration1762110125953'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`gps_data\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`timestamp\` varchar(255) NOT NULL, \`lat\` varchar(255) NOT NULL, \`long\` varchar(255) NOT NULL, \`altitude\` float NOT NULL, \`gps_quality\` int NOT NULL, \`date_stamp\` varchar(255) NOT NULL, \`status\` varchar(1) NOT NULL, \`num_sats\` int NOT NULL, \`speed\` float NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`gps_data\``);
    }

}
