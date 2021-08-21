import {MigrationInterface, QueryRunner} from "typeorm";

export class relacaoUsuariosEntidadesFavoritas1629580336943 implements MigrationInterface {
    name = 'relacaoUsuariosEntidadesFavoritas1629580336943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario_entidades_favoritas_entidades" ("usuarioId" integer NOT NULL, "entidadesId" integer NOT NULL, CONSTRAINT "PK_f3b59fe5665ccfc7556f419ffcb" PRIMARY KEY ("usuarioId", "entidadesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5a49f19840be9337c1622dc77a" ON "usuario_entidades_favoritas_entidades" ("usuarioId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b888e899c116717810fd7ad004" ON "usuario_entidades_favoritas_entidades" ("entidadesId") `);
        await queryRunner.query(`ALTER TABLE "public"."entidades" DROP COLUMN "isPessoa"`);
        await queryRunner.query(`ALTER TABLE "usuario_entidades_favoritas_entidades" ADD CONSTRAINT "FK_5a49f19840be9337c1622dc77a3" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "usuario_entidades_favoritas_entidades" ADD CONSTRAINT "FK_b888e899c116717810fd7ad0047" FOREIGN KEY ("entidadesId") REFERENCES "entidades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario_entidades_favoritas_entidades" DROP CONSTRAINT "FK_b888e899c116717810fd7ad0047"`);
        await queryRunner.query(`ALTER TABLE "usuario_entidades_favoritas_entidades" DROP CONSTRAINT "FK_5a49f19840be9337c1622dc77a3"`);
        await queryRunner.query(`ALTER TABLE "public"."entidades" ADD "isPessoa" boolean NOT NULL`);
        await queryRunner.query(`DROP INDEX "IDX_b888e899c116717810fd7ad004"`);
        await queryRunner.query(`DROP INDEX "IDX_5a49f19840be9337c1622dc77a"`);
        await queryRunner.query(`DROP TABLE "usuario_entidades_favoritas_entidades"`);
    }

}
