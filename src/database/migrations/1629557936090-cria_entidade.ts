import {MigrationInterface, QueryRunner} from "typeorm";

export class criaEntidade1629557936090 implements MigrationInterface {
    name = 'criaEntidade1629557936090'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "entidades" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "endereco" character varying NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "descricao" character varying NOT NULL, "emails" character varying array NOT NULL, "telefones" character varying array NOT NULL, "mantenedor" character varying NOT NULL, "categorias" character varying array NOT NULL, "isPessoa" boolean NOT NULL, CONSTRAINT "PK_4ceb23ee98193c241ee43c95111" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "entidades"`);
    }

}
