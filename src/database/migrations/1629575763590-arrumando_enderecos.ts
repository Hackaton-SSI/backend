import {MigrationInterface, QueryRunner} from "typeorm";

export class arrumandoEnderecos1629575763590 implements MigrationInterface {
    name = 'arrumandoEnderecos1629575763590'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."acao" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "public"."acao" ALTER COLUMN "updatedAt" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."acao" ALTER COLUMN "updatedAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "public"."acao" ALTER COLUMN "createdAt" DROP DEFAULT`);
    }

}
