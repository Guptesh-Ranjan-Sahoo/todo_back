import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTodoTable1752485787107 implements MigrationInterface {
    name = 'CreateTodoTable1752485787107'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."todo_status_enum" AS ENUM('Todo', 'Done')`);
        await queryRunner.query(`CREATE TABLE "todo" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "status" "public"."todo_status_enum" NOT NULL DEFAULT 'Todo', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todo"`);
        await queryRunner.query(`DROP TYPE "public"."todo_status_enum"`);
    }

}
