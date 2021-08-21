import {MigrationInterface, QueryRunner} from "typeorm";

export class criaAcao1629565481995 implements MigrationInterface {
    name = 'criaAcao1629565481995'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "acao" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "endereco" character varying NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "descricao" character varying NOT NULL, "data" TIMESTAMP NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_cba660d5bb45e97dd083ea35687" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "acao"`);
    }

}
