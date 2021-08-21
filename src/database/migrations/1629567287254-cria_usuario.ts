import {MigrationInterface, QueryRunner} from "typeorm";

export class criaUsuario1629567287254 implements MigrationInterface {
    name = 'criaUsuario1629567287254'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "endereco" character varying NOT NULL, "cep" integer NOT NULL, "estado" character varying NOT NULL, "cidade" character varying NOT NULL, "numeroCasa" character varying NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "complemento" character varying NOT NULL, "imagem" character varying NOT NULL, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
