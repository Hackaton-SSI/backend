import {MigrationInterface, QueryRunner} from "typeorm";

export class arrumandoEnderecos1629568796979 implements MigrationInterface {
    name = 'arrumandoEnderecos1629568796979'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."entidades" DROP COLUMN "latitude"`);
        await queryRunner.query(`ALTER TABLE "public"."entidades" DROP COLUMN "longitude"`);
        await queryRunner.query(`ALTER TABLE "public"."usuario" DROP COLUMN "latitude"`);
        await queryRunner.query(`ALTER TABLE "public"."usuario" DROP COLUMN "longitude"`);
        await queryRunner.query(`ALTER TABLE "public"."entidades" ADD "cep" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."entidades" ADD "estado" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."entidades" ADD "cidade" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."entidades" ADD "numeroCasa" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."entidades" ADD "complemento" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."entidades" DROP COLUMN "complemento"`);
        await queryRunner.query(`ALTER TABLE "public"."entidades" DROP COLUMN "numeroCasa"`);
        await queryRunner.query(`ALTER TABLE "public"."entidades" DROP COLUMN "cidade"`);
        await queryRunner.query(`ALTER TABLE "public"."entidades" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "public"."entidades" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "public"."usuario" ADD "longitude" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."usuario" ADD "latitude" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."entidades" ADD "longitude" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."entidades" ADD "latitude" integer NOT NULL`);
    }

}
