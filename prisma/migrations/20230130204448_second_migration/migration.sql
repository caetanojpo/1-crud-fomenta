/*
  Warnings:

  - You are about to drop the `_FormularioReuniaoToParticipante` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_FormularioReuniaoToParticipante" DROP CONSTRAINT "_FormularioReuniaoToParticipante_A_fkey";

-- DropForeignKey
ALTER TABLE "_FormularioReuniaoToParticipante" DROP CONSTRAINT "_FormularioReuniaoToParticipante_B_fkey";

-- DropTable
DROP TABLE "_FormularioReuniaoToParticipante";

-- CreateTable
CREATE TABLE "FormularioReuniaotoParticipante" (
    "formularioReuniaoId" INTEGER NOT NULL,
    "participanteId" INTEGER NOT NULL,

    CONSTRAINT "FormularioReuniaotoParticipante_pkey" PRIMARY KEY ("formularioReuniaoId","participanteId")
);

-- AddForeignKey
ALTER TABLE "FormularioReuniaotoParticipante" ADD CONSTRAINT "FormularioReuniaotoParticipante_formularioReuniaoId_fkey" FOREIGN KEY ("formularioReuniaoId") REFERENCES "FormularioReuniao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormularioReuniaotoParticipante" ADD CONSTRAINT "FormularioReuniaotoParticipante_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Participante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
