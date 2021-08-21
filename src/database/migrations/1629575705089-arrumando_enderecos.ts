import {MigrationInterface, QueryRunner} from "typeorm";

export class arrumandoEnderecos1629575705089 implements MigrationInterface {
    name = 'arrumandoEnderecos1629575705089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."acao" DROP COLUMN "latitude"`);
        await queryRunner.query(`ALTER TABLE "public"."acao" DROP COLUMN "longitude"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."acao" ADD "longitude" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."acao" ADD "latitude" integer NOT NULL`);
    }

}
