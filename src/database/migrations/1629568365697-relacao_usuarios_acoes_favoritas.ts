import {MigrationInterface, QueryRunner} from "typeorm";

export class relacaoUsuariosAcoesFavoritas1629568365697 implements MigrationInterface {
    name = 'relacaoUsuariosAcoesFavoritas1629568365697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario_acoes_favoritas_acao" ("usuarioId" integer NOT NULL, "acaoId" integer NOT NULL, CONSTRAINT "PK_b63e75f0a8ecf636469257d5f79" PRIMARY KEY ("usuarioId", "acaoId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_610cc8f29fbd1da61c76cb077a" ON "usuario_acoes_favoritas_acao" ("usuarioId") `);
        await queryRunner.query(`CREATE INDEX "IDX_356573dd1702a1d2d441d6e74b" ON "usuario_acoes_favoritas_acao" ("acaoId") `);
        await queryRunner.query(`ALTER TABLE "usuario_acoes_favoritas_acao" ADD CONSTRAINT "FK_610cc8f29fbd1da61c76cb077a7" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "usuario_acoes_favoritas_acao" ADD CONSTRAINT "FK_356573dd1702a1d2d441d6e74be" FOREIGN KEY ("acaoId") REFERENCES "acao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario_acoes_favoritas_acao" DROP CONSTRAINT "FK_356573dd1702a1d2d441d6e74be"`);
        await queryRunner.query(`ALTER TABLE "usuario_acoes_favoritas_acao" DROP CONSTRAINT "FK_610cc8f29fbd1da61c76cb077a7"`);
        await queryRunner.query(`DROP INDEX "IDX_356573dd1702a1d2d441d6e74b"`);
        await queryRunner.query(`DROP INDEX "IDX_610cc8f29fbd1da61c76cb077a"`);
        await queryRunner.query(`DROP TABLE "usuario_acoes_favoritas_acao"`);
    }

}
