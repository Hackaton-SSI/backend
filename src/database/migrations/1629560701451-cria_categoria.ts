import {MigrationInterface, QueryRunner} from "typeorm";

export class criaCategoria1629560701451 implements MigrationInterface {
    name = 'criaCategoria1629560701451'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categoria" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cor" character varying NOT NULL, "imagem" character varying NOT NULL, CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "categoria"`);
    }

}
