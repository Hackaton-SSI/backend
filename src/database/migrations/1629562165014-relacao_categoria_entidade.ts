import {MigrationInterface, QueryRunner} from "typeorm";

export class relacaoCategoriaEntidade1629562165014 implements MigrationInterface {
    name = 'relacaoCategoriaEntidade1629562165014'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "entidades_categorias_categoria" ("entidadesId" integer NOT NULL, "categoriaId" integer NOT NULL, CONSTRAINT "PK_a74a5b7a245d3e5782046808408" PRIMARY KEY ("entidadesId", "categoriaId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a503f5dcd83681c07ed65e1412" ON "entidades_categorias_categoria" ("entidadesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e6edc2b1131612380d8766c3a6" ON "entidades_categorias_categoria" ("categoriaId") `);
        await queryRunner.query(`ALTER TABLE "public"."entidades" DROP COLUMN "categorias"`);
        await queryRunner.query(`ALTER TABLE "entidades_categorias_categoria" ADD CONSTRAINT "FK_a503f5dcd83681c07ed65e14123" FOREIGN KEY ("entidadesId") REFERENCES "entidades"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "entidades_categorias_categoria" ADD CONSTRAINT "FK_e6edc2b1131612380d8766c3a6e" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entidades_categorias_categoria" DROP CONSTRAINT "FK_e6edc2b1131612380d8766c3a6e"`);
        await queryRunner.query(`ALTER TABLE "entidades_categorias_categoria" DROP CONSTRAINT "FK_a503f5dcd83681c07ed65e14123"`);
        await queryRunner.query(`ALTER TABLE "public"."entidades" ADD "categorias" character varying array NOT NULL`);
        await queryRunner.query(`DROP INDEX "IDX_e6edc2b1131612380d8766c3a6"`);
        await queryRunner.query(`DROP INDEX "IDX_a503f5dcd83681c07ed65e1412"`);
        await queryRunner.query(`DROP TABLE "entidades_categorias_categoria"`);
    }

}
