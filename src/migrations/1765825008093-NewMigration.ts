import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1765825008093 implements MigrationInterface {
    name = 'NewMigration1765825008093'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`telemetry_data\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`device_id\` varchar(255) NOT NULL, \`uptime_seconds\` int NOT NULL, \`kernel_warnings\` int NOT NULL, \`soc_temperature_celsius\` float NOT NULL, \`soc_temp_max_celsius\` float NOT NULL, \`overheat_events\` int NOT NULL, \`cpu_usage_percent\` float NOT NULL, \`load_avg_1m\` float NOT NULL, \`cpu_freq_mhz\` int NOT NULL, \`ram_used_mb\` int NOT NULL, \`ram_total_mb\` int NOT NULL, \`swap_used_mb\` int NOT NULL, \`swap_total_mb\` int NOT NULL, \`sd_free_mb\` int NOT NULL, \`sd_total_mb\` int NOT NULL, \`sd_usage_percent\` float NOT NULL, \`fs_readonly\` tinyint NOT NULL, \`disk_read_bytes\` bigint NOT NULL, \`disk_write_bytes\` bigint NOT NULL, \`io_wait_percent\` float NOT NULL, \`undervoltage_detected\` tinyint NOT NULL, \`throttling_detected\` tinyint NOT NULL, \`throttled_flags\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`telemetry_data\``);
    }

}
