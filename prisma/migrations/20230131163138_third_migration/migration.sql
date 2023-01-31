/*
  Warnings:

  - The primary key for the `FormularioReuniaotoParticipante` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "FormularioReuniaotoParticipante" DROP CONSTRAINT "FormularioReuniaotoParticipante_pkey",
ADD COLUMN     "formularioReuniaotoParticipanteId" SERIAL NOT NULL,
ADD CONSTRAINT "FormularioReuniaotoParticipante_pkey" PRIMARY KEY ("formularioReuniaotoParticipanteId");
