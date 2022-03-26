import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class migration1_0_01648285203853 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'account',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid',
                    isNullable: false,
                    length: '36',
                },
                {
                    name: 'username',
                    type: 'varchar',
                    length: '20',
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'is_deleted',
                    type: 'int',
                    default: 0,
                },
                {
                    name: 'enable',
                    type: 'int',
                    default: 1,
                },
                {
                    name: 'is_actived',
                    type: 'int',
                    default: 0,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    isNullable: true,
                },
            ],
        }), true);

        await queryRunner.query(`
            INSERT INTO \`account\` (\`id\`, \`username\`, \`password\`, \`email\`)
            VALUES ('925dbc08-bc1f-4185-95b8-7ceb431ca322', 'admin', '1', 'admin@moy.com');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }
}
