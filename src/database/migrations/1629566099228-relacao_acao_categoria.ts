import {MigrationInterface, QueryRunner} from "typeorm";

export class relacaoAcaoCategoria1629566099228 implements MigrationInterface {
    name = 'relacaoAcaoCategoria1629566099228'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "acao_categorias_categoria" ("acaoId" integer NOT NULL, "categoriaId" integer NOT NULL, CONSTRAINT "PK_2936b52f061e47080567639f944" PRIMARY KEY ("acaoId", "categoriaId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b94e031c10a80b54561998ca3f" ON "acao_categorias_categoria" ("acaoId") `);
        await queryRunner.query(`CREATE INDEX "IDX_56d98cf2e28b1c4d4a9f8b6549" ON "acao_categorias_categoria" ("categoriaId") `);
        await queryRunner.query(`ALTER TABLE "acao_categorias_categoria" ADD CONSTRAINT "FK_b94e031c10a80b54561998ca3f3" FOREIGN KEY ("acaoId") REFERENCES "acao"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "acao_categorias_categoria" ADD CONSTRAINT "FK_56d98cf2e28b1c4d4a9f8b65497" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "acao_categorias_categoria" DROP CONSTRAINT "FK_56d98cf2e28b1c4d4a9f8b65497"`);
        await queryRunner.query(`ALTER TABLE "acao_categorias_categoria" DROP CONSTRAINT "FK_b94e031c10a80b54561998ca3f3"`);
        await queryRunner.query(`DROP INDEX "IDX_56d98cf2e28b1c4d4a9f8b6549"`);
        await queryRunner.query(`DROP INDEX "IDX_b94e031c10a80b54561998ca3f"`);
        await queryRunner.query(`DROP TABLE "acao_categorias_categoria"`);
    }

}
